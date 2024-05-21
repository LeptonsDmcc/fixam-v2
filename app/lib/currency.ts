const currency = (currency: string = "NGN", symbolOnly?: boolean) => {
  if (symbolOnly) return currency === "NGN" ? "₦" : "$";
  return currency === "NGN" ? "NGN ₦" : "USD $";
};

export default currency;
