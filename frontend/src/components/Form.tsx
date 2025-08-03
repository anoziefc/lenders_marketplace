"use client";
import React, {useEffect, useState} from "react";
import Button from "./Button";
import Check from "./Check";
import {fundingOnSubmit} from "@/lib/onSubmits";

const formData: FundingFormData = {
    fundingAmount: 0,
    fundingPurpose: "",
    important: "",
    annualTurnover: 0,
    over3Years: false,
    homeOwnerInUk: false,
};

const MostImportant = ({
                           currentForm,
                           setCurrentForm,
                           formValue,
                           setFormValue,
                       }: FormProps) => {
    const [fieldsFilled, setFieldsFilled] = useState(false);
    const [important, setImportant] = useState<string>(formValue.important);

    const handleSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
        setImportant(e.target.value);
    };
    const options = [
        "Speed",
        "Price",
        "Personal Service",
        "Impaired credit history",
    ];
    useEffect(() => {
        if (important) {
            setFormValue((prevFormValue: FundingFormData) => ({
                ...prevFormValue,
                important: important,
            }));
            setFieldsFilled(true);
        } else {
            setFieldsFilled(false);
        }
    }, [important, setFormValue]);
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
                    What&apos;s most important to you?
                </label>
                <p className="text-sm text-gray-500 mb-4">
                    There are loads of options. We can help you find the right one.
                </p>

                <div className="space-y-4">
                    {options.map((purpose) => (
                        <Check
                            key={purpose}
                            purpose={purpose}
                            fundingPurpose={important}
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
                      setFormValue,
                  }: FormProps) => {
    const [annualTurnover, setAnnualTurnover] = useState<string>(
        formValue.annualTurnover.toString()
    );
    const [trading3Years, setTrading3Years] = useState<string>(
        formValue.over3Years ? "Yes" : "No"
    );
    const [homeOwner, setHomeOwner] = useState<string>(
        formValue.homeOwnerInUk ? "Yes" : "No"
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
    const threeYears = ["Yes", "No"];
    const inUk = ["Yes", "No"];

    useEffect(() => {
        if (annualTurnover && trading3Years && homeOwner) {
            setFormValue((prevFormValue: FundingFormData) => ({
                ...prevFormValue,
                annualTurnover: Number(annualTurnover.toString().replace(/£|,/g, "")),
                over3Years: trading3Years === "Yes",
                homeOwnerInUk: homeOwner === "Yes",
            }));
            setFieldsFilled(true);
        } else {
            setFieldsFilled(false);
        }
    }, [annualTurnover, homeOwner, trading3Years, setFormValue]);

    const handleNext = () => {
        fundingOnSubmit(formValue);
    };
    const handleBack = () => {
        setCurrentForm(currentForm - 1);
    };

    return (
        <div className="">
            <div className="mb-8">
                <h3 className="block text-xl font-semibold text-gray-800 mb-2"></h3>
                <label
                    htmlFor="annualTurnover"
                    className="block text-xl font-semibold text-gray-800 mb-2"
                >
                    Just a few facts and we&apos;ll provide you with some tailored
                    results.
                </label>
                <p className="text-sm text-gray-500 mb-4">
                    What&apos;s your annual turnover
                </p>
                <input
                    type="text"
                    id="annualTurnover"
                    value={annualTurnover || ""}
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
                    Have you been trading longer than 3 years?
                </label>

                <div className="space-y-4">
                    {threeYears.map((purpose) => (
                        <Check
                            key={purpose}
                            purpose={purpose}
                            fundingPurpose={trading3Years}
                            handlePurposeChange={handleSetTrading3Years}
                        />
                    ))}
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
                            fundingPurpose={homeOwner}
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
                     setFormValue,
                 }: FormProps) => {
    const [fundingAmount, setFundingAmount] = useState<string>(
        formValue.fundingAmount.toString()
    );
    const [fieldsFilled, setFieldsFilled] = useState(false);

    const [fundingPurpose, setFundingPurpose] = useState<string>(
        formValue.fundingPurpose
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
        if (fundingAmount && (fundingPurpose || assetType)) {
            setFormValue((prevFormValue: FundingFormData) => ({
                ...prevFormValue,
                fundingAmount: Number(fundingAmount.toString().replace(/£|,/g, "")),
                fundingPurpose: assetType || fundingPurpose,
            }));
            setFieldsFilled(true);
        } else {
            setFieldsFilled(false);
        }
    }, [assetType, fundingAmount, fundingPurpose, setFormValue]);

    const fundingPurposes = [
        "Growth",
        "Cashflow",
        "Refinancing",
        "Asset Finance",
        "Other (eg. Acquisition, MBO)",
    ];

    const assetTypes = [
        "Vehicle",
        "Plant & Machinery",
        "Equipment",
        "Refurbishments",
        "Other",
    ];

    const handleNext = () => {
        setCurrentForm(currentForm + 1);
    };

    return (
        <div className="">
            <div className="mb-8">
                <label
                    htmlFor="fundingAmount"
                    className="block text-xl font-semibold text-gray-800 mb-2"
                >
                    How much funding are you looking for?
                </label>
                <p className="text-sm text-gray-500 mb-4">
                    Enter an amount between £1,000 and £5,000,000
                </p>
                <input
                    type="text"
                    id="fundingAmount"
                    value={fundingAmount || ""}
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
                    {fundingPurposes.map((purpose) => (
                        <Check
                            key={purpose}
                            purpose={purpose}
                            fundingPurpose={fundingPurpose}
                            handlePurposeChange={handlePurposeChange}
                        />
                    ))}
                </div>
            </div>
            {fundingPurpose === "Asset Finance" && (
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
                                fundingPurpose={assetType}
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
