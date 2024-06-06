import BreadcrumbHeader from "@/app/components/Breadcrumb/BreadcrumbHeader";
import Button from "@/app/components/Buttons/Button";
import SectionSpacing from "@/app/components/Spacing/SectionSpacing";
import Input from "@/app/components/Inputs/Input";
import Heading from "@/app/components/Heading";
import Wrapper from "@/app/components/Wrapper";
import FormSpacing from "@/app/components/Spacing/FormSpacing";
import Image from "next/image";

const TrackPage = () => {
  return (
    <section>
      <BreadcrumbHeader paths={[{ text: "Track Orders", href: "" }]} />
      <SectionSpacing />
      <Wrapper>
        <section className="w-1/2 m-auto">
          <Heading variant="h4" styles="text-center" bold>
            Track A Package
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
          <section>
            <div className=" h-12 bg-orange-100 rounded-3xl relative">
              <div className="h-12 bg-orange-400 w-[52%] rounded-3xl"></div>
              <div className=" absolute top-1/2 -translate-y-1/2 flex w-full justify-between px-2">
                {[1, 2, 3, 4, 5].map((p) => (
                  <Image
                    key={p}
                    src="/assets/icons/check.svg"
                    alt=""
                    width={30}
                    height={30}
                  />
                ))}
              </div>
            </div>
            <FormSpacing />
            <div className="flex w-full justify-between">
              {[
                { text: "Ordered Created", date: "01/03/24" },
                { text: "Ordered Received", date: "01/03/24" },
                { text: "Order left Fixam", date: "02/03/24" },
                { text: "Order ready for collection", date: "04/03/24" },
                { text: "Delivered to Customer", date: "07/03/24" },
              ].map((p) => (
                <div key={p.text} className=" w-24 text-sm text-center">
                  <p>{p.text}</p>
                  <p className=" my-[6px] text-gray-400">{p.date}</p>
                </div>
              ))}
            </div>
          </section>
        </section>
        <SectionSpacing />
      </Wrapper>
    </section>
  );
};

export default TrackPage;
