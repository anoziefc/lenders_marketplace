from pydantic import BaseModel, Field, EmailStr
from sqlalchemy import Column, String, Integer, ForeignKey, Numeric
from sqlalchemy.dialects.postgresql import UUID
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import relationship
from typing import Optional, List
from uuid import uuid4


Base = declarative_base()


class ContactForm(BaseModel):
    name: str = Field(..., alias="Name")
    email: EmailStr = Field(..., alias="Email Address")
    phone_number: str = Field(..., alias="Phone Number")
    token: str = Field(..., alias="Token")

    class Config:
        validate_by_name = True
        populate_by_name = True


class Lender(Base):
    __tablename__ = "lender"

    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid4)
    name = Column(String(255), nullable=False)

    def __str__(self):
        return self.name


class LoanProduct(Base):
    __tablename__ = "loan_product"

    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid4)

    lender_id = Column(UUID(as_uuid=True), ForeignKey("lender.id"), nullable=False)
    lender = relationship("Lender", backref="loan_products")

    finance_type = Column(String(1000), nullable=False)
    product_name = Column(String(1000), nullable=False)
    homeowner_required = Column(String(2))
    guarantor_required = Column(String(2))
    min_without_home = Column(Numeric(15, 2), nullable=True)

    min_lend = Column(Numeric(15, 2), nullable=False)
    max_lend = Column(Numeric(15, 2), nullable=False)

    price_range_low = Column(Numeric(15, 2), nullable=True)
    price_range_high = Column(Numeric(15, 2), nullable=True)
    per_month_or_factor_rate = Column(String(2))

    min_term_months = Column(Integer, nullable=True)
    max_term_months = Column(Integer, nullable=True)

    min_trading_history = Column(Integer, nullable=True)
    min_turnover = Column(Numeric(15, 2), nullable=True)

    payout = Column(String(20))

    def __str__(self):
        return self.product_name


class LoanRequest(BaseModel):
    amount: str = Field(..., alias="Amount to borrow")
    reason: str = Field(..., alias="Reason for wanting loan")
    importance: str = Field(..., alias="What is important to borrower")
    turn_over: str = Field(..., alias="Borrower's turnover")
    years_of_trading: str = Field(..., alias="Borrower's years of trading")
    home_owner: str = Field(..., alias="Is borrower a home owner?")

    class Config:
        validate_by_name = True
        populate_by_name = True


class LoanResponse(BaseModel):
    id: str = Field(..., alias="ID")
    lender_name: str = Field(..., alias="Lender Name")
    lower_lending_rate: Optional[int] = Field(None, alias="Lowest Rates")
    higher_lending_rate: Optional[int] = Field(None, alias="Highest Rates")
    per_month_or_factor_rate: Optional[str] = Field(None, alias="Per Month or Factor Rate")
    min_term_months: Optional[int] = Field(None, alias="Minimum Loan Term (Months)")
    max_term_months: Optional[int] = Field(None, alias="Maximum Loan Term (Months)")
    payout_time: Optional[str] = Field(None, alias="Payout Time")

    class Config:
        validate_by_name = True
        populate_by_name = True


class RequestLenderResponse(BaseModel):
    lenders_list: List[LoanResponse] = Field(..., alias="List of Potential Lenders")
    token: str = Field(..., alias="Token")


class SubmitContactResponse(BaseModel):
    message: str = Field(..., alias="Response Message")
    content: List[LoanResponse] = Field(..., alias="List of Potential Lenders")
