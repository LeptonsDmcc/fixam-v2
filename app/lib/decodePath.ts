const decodePath = (path: string) => {
  return decodeURIComponent(path).split("/");
};

export default decodePath;
