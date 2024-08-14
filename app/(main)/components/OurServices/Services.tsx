import Image from "next/image";
import currency from "../../lib/currency";
import ServiceItem from "./ServiceItem";

const services = [
  {
    name: "Swift Delivery",
    description: "Lightening - fast delivery to your doorstep.",
    image: "/assets/icons/delivery.svg",
  },
  {
    name: "Unbeatable Discount",
    description: "Exclusive deals to help you save more.",
    image: "/assets/icons/discount.svg",
  },
  {
    name: "Pay on Delivery",
    description: "Inspect order before making payment.",
    image: "/assets/icons/pay.svg",
  },
  {
    name: "24/7 Support",
    description: "Get in touch with live support anytime.",
    image: "/assets/icons/support.svg",
  },
];
const Services = () => {
  return (
    <section className="hidden md:flex gap-4">
      {services.map(({ name, description, image }) => (
        <ServiceItem
          key={name}
          icon={<Image src={image} alt={name} height={48} width={48} />}
          title={name}
          description={description}
        />
      ))}
    </section>
  );
};

export default Services;
