export default (path: string) => {
  return decodeURIComponent(path).split("/");
};
