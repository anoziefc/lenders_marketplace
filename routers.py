from cache import redis_client, LENDER_CACHE_TTL_SECONDS
from db import get_storage
from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy import or_
from sqlalchemy.orm import joinedload, Session
from models import ContactForm, LoanResponse, LoanRequest, LoanProduct, RequestLenderResponse, SubmitContactResponse
from uuid import uuid4

import json


router = APIRouter()


@router.post("/get-lenders", response_model=RequestLenderResponse)
def request_lender(loanrequest: LoanRequest, db: Session = Depends(get_storage)):
    try:
        requested_amount = float(loanrequest.amount)
        turnover = float(loanrequest.turn_over)
        trading_years = int(loanrequest.years_of_trading)
        is_homeowner = loanrequest.home_owner.upper()

        filters = [
            LoanProduct.min_lend <= requested_amount,
            LoanProduct.max_lend >= requested_amount,
            LoanProduct.min_turnover <= turnover,
            LoanProduct.min_trading_history <= trading_years,
        ]

        if is_homeowner == "Y":
            filters.append(
                or_(
                    LoanProduct.homeowner_required == 'Y',
                    LoanProduct.homeowner_required == None
                )
            )
        else:
            filters.append(
                LoanProduct.min_without_home <= requested_amount
            )
        
        lenders = db.query_db(
            LoanProduct,
            filters=filters,
            options=[
                joinedload(LoanProduct.lender)
            ]
        )

        lenders_list = [
            LoanResponse(
                id=str(uuid4()),
                lender_name=lender.lender.name,
                lower_lending_rate=lender.min_lend,
                higher_lending_rate=lender.max_lend,
                per_month_or_factor_rate= lender.per_month_or_factor_rate,
                min_term_months=lender.min_term_months,
                max_term_months=lender.max_term_months,
                payout_time=lender.payout
            ).model_dump()
            for lender in lenders
        ]

        token = str(uuid4())

        redis_client.setex(
            token,
            LENDER_CACHE_TTL_SECONDS,
            json.dumps(lenders_list)
        )

        return {
            "lenders_list": lenders_list,
            "token": token
        }
    except Exception as e:
        print("Error creating product:", e)
        raise HTTPException(status_code=500, detail="Failed")


@router.post("/submit-contact", response_model=SubmitContactResponse)
def submit_contact(form: ContactForm):
    raw = redis_client.get(form.token)
    if not raw:
        raise HTTPException(status_code=404, detail="Lenders list not found or expired.")

    redis_client.delete(form.token)

    return {
        "message": "Lenders sent to email successfully.",
        "content": json.loads(raw)
    }
