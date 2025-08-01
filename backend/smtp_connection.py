from backend.models import LoanResponse
from dotenv import load_dotenv
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
from email.utils import make_msgid, formatdate
from typing import Dict, List

import os
import smtplib


load_dotenv()
SENDER = os.getenv("SENDER")
PASSWORD = os.getenv("APP_PASSWORD")
DOMAIN = os.getenv("DOMAIN")

def generate_loan_table_html(raw_data: Dict) -> str:
    loan_responses: List[LoanResponse] = raw_data["lenders_list"]
    rows = ""
    for loan in loan_responses:
        if loan["min_lending"] and loan["max_lending"]:
            if loan["min_lending"] == loan["max_lending"]:
                lending_range = f'£{loan["min_lending"]}'
            else:
                lending_range = f'£{loan["min_lending"]} - £{loan["max_lending"]}'
        else:
            lending_range = "N/A"

        if loan["lower_lending_rate"] and loan["higher_lending_rate"]:
            if loan["lower_lending_rate"] == loan["higher_lending_rate"]:
                if loan["per_month_or_factor_rate"] == "PM":
                    rate = f'{loan["lower_lending_rate"]}% PM (Per Month)'
                else:
                    rate = f'{loan["lower_lending_rate"]} FR (Factor Rate)'
            else:
                if loan["per_month_or_factor_rate"] == "PM":
                    rate = f'{loan["lower_lending_rate"]}% - {loan["higher_lending_rate"]}% PM (Per Month)'
                else:
                    rate = f'{loan["lower_lending_rate"]} - {loan["higher_lending_rate"]} FR (Factor Rate)'
        else:
            rate = "N/A"

        loan_amount = f'£{raw_data["borrowers_details"]["amount"]}'

        if loan["min_term_months"] and loan["max_term_months"]:
            if loan["min_term_months"] == loan["max_term_months"]:
                term = f'{loan["min_term_months"]} months'
            else:
                term = f'{loan["min_term_months"]} - {loan["max_term_months"]} months'
        else:
            if loan["max_term_months"]:
                term = f'{loan["max_term_months"]} months'
            else:
                term = "N/A"

        benefits = f"{loan['payout_time']} payout" if loan.get("payout_time") else "Fast approval"

        rows += f"""
            <tr>
                <td>{loan["lender_name"]}</td>
                <td>{lending_range}</td>
                <td>{rate}</td>
                <td>{loan_amount}</td>
                <td>{term}</td>
                <td>{benefits}</td>
            </tr>
        """
    
    return f"""
        <table border="1" cellpadding="8" cellspacing="0" style="border-collapse: collapse; width: 100%;">
            <tr>
                <th>Lender</th>
                <th>Lending Range</th>
                <th>Estimated Rate</th>
                <th>Loan Amount</th>
                <th>Term Length</th>
                <th>Key Benefits</th>
            </tr>
            {rows}
        </table>
    """

def send_email(data):
    msg = MIMEMultipart("alternative")
    msg["Subject"] = "Your Business Loan Options - Pre-Approved Offers Inside"
    msg["From"] = SENDER
    msg["To"] = data["email"]
    msg["Date"] = formatdate(localtime=True)
    msg["Message-ID"] = make_msgid(domain=DOMAIN)

    loan_table_html = generate_loan_table_html(data["data"])

    html = f"""
    <html>
    <body style="font-family: Arial, sans-serif; line-height: 1.6;">
        <p>Hi {data["first_name"]},</p>
        <p>Thanks for providing your details. Based on the information you shared, we've matched you with lenders from our panel who are likely to approve your application.</p>

        <p>Please find your tailored options below:</p>

        {loan_table_html}

        <p>💡 <strong>Rates and terms are subject to final lender approval and may vary depending on documentation.</strong></p>

        <h3>Next Steps</h3>
        <p>If you'd like to move forward with one or more of the options above, just reply to this email.</p>

        <p>We'll walk you through the next steps and help you secure the best possible deal. Or simply reply with your preferred lender and we'll take care of the rest.</p>

        <h3>Why Contigo Commercial Finance?</h3>
        <ul>
            <li>✔️ Registered credit broker</li>
            <li>✔️ Panel of 50+ trusted lenders</li>
            <li>✔️ £5m+ in loans processed</li>
            <li>✔️ Market-leading executive broker support</li>
        </ul>

        <p>Looking forward to helping you secure the funding your business deserves.</p>

        <p>Warm regards,<br><strong>Daniel Afshar</strong><br>Senior Funding Consultant<br>Contigo Finance</p>
    </body>
    </html>
    """

    msg.attach(MIMEText(html, "html"))

    try:
        with smtplib.SMTP_SSL("smtp.gmail.com", 465) as server:
            server.login(SENDER, PASSWORD)
            server.send_message(msg)
    except Exception as e:
        print(f"Failed to send email: {e}")
