const truncateOrderId = (text: string) => {
  return text.split("").splice(0, 9).join("").toUpperCase();
};

export default truncateOrderId;
