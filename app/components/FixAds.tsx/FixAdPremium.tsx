import Button from "../Buttons/Button";
import Heading from "../Heading";
import Image from "next/image";
import Space from "../Space";

const FixAdPremium = () => {
  return (
    <section
      className="h-[240px] bg-[url('/assets/fix-ads-bg.jpg')]
    text-white "
    >
      <div className="relative max-w-[1200px] m-auto py-6">
        <Image
          src="/assets/black-woman.png"
          alt="Black Woman Fixam Ad Background"
          width={310}
          height={240}
          className="absolute right-0 top-0"
        />
        <Space spacing="my-3" />
        <Heading variant="h4" styles="text-2xl">
          40% Off Today
        </Heading>
        <Space spacing="my-3" />
        <p className="max-w-[720px]">
          Explore our 40% off section and enjoy fantastic discounts on a wide
          range of products. From fashion essentials to home appliances, there's
          something for everyone at unbeatable prices.
        </p>
        <Space spacing="my-3" />
        <Button>Love</Button>
      </div>
    </section>
  );
};

export default FixAdPremium;
