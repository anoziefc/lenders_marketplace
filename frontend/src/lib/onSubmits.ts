import axiosInstance from "@/lib/axiosInstance";


export const fundingOnSubmit = async (fundingFormData: FundingFormData) => {
    try {
        const response = await axiosInstance.post("/get-lenders", fundingFormData);
        if (response) {
            return response.data;
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
        let response = await axiosInstance.post("/submit-contact", contactIfo);
        // todo: get token from response
        // if (response) window.location.reload();
        if (response) {
            return response.data;
        } else {
            return null;
        }
    } catch (err) {
        console.log(err);
        return null;
    }
};

export const getResults = async (token: string) => {
    try {
        let response = await axiosInstance.get("/get-lenders", {
            params: {id: token}
        });
        if (response) {
            return response.data;
        } else {
            return null;
        }
    } catch (err) {
        console.log(err);
        return null;
    }
};
