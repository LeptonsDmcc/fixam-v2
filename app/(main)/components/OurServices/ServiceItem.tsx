import Link from "next/link";
import { ReactNode } from "react";
import Card from "../Card";

interface Props {
  icon: ReactNode;
  title: string;
  description: string;
}
const ServiceItem = ({ icon, title, description }: Props) => {
  return (
    <article
      className="flex items-center gap-4 max-h-[120px] h-[120px] px-6 min-full
     bg-gray-100 rounded-md flex-grow"
    >
      <div>{icon}</div>
      <div className="service-content">
        <h3 className="text-base font-semibold">{title}</h3>
        <p className="text-xs">{description}</p>
      </div>
    </article>
  );
};

export default ServiceItem;
