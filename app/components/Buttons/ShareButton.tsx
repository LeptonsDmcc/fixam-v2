"use client";

import { SlShare } from "react-icons/sl";
import IconHolder from "../Icons/IconHolder";

const ShareButton = () => {
  const handleShare = async () => {
    if (navigator.share && navigator.canShare({ url: location.href })) {
      await navigator.share({
        title: "Beautiful Products",
        url: ``,
        text:
          "I realy love this product: " + `title` + ", kindly check it out.",
      });
    } else {
      console.log("Your browser doesn't support native share");
    }
  };

  return (
    <IconHolder onClick={handleShare}>
      <SlShare />
    </IconHolder>
  );
};

export default ShareButton;
