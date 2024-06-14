import Heading from "@/app/components/Heading";
import BaseSpacing from "@/app/components/Spacing/BaseSpacing";
import InfoCardSection from "./InfoCardSection";
import { Fragment, ReactNode } from "react";

interface Props {
  heading: string;
  infoSections: { heading: string; paragraphs: string[] | ReactNode[] }[];
}
const InfoCard = ({ heading, infoSections }: Props) => {
  return (
    <section key={heading}>
      <Heading variant="h5" styles=" text-orange-400">
        {heading}
      </Heading>
      <BaseSpacing />
      {infoSections.map((section) => (
        <Fragment key={section.heading}>
          <InfoCardSection
            heading={section.heading}
            paragraphs={section.paragraphs}
          />
          <BaseSpacing />
        </Fragment>
      ))}
    </section>
  );
};

export default InfoCard;
