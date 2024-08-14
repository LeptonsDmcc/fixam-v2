export const getImageFromArrObj = (
  images: { [key: string]: string }[]
): string => Object.values(images[0])[0];

export const convertImageFromArrObj = (
  images: { [key: string]: string }[],
  alt: string
) => {
  return images.map((image) => ({
    src: Object.values(image)[0],
    alt,
  }));
};
