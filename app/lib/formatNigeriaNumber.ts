const formatNigeriaNumber = (phoneNumber: string | FormDataEntryValue) => {
  // Remove leading '0' and prepend '+234'
  return phoneNumber.toString().replace(/^0/, "+234");
};

export default formatNigeriaNumber;
