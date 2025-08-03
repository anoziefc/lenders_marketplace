import Router from "next/router";
import axiosInstance from "./axiosInstance";


export const fundingOnSubmit = async ( fundingFormData: FundingFormData ) => {
	try {
		await axiosInstance.post( "/get-lenders", fundingFormData );
		Router.push( "/results" );
		console.log( fundingFormData );

	} catch ( error ) {
		console.error( error );
	}

};

export const submitContact = ( contactInfo: ContactInfo ) => {
	try {
		axiosInstance.post( "/get-lenders",
			contactInfo
		);
	} catch ( error ) {
		console.error( error );
	}

};
