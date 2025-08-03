import Router from "next/router";
import axiosInstance from "./axiosInstance";
import {redirect} from "next/navigation";


export const fundingOnSubmit = async (fundingFormData: FundingFormData) => {

    /*return axiosInstance.post("/get-lenders", fundingFormData)
         .then((response) => {
             if (response) redirect("/results?id=" + response.data.id)
         })
         .catch((err) =>
             console.log(err)
         );*/
    return new Promise((resolve, reject) => (
        setTimeout(() => {
            resolve({data: {id: "123"}})
        }, 1000)
    )).then((response) => {
            console.log(response?.data.id)
            // redirect(`/results?id=${response?.data.id}`)
        window.location.replace(`/results?id=${response?.data.id}`)
        }
    ).catch((err) =>
        console.error(err))
};

