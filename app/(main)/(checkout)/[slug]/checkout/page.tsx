import ContactInfoFields from "../../components/ContactInfoFields";
import SelectPaymentMethod from "../../components/SelectPaymentMethod";
import ShippingAddressFields from "../../components/ShippingAddressFields";
import OrderSummary from "../../components/OrderSummary";
import CustomerAddressList from "../../components/CustomerAddressList";
import BreadcrumbHeader from "@/app/(main)/components/Breadcrumb/BreadcrumbHeader";
import SectionSpacing from "@/app/(main)/components/Spacing/SectionSpacing";
import Wrapper from "@/app/(main)/components/Wrapper";
import Card from "@/app/(main)/components/Card";
import FormSpacing from "@/app/(main)/components/Spacing/FormSpacing";
import Button from "@/app/(main)/components/Buttons/Button";

interface Props {
  params: { slug: string };
}

const CheckoutPage = ({ params: { slug } }: Props) => {
  return (
    <section>
      <BreadcrumbHeader
        paths={[
          { text: "Shopping Cart", href: `/${slug}` },
          { text: "Checkout", href: "" },
        ]}
        withHeading
      />
      <SectionSpacing />
      <Wrapper>
        <CustomerAddressList />
        <SectionSpacing />
        <section
          className="flex flex-col gap-6
        lg:flex-row"
        >
          <Card
            styles=" flex justify-center
          lg:w-[70%]"
          >
            <div className="max-w-[513px] py-6">
              <ContactInfoFields />
              <FormSpacing />
              <ShippingAddressFields />
              <FormSpacing />
              <SelectPaymentMethod />
              <div className=" hidden lg:block">
                <FormSpacing />
                <Button full>Proceed to Payment</Button>
                <FormSpacing />
              </div>
            </div>
          </Card>
          <section className="lg:w-[30%]">
            <OrderSummary />
          </section>
        </section>
      </Wrapper>
      <SectionSpacing />
    </section>
  );
};

export default CheckoutPage;
