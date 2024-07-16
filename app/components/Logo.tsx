import React from "react";
import Image from "next/image";

const Logo = () => {
  return (
    <div>
      <Image
        src="/assets/fixamlogo-b.png"
        className="opacity-80 w-12 md:w-16 
              md:m-auto"
        alt="Fixam's logo"
        width={70}
        height={70}
      />
    </div>
  );
};

export default Logo;
