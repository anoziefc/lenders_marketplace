import axiosInstance from "./axiosInstance";

export interface GetLenders {
	id: string;
	lender_name: string;
	min_lending: number;
	max_lending: number;
	lower_lending_rate: string;
	higher_lending_rate: string;
	per_month_or_factor_rate: string;
	min_term_months: number;
	max_term_months: number;
	payout_time: string;
}

export const submitJourney = ( fundingAmount: string, fundingPurpose: string ) => {
	try {
		axiosInstance.post( "/get-lenders", {
			fundingAmount,
			fundingPurpose
		} );
	} catch ( error ) {
		console.error( error );
	}

};
interface ContactInfo {
	first_name: string;
	last_name: string;
	email: string;
	phone_number: string;
}
export const submitContact = ( contactInfo: ContactInfo ) => {
	try {
		axiosInstance.post( "/get-lenders",
			contactInfo
		);
	} catch ( error ) {
		console.error( error );
	}

};
