from backend.cache import redis_client
from backend.db import get_storage
from backend.models import (
    ContactForm,
    LoanRequest,
    RequestLenderResponse,
    SubmitContactResponse
)
from backend.smtp_connection import send_email
from backend.utils import (
    build_filters,
    build_lenders_response,
    cache_lenders_data,
    fetch_lenders,
    parse_loan_request,
    submit_spreadsheet
)
from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

import json


router = APIRouter()


@router.post("/get-lenders", response_model=RequestLenderResponse)
def request_lender(loanrequest: LoanRequest, db: Session = Depends(get_storage)):
    try:
        requested_amount, turnover, trading_years, is_homeowner = parse_loan_request(loanrequest)
        filters = build_filters(requested_amount, turnover, trading_years, is_homeowner)

        lenders = fetch_lenders(db, filters)
        lenders_list = build_lenders_response(lenders)
        
        token = cache_lenders_data(loanrequest, lenders_list)

        return {
            "lenders_list": lenders_list,
            "token": token
        }

    except Exception as e:
        print("Error in request_lender:", e)
        raise HTTPException(status_code=500, detail="Failed")


@router.post("/submit-contact", response_model=SubmitContactResponse)
def submit_contact(form: ContactForm):
    raw = redis_client.get(form.token)
    if not raw:
        raise HTTPException(status_code=404, detail="Lenders list not found or expired.")

    redis_client.delete(form.token)
    data = json.loads(raw)
    send = {
        "first_name": form.first_name,
        "email": form.email,
        "data": data
    }
    submit_spreadsheet(data, form)
    send_email(send)

    return {
        "message": "Lenders sent to email successfully.",
        "content": json.loads(raw)
    }
