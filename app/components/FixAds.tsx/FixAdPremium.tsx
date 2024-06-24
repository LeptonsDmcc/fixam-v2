import Button from "../Buttons/Button";
import Heading from "../Heading";
import Image from "next/image";
import Space from "../Spacing/Space";

const FixAdPremium = () => {
  return (
    <section
      className="h-[240px] bg-[url('/assets/fix-ads-bg.png')]
    text-white rounded-3xl "
    >
      <div
        className="flex flex-col justify-center
      relative max-w-[1200px] m-auto py-2 px-6 text-center
      md:px-0"
      >
        <Image
          src="/assets/black-woman.png"
          alt="Black Woman Fixam Ad Background"
          width={310}
          height={240}
          className="absolute right-0 top-0 hidden md:block"
        />
        <Space spacing="my-3" />
        <Heading variant="h4" styles="text-2xl text-white">
          40% Off Today
        </Heading>
        <Space spacing="my-3" />
        <p
          className="max-w-[720px] text-xs 
        md:text-sm"
        >
          Explore our 40% off section and enjoy fantastic discounts on a wide
          range of products. From fashion essentials to home appliances,
          there&apos;s something for everyone at unbeatable prices.
        </p>
        <Space spacing="my-3" />
        <div className="flex justify-center md:justify-start">
          <Button>Love</Button>
        </div>
      </div>
    </section>
  );
};

export default FixAdPremium;
