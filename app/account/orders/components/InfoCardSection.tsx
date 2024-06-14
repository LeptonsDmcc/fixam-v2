import Heading from "@/app/components/Heading";
import { ReactNode } from "react";

interface Props {
  heading: string;
  paragraphs: string[] | ReactNode[];
}

const InfoCardSection = ({ heading, paragraphs }: Props) => {
  return (
    <section>
      <Heading variant="h6">{heading}</Heading>
      {paragraphs.map((paragraph, index) => (
        <p key={heading + index} className="my-1 text-gray-500">
          {paragraph}
        </p>
      ))}
    </section>
  );
};

export default InfoCardSection;
