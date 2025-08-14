from backend.models import LoanResponse
from dotenv import load_dotenv
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
from email.utils import make_msgid, formatdate
from typing import Dict, List

import base64
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
                    rate = f'{loan["lower_lending_rate"]}% PM'
                else:
                    rate = f'{loan["lower_lending_rate"]} FR'
            else:
                if loan["per_month_or_factor_rate"] == "PM":
                    rate = f'{loan["lower_lending_rate"]}% - {loan["higher_lending_rate"]}% PM'
                else:
                    rate = f'{loan["lower_lending_rate"]} - {loan["higher_lending_rate"]} FR'
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
            <tr class="loan-row">
                <td style="padding: 12px; border-bottom: 1px solid #eeeeee; font-size: 14px; color: #333333;">{loan["lender_name"]}</td>
                <td style="padding: 12px; border-bottom: 1px solid #eeeeee; font-size: 14px; color: #333333;">{lending_range}</td>
                <td style="padding: 12px; border-bottom: 1px solid #eeeeee; font-size: 14px; color: #333333;">{rate}</td>
                <td style="padding: 12px; border-bottom: 1px solid #eeeeee; font-size: 14px; color: #333333;">{loan_amount}</td>
                <td style="padding: 12px; border-bottom: 1px solid #eeeeee; font-size: 14px; color: #333333;">{term}</td>
                <td style="padding: 12px; border-bottom: 1px solid #eeeeee; font-size: 14px; color: #333333;">{benefits}</td>
            </tr>
        """
    
    return f"""
        <table border="0" cellpadding="0" cellspacing="0" width="100%" style="border-collapse: collapse;">
            <thead style="background-color: #f5f5f5;">
                <tr>
                    <th style="padding: 12px; text-align: left; font-size: 14px; color: #555555; font-weight: bold;">Lender</th>
                    <th style="padding: 12px; text-align: left; font-size: 14px; color: #555555; font-weight: bold;">Lending Range</th>
                    <th style="padding: 12px; text-align: left; font-size: 14px; color: #555555; font-weight: bold;">Estimated Rate</th>
                    <th style="padding: 12px; text-align: left; font-size: 14px; color: #555555; font-weight: bold;">Loan Amount</th>
                    <th style="padding: 12px; text-align: left; font-size: 14px; color: #555555; font-weight: bold;">Term Length</th>
                    <th style="padding: 12px; text-align: left; font-size: 14px; color: #555555; font-weight: bold;">Key Benefits</th>
                </tr>
            </thead>
            <tbody>
                {rows}
            </tbody>
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

    try:
        with open("./backend/contigo-logo.png", "rb") as f:
            encoded_logo = base64.b64encode(f.read()).decode("utf-8")
        logo_data_uri = f"data:image/png;base64,{encoded_logo}"
    except FileNotFoundError:
        print("Logo file not found. Please ensure 'contigo-logo.png' is in the same directory.")
        logo_data_uri = ""

    html = f"""
    <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Your Business Loan Options</title>
    </head>
    <body style="font-family: 'Segoe UI', 'Roboto', 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; background-color: #fcfcfc; margin: 0; padding: 0;">
        <table align="center" border="0" cellpadding="0" cellspacing="0" width="600" style="background-color: #ffffff; border: 1px solid #dddddd; border-collapse: collapse;">
            <tr>
                <td style="background-color: #1b5e20; padding: 20px; text-align: center;">
                    <img src="{logo_data_uri}" alt="Contigo Commercial Finance Logo" style="max-width: 200px; height: auto;">
                </td>
            </tr>
            <tr>
                <td style="padding: 24px; color: #333333;">
                    <p style="margin: 0 0 16px;">Hi {data["first_name"]},</p>
                    <p style="margin: 0 0 16px;">Thanks for providing your details. Based on the information you shared, we've matched you with lenders from our panel who are likely to approve your application.</p>
                    <p style="margin: 0 0 24px;">Please find your tailored options below:</p>
                    {loan_table_html}

                    <p style="font-size: 12px; color: #777777; margin: 24px 0 0;">
                        💡 <strong>Rates and terms are subject to final lender approval and may vary depending on documentation.</strong>
                    </p>

                    <h3 style="color: #4caf50; margin-top: 30px; margin-bottom: 10px; font-size: 20px;">Next Steps</h3>
                    <p style="margin: 0 0 16px;">One of our Loan Specialists will give you a call to talk through the options and walk you through the next steps to secure the best deal.</p>
                    <p style="margin: 0 0 24px;">Or simply reply with your preferred lender and we'll take care of the rest.</p>

                    <h3 style="color: #4caf50; margin-top: 30px; margin-bottom: 10px; font-size: 20px;">Why Contigo Commercial Finance?</h3>
                    <ul style="list-style-type: none; padding: 0; margin: 0 0 24px;">
                        <li style="margin-bottom: 8px;">✔️ Registered credit broker</li>
                        <li style="margin-bottom: 8px;">✔️ Panel of 50+ trusted lenders</li>
                        <li style="margin-bottom: 8px;">✔️ £5m+ in loans processed</li>
                        <li style="margin-bottom: 8px;">✔️ Market-leading executive broker support</li>
                    </ul>

                    <p style="margin: 0 0 16px;">Looking forward to helping you secure the funding your business deserves.</p>

                    <p style="margin: 0;">Warm regards,<br>
                    <strong>Grace Mills</strong><br>
                    Admin Assistant,<br>Contigo Commercial Finance.</p>
                </td>
            </tr>
            <tr>
                <td style="background-color: #1b5e20; padding: 20px; text-align: center;">
                    <p style="color: #ffffff; font-size: 12px; margin: 0;">&copy; Contigo Commercial Finance</p>
                </td>
            </tr>
        </table>
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
