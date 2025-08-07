import axiosInstance from "@/lib/axiosInstance";


export const fundingOnSubmit = async (fundingFormData: FundingFormData) => {
    try {
        // console.log(fundingFormData);
        const response = await axiosInstance.post("/get-lenders", fundingFormData);
        console.log(response);
        if (response) {
            return response.data as fundFormResponse;
        } else {
            return null;
        }
    } catch (err) {
        console.error(err);
        return null;
    }
};

export const contactOnSubmit = async (contactIfo: ContactFormData) => {
    try {
        const response = await axiosInstance.post("/submit-contact", contactIfo);
        // todo: get token from response
        // if (response) window.location.reload();
        if (response) {
            return response.data;
        } else {
            return {message: "Form submission failed"};
        }
    } catch (err) {
        console.log(err);
        return err;
    }
};

export const getResults = async (token: string) => {
    try {
        const response = await axiosInstance.get("/results", {
            params: {token}
        });
        if (response) {
            return response.data as LendersResultsResponse;
        } else {
            return null;
        }
    } catch (err) {
        console.log(err);
        return null;
    }
};
