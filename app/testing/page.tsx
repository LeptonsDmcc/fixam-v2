import React from "react";
import Space from "../components/Spacing/Space";
import Carousel from "../components/Carousel/Carousel";
import Image from "next/image";

const TestingPage = () => {
  return (
    <div>
      <Carousel>
        {[1, 2, 3].map((c) => (
          <Image
            height={400}
            width={1400}
            className="min-w-full max-h-[450px] object-cover"
            src={`/assets/banners/banner-${c}.jpg`}
            alt={""}
          ></Image>
        ))}
      </Carousel>

      <Space spacing={"my-12"} />
    </div>
  );
};

export default TestingPage;
