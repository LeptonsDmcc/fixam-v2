import BreadcrumbHeader from "@/app/components/Breadcrumb/BreadcrumbHeader";
import Button from "@/app/components/Buttons/Button";
import SectionSpacing from "@/app/components/Spacing/SectionSpacing";
import Input from "@/app/components/Inputs/Input";
import Heading from "@/app/components/Heading";
import Wrapper from "@/app/components/Wrapper";
import FormSpacing from "@/app/components/Spacing/FormSpacing";
import Image from "next/image";
import TrackingBar from "./TrackingBar";
import MobileTrackingBar from "./MobileTrackingBar";

const TrackPage = () => {
  return (
    <section>
      <BreadcrumbHeader paths={[{ text: "Track Orders", href: "" }]} />
      <SectionSpacing />
      <Wrapper>
        <section
          className="m-auto
        lg:w-1/2"
        >
          <Heading variant="h4" styles="text-center" bold>
            Track Your Order
          </Heading>
          <FormSpacing />
          <Input placeholder="Enter your Tracking ID" />
          <FormSpacing />
          <div className="flex justify-center">
            <Button>Track</Button>
          </div>
        </section>
        <FormSpacing />
        <section>
          <Heading variant="h4" styles="text-center" bold>
            Tracking ID: f911943179001
          </Heading>
          <FormSpacing />
          <TrackingBar />
          <MobileTrackingBar />
        </section>
        <SectionSpacing />
      </Wrapper>
    </section>
  );
};

export default TrackPage;
