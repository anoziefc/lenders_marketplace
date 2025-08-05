"use client";
import React, {useEffect, useState} from "react";
import Button from "./Button";
import Check from "./Check";
import {fundingOnSubmit} from "@/lib/onSubmits";
import {useRouter} from "next/navigation";

const formData: FundingFormData = {
    amount: "",
    reason: "",
    importance: "",
    turn_over: "",
    years_of_trading: "",
    home_owner: ""
};

const MostImportant = ({
                           currentForm,
                           setCurrentForm,
                           formValue,
                           setFormValue
                       }: FormProps) => {
    const [fieldsFilled, setFieldsFilled] = useState(false);
    const [importance, setImportant] = useState<string>(formValue.importance);

    const handleSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
        setImportant(e.target.value);
    };
    const options = [
        "Speed",
        "Price",
        "Personal Service",
        "Impaired credit history"
    ];
    useEffect(() => {
        if (importance) {
            setFormValue((prevFormValue: FundingFormData) => ({
                ...prevFormValue,
                importance: importance
            }));
            setFieldsFilled(true);
        } else {
            setFieldsFilled(false);
        }
    }, [importance, setFormValue]);
    const handleNext = () => {
        setCurrentForm(currentForm + 1);
    };
    const handleBack = () => {
        setCurrentForm(currentForm - 1);
    };

    return (
        <div className="">
            <div className="mb-8">
                <label className="block text-xl font-semibold text-gray-800 mb-2">
                    What&apos;s most importance to you?
                </label>
                <p className="text-sm text-gray-500 mb-4">
                    There are loads of options. We can help you find the right one.
                </p>

                <div className="space-y-4">
                    {options.map((purpose) => (
                        <Check
                            key={purpose}
                            purpose={purpose}
                            reason={importance}
                            handlePurposeChange={handleSelect}
                        />
                    ))}
                </div>
            </div>

            <div className="flex justify-center mt-8 gap-4">
                <Button value="Back" cls={"bg-transparent"} onClick={handleBack} next/>
                <Button
                    disabled={!fieldsFilled}
                    value="Next"
                    onClick={handleNext}
                    next
                />
            </div>
        </div>
    );
};
const AboutYou = ({
                      currentForm,
                      setCurrentForm,
                      formValue,
                      setFormValue
                  }: FormProps) => {
    const router = useRouter();
    const [turn_over, setAnnualTurnover] = useState<string>(
        formValue.turn_over.toString()
    );
    const [trading3Years, setTrading3Years] = useState<string>(
        formValue.years_of_trading
    );
    const [homeOwner, setHomeOwner] = useState<string>(
        formValue.home_owner
    );
    const [fieldsFilled, setFieldsFilled] = useState(false);

    const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAnnualTurnover(e.target.value);
    };
    const handleSetTrading3Years = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTrading3Years(e.target.value);
    };

    const handleSetHomeOwner = (e: React.ChangeEvent<HTMLInputElement>) => {
        setHomeOwner(e.target.value);
    };

    const currencyAppend = (e: React.FocusEvent<HTMLInputElement>) => {
        if (!e.target.value.startsWith("£")) {
            setAnnualTurnover("£" + e.target.value);
        }
    };

    const inUk = ["Yes", "No"];

    useEffect(() => {
        if (turn_over && trading3Years && homeOwner) {
            setFormValue((prevFormValue: FundingFormData) => ({
                ...prevFormValue,
                turn_over: turn_over.toString().replace(/£|,/g, ""),
                years_of_trading: trading3Years,
                home_owner: homeOwner
            }));
            setFieldsFilled(true);
        } else {
            setFieldsFilled(false);
        }
    }, [turn_over, homeOwner, trading3Years, setFormValue]);

    const handleNext = async () => {
        try {
            const token = (await fundingOnSubmit(formValue))?.token;
            if (token) {
                // router.push({pathname: `/result`, query: {token: token}});
                router.push(`/results?d=${token}`);
            } else {
                console.log("no token");
            }
        } catch (err) {
            console.error(err);
        }
    };
    const handleBack = () => {
        setCurrentForm(currentForm - 1);
    };

    return (
        <div className="">
            <div className="mb-8">
                <h3 className="block text-xl font-semibold text-gray-800 mb-2"></h3>
                <label
                    htmlFor="turn_over"
                    className="block text-xl font-semibold text-gray-800 mb-2"
                >
                    Just a few facts and we&apos;ll provide you with some tailored
                    results.
                </label>
                <p className="text-sm text-gray-500 mb-4">
                    What&apos;s your annual turnover
                </p>
                <input
                    type="number"
                    id="turn_over"
                    value={turn_over || ""}
                    onChange={handleAmountChange}
                    onFocus={currencyAppend}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg text-lg text-gray-800
                       focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500
                       transition duration-200 ease-in-out"
                    placeholder="£100,000"
                />
            </div>

            <div className="mb-8">
                <label className="block text-xl font-semibold text-gray-800 mb-2">
                    How long have you been trading for? In Months
                </label>

                <div className="space-y-4">
                    <input
                        type="number"
                        id="years_of_trading"
                        value={trading3Years || ""}
                        onChange={handleSetTrading3Years}
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg text-lg text-gray-800
                       focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500
                       transition duration-200 ease-in-out"
                        placeholder="£100,000"
                    />
                </div>
            </div>
            <div className="mb-8">
                <label className="block text-xl font-semibold text-gray-800 mb-2">
                    Are you a homeowner in the UK?
                </label>

                <div className="space-y-4">
                    {inUk.map((purpose) => (
                        <Check
                            key={purpose}
                            purpose={purpose}
                            reason={homeOwner}
                            handlePurposeChange={handleSetHomeOwner}
                        />
                    ))}
                </div>
            </div>

            <div className="flex justify-center mt-8 gap-4">
                <Button value="Back" cls={"bg-transparent"} onClick={handleBack} next/>
                <Button
                    disabled={!fieldsFilled}
                    value="Next"
                    onClick={handleNext}
                    next
                />
            </div>
        </div>
    );
};

