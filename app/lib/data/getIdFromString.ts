const getIdFromString = (value: string) => {
  return value.split("/")[value.split("/").length - 2];
};

export default getIdFromString;
