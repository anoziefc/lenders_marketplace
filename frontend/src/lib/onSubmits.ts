import axiosInstance from "@/lib/axiosInstance";


export const fundingOnSubmit = (fundingFormData: FundingFormData) => {

    axiosInstance.post("/get-lenders", fundingFormData)
        .then((response) => {
            if (response) window.location.replace("/results?id=" + response.data.id);
        })
        .catch((err) =>
            console.log(err)
        );
};

export const contactOnSubmit = async (contactIfo: ContactFormData) => {
    try {
        let response = await axiosInstance.post("/submit-contact", contactIfo);
        if (response) window.location.reload();
    } catch (err) {
        return console.log(err);
    }
};
