import Image from "next/image";
import SocialIcons from "../Icons/SocialIcons";
import Space from "../Space";

const FooterCompanyBIO = () => {
  return (
    <section>
      <Image src={"/assets/fixamlogo-w.png"} alt={""} height={76} width={76} />
      <Space spacing="my-4" />
      <p className="text-gray-300 ">
        An emerging ecommerce platform offering a wide range of products, aims
        to enhance its user experience to increase customer satisfaction and
        drive business growth.
      </p>
      <Space spacing="my-4" />

      <SocialIcons />
    </section>
  );
};

export default FooterCompanyBIO;
