"use client";
import ContactSection from "@/components/ContactSection";
import Rating from "@/components/Ratings";
import Link from "next/link";
import {useRouter, useSearchParams} from "next/navigation";
import {getResults} from "@/lib/onSubmits";
import {Suspense, useEffect, useState} from "react";
import ResultsInfoCard from "@/components/ResultsInfoCard";
import {toast} from "react-toastify";
import ResultFoundCard from "@/components/ResultFoundCard";
import GetMailForm from "@/components/GetMailForm";
import Modal from "react-modal";


const customStyles = {
    overlay: {
        backgroundColor: "rgba(0, 0, 0, 0.5)"
    },
    content: {
        zIndex: 1000,
        maxWidth: "600px",
        width: "100%",
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)",
        border: "none",
        borderRadius: "10px",
        overflow: "hidden",
        backgroundColor: "white"
    }
};

const GetToken = () => {
        const router = useRouter();
        const searchParams = useSearchParams();
        const [modalIsOpen, setIsOpen] = useState(false);
        const token = searchParams.get("d");
        const [result, setResult] = useState<LendersResultsResponse | null>(null);
        const triggerModal = () => (setIsOpen(!modalIsOpen));

        useEffect(() => {
            const fetchResult = async () => {
                const result = await getResults(token || "");
                if (result) setResult(result);
            };
            if (token) fetchResult();
        }, [token]);
        if (!token) {
            toast.info("Fill and submit the form to get started", {toastId: "redirect-info"});
            router.push("/journey");
            return null;
        }

        return <div className="flex gap-5 flex-col items-center content-center w-full justify-center">
            <div className="p-4 w-full">
                <ResultsInfoCard result={result}/>
            </div>
            {result && <div className="p-4 w-full flex flex-col items-center">
                <ResultFoundCard onRevealForm={triggerModal}/>
                <Modal
                    isOpen={modalIsOpen}
                    // onAfterOpen={afterOpenModal}
                    onRequestClose={() => setIsOpen(false)}
                    style={customStyles}
                    contentLabel="Example Modal"
                >
                    <GetMailForm token={token} setIsOpen={setIsOpen}/>
                </Modal>
            </div>}
            <ContactSection token={token}/>
        </div>;
    }
;

const Page = () => {


    return (
        <div
            className={"flex flex-col gap-4 items-center min-h-screen"}
        >
            <Suspense>
                <GetToken/>
            </Suspense>
            <div className="">
                <p>
                    Need some help? Give us a call on{" "}
                    <Link className="blue" href="tell:+4420 3885 6411">
                        020 3885 6411
                    </Link>{" "}
                    or email us at
                    <Link className="blue" href="mailto:hello@contigonf.com">
                        {" "}
                        hello@contigonf.com
                    </Link>
                </p>
                <p>
                    Copyright © Contigo Limited, 2024 | Registered in England & Wales
                    (co. number 12743839)
                </p>
            </div>
            <div className="">
                <Rating/>
            </div>
        </div>
    );
};

export default Page;
