import React from "react";
import Image from "next/image";
import Carousel from "@/app/components/Carousel/Carousel";
import Space from "@/app/components/Spacing/Space";

const TestingPage = () => {
  return (
    <div>
      <Carousel>
        {[1, 2, 3].map((c) => (
          <Image
            key={c}
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
