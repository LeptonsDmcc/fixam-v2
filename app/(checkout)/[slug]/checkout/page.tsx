import BreadcrumbHeader from "@/app/components/Breadcrumb/BreadcrumbHeader";
import Button from "@/app/components/Buttons/Button";
import Card from "@/app/components/Card";
import FormSpacing from "@/app/components/Spacing/FormSpacing";
import SectionSpacing from "@/app/components/Spacing/SectionSpacing";
import Wrapper from "@/app/components/Wrapper";
import ContactInfoFields from "../../components/ContactInfoFields";
import SelectPaymentMethod from "../../components/SelectPaymentMethod";
import ShippingAddressFields from "../../components/ShippingAddressFields";
import OrderSummary from "../../components/OrderSummary";
import CustomerAddressList from "../../components/CustomerAddressList";

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
        <section className="flex gap-6">
          <Card styles="w-[70%] flex justify-center">
            <div className="max-w-[513px] py-6">
              <ContactInfoFields />
              <FormSpacing />
              <ShippingAddressFields />
              <FormSpacing />
              <SelectPaymentMethod />
              <FormSpacing />
              <Button full>Proceed to Payment</Button>
              <FormSpacing />
            </div>
          </Card>
          <section className="w-[30%]">
            <OrderSummary />
          </section>
        </section>
      </Wrapper>
      <SectionSpacing />
    </section>
  );
};

export default CheckoutPage;
