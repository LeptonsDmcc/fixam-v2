const currency = (option?: { currency?: string; withText?: boolean }) => {
  if (option?.withText) return option?.currency === "NGN" ? "NGN ₦" : "USD $";
  if (option?.currency) return option?.currency === "NGN" ? "₦" : "$";
  return "₦";
};

export default currency;
