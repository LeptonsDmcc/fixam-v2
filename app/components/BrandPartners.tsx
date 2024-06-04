import Heading from "./Heading";
import Image from "next/image";
import Space from "./Spacing/Space";

const BrandPartners = () => {
  return (
    <section>
      <header className=" text-center">
        <Heading variant="h4" styles=" font-semibold">
          BRAND PARTNERS
        </Heading>
      </header>
      <Space spacing={"my-6"} />
      <section className="flex justify-between">
        {[1, 2, 3, 4, 5, 6].map((b) => (
          <Image
            key={b}
            src={"/assets/shop.png"}
            alt={""}
            width={160}
            height={60}
          />
        ))}
      </section>
    </section>
  );
};

export default BrandPartners;
