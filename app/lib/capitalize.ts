const capitalize = (words: string, split?: string): string => {
  console.log("words", words);
  return words
    .split(split || " ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

export default capitalize;
