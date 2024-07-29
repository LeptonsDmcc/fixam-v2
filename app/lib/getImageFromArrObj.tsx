const getImageFromArrObj = (images: { [key: string]: string }[]): string =>
  Object.values(images[0])[0];

export default getImageFromArrObj;
