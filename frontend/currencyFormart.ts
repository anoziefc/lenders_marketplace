const currencyFormat = (amount: string | number) => {
    const sanitizedAmount = typeof amount === "string" ? amount.replace(/[^\d.-]/g, "") : amount;
    const currencyNum = Number(sanitizedAmount);
    if (Number.isNaN(currencyNum) || currencyNum === 0 || currencyNum === null || currencyNum === undefined) {
        return "£";
    }

    return currencyNum.toLocaleString("en-GB", {
        style: "currency",
        currency: "GBP",
        minimumFractionDigits: 0
    });
};
export default currencyFormat;
