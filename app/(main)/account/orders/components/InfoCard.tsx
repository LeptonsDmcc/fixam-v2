import Heading from "@/app/(main)/components/Heading";
import InfoCardSection from "./InfoCardSection";
import { Fragment, ReactNode } from "react";
import BaseSpacing from "@/app/(main)/components/Spacing/BaseSpacing";

interface Props {
  heading: string;
  infoSections: { heading: string; paragraphs: string[] | ReactNode[] }[];
}
const InfoCard = ({ heading, infoSections }: Props) => {
  return (
    <section key={heading}>
      <Heading variant="h5" styles="text-orange-400" bold>
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
