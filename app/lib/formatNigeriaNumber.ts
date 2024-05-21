const formatNigeriaNumber = (phoneNumber: string) => {
  // Remove leading '0' and prepend '+234'
  return phoneNumber.replace(/^0/, "+234");
};

export default formatNigeriaNumber;
