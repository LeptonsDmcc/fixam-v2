import BreadcrumbHeader from "@/app/components/Breadcrumb/BreadcrumbHeader";
import Button from "@/app/components/Buttons/Button";
import Heading from "@/app/components/Heading";
import Input from "@/app/components/Inputs/Input";
import ContentSpacing from "@/app/components/Spacing/ContentSpacing";
import SectionSpacing from "@/app/components/Spacing/SectionSpacing";
import Wrapper from "@/app/components/Wrapper";
import MobileTrackingBar from "./MobileTrackingBar";
import TrackingBar from "./TrackingBar";

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
          <ContentSpacing />
          <Input placeholder="Enter your Tracking ID" />
          <ContentSpacing />
          <div className="flex justify-center">
            <Button>Track</Button>
          </div>
        </section>
        <ContentSpacing />
        <section>
          <Heading variant="h4" styles="text-center" bold>
            Tracking ID: f911943179001
          </Heading>
          <ContentSpacing />
          <TrackingBar />
          <MobileTrackingBar />
        </section>
        <SectionSpacing />
      </Wrapper>
    </section>
  );
};

export default TrackPage;
