from backend.cache import redis_client, LENDER_CACHE_TTL_SECONDS
from backend.models import LoanResponse, LoanRequest, LoanProduct
from dotenv import load_dotenv
from sqlalchemy.orm import joinedload, Session
from typing import Dict, List, Set
from uuid import uuid4

import json
import os
import requests


load_dotenv()
SHEET_URL = os.getenv("SHEET_URL")

def parse_loan_request(loanrequest: LoanRequest) -> Set:
    requested_amount = float(loanrequest.amount)
    turnover = float(loanrequest.turn_over)
    trading_years = int(loanrequest.years_of_trading) 
    is_homeowner = "Y" if loanrequest.home_owner == "Yes" else "N"
    return requested_amount, turnover, trading_years, is_homeowner

def build_filters(
        requested_amount: float,
        turnover: float,
        trading_years: int,
        is_homeowner: str
    ) -> List:
    filters = [
        LoanProduct.min_lend <= requested_amount,
        LoanProduct.max_lend >= requested_amount,
        LoanProduct.min_turnover <= turnover,
        LoanProduct.min_trading_history <= trading_years,
    ]
    if is_homeowner == "N":
        filters.append(
            LoanProduct.min_without_home <= requested_amount
        )
    return filters

def fetch_lenders(db: Session, filters: List) -> List:
    return db.query_db(
        LoanProduct,
        filters=filters,
        options=[
            joinedload(LoanProduct.lender)
        ]
    )

def build_lenders_response(lenders: List) -> List[LoanProduct]:
    return [
        LoanResponse(
            id=str(uuid4()),
            lender_name=lender.lender.name,
            min_lending=lender.min_lend,
            max_lending=lender.max_lend,
            lower_lending_rate=lender.price_range_low,
            higher_lending_rate=lender.price_range_high,
            per_month_or_factor_rate=lender.per_month_or_factor_rate,
            min_term_months=lender.min_term_months,
            max_term_months=lender.max_term_months,
            payout_time=lender.payout
        ).model_dump()
        for lender in lenders
    ]

def cache_lenders_data(loanrequest: LoanRequest, lenders_list: List) -> str:
    token = str(uuid4())
    redis_client.setex(
        token,
        LENDER_CACHE_TTL_SECONDS,
        json.dumps({
            "borrowers_details": loanrequest.model_dump(),
            "lenders_list": lenders_list,
        })
    )
    return token

def submit_spreadsheet(data: Dict, form: Dict) -> str:
    payload = {
        "id": str(uuid4()),
        "first_name": form.first_name,
        "last_name": form.last_name,
        "business_name": form.business_name,
        "business_type": form.business_type,
        "email": form.email,
        "phone_number": form.phone_number,
        "amount": data["borrowers_details"]["amount"],
        "reason": data["borrowers_details"]["reason"],
        "type_of_device": data["borrowers_details"]["type_of_device"],
        "importance": data["borrowers_details"]["importance"],
        "turn_over": data["borrowers_details"]["turn_over"],
        "years_of_trading": data["borrowers_details"]["years_of_trading"],
        "home_owner": data["borrowers_details"]["home_owner"]
    }

    try:
        resp = requests.post(
            url=SHEET_URL,
            json=payload,
        )
    except Exception as e:
        print(e)

    return resp.text