const HowMuch = ({
                     currentForm,
                     setCurrentForm,
                     formValue,
                     setFormValue
                 }: FormProps) => {
    const [amount, setFundingAmount] = useState<string>(
        formValue.amount.toString()
    );
    const [fieldsFilled, setFieldsFilled] = useState(false);

    const [reason, setFundingPurpose] = useState<string>(
        formValue.reason
    );
    const [assetType, setAssetType] = useState<string>("");
    const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFundingAmount(e.target.value);
    };
    const handlePurposeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFundingPurpose(e.target.value);
    };
    const handleAssetTypeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAssetType(e.target.value);
    };

    const currencyAppend = (e: React.FocusEvent<HTMLInputElement>) => {
        if (!e.target.value.startsWith("£")) {
            setFundingAmount("£" + e.target.value);
        }
    };

    useEffect(() => {
        if (amount && (reason || assetType)) {
            setFormValue((prevFormValue: FundingFormData) => ({
                ...prevFormValue,
                amount: amount.toString().replace(/£|,/g, ""),
                reason: assetType || reason
            }));
            setFieldsFilled(true);
        } else {
            setFieldsFilled(false);
        }
    }, [assetType, amount, reason, setFormValue]);

    const reasons = [
        "Growth",
        "Cashflow",
        "Refinancing",
        "Asset Finance",
        "Other (eg. Acquisition, MBO)"
    ];

    const assetTypes = [
        "Vehicle",
        "Plant & Machinery",
        "Equipment",
        "Refurbishments",
        "Other"
    ];

    const handleNext = () => {
        setCurrentForm(currentForm + 1);
    };

    return (
        <div className="">
            <div className="mb-8">
                <label
                    htmlFor="amount"
                    className="block text-xl font-semibold text-gray-800 mb-2"
                >
                    How much funding are you looking for?
                </label>
                <p className="text-sm text-gray-500 mb-4">
                    Enter an amount between £1,000 and £5,000,000
                </p>
                <input
                    type="text"
                    id="amount"
                    value={amount || ""}
                    onChange={handleAmountChange}
                    onFocus={currencyAppend}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg text-lg text-gray-800
                       focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500
                       transition duration-200 ease-in-out"
                    placeholder="£100,000"
                />
            </div>

            <div className="mb-8">
                <label className="block text-xl font-semibold text-gray-800 mb-2">
                    What do you need the funds for?
                </label>
                <p className="text-sm text-gray-500 mb-4">
                    Different funding types are available for different purposes.
                </p>

                <div className="space-y-4">
                    {reasons.map((purpose) => (
                        <Check
                            key={purpose}
                            purpose={purpose}
                            reason={reason}
                            handlePurposeChange={handlePurposeChange}
                        />
                    ))}
                </div>
            </div>
            {reason === "Asset Finance" && (
                <div className="mb-8">
                    <hr className="mt-8"/>
                    <label className="block text-xl font-semibold text-gray-800 mb-2">
                        What type of asset are you financing?
                    </label>

                    <div className="space-y-4">
                        {assetTypes.map((purpose) => (
                            <Check
                                key={purpose}
                                purpose={purpose}
                                reason={assetType}
                                handlePurposeChange={handleAssetTypeChange}
                            />
                        ))}
                    </div>
                </div>
            )}

            <div className="flex justify-center mt-8">
                <Button
                    disabled={!fieldsFilled}
                    value="Next"
                    onClick={handleNext}
                    next
                />
            </div>
        </div>
    );
};

const Form = () => {
    const [currentForm, setCurrentForm] = useState(0);
    const [formValue, setFormValue] = useState(formData);

    return (
        <div className="bg-white rounded-3xl shadow-xl p-6 border-1 max-w-xl w-full relative overflow-hidden">
            <div className="absolute -left-10 -top-10 w-32 h-32 bg-purple-100 rounded-full opacity-50 blur-xl"></div>
            <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-pink-100 rounded-full opacity-50 blur-xl"></div>
            {currentForm === 0 && (
                <HowMuch
                    currentForm={currentForm}
                    setCurrentForm={setCurrentForm}
                    formValue={formValue}
                    setFormValue={setFormValue}
                />
            )}
            {currentForm === 1 && (
                <MostImportant
                    currentForm={currentForm}
                    setCurrentForm={setCurrentForm}
                    formValue={formValue}
                    setFormValue={setFormValue}
                />
            )}
            {currentForm === 2 && (
                <AboutYou
                    currentForm={currentForm}
                    setCurrentForm={setCurrentForm}
                    formValue={formValue}
                    setFormValue={setFormValue}
                />
            )}
        </div>
    );
};

export default Form;
