import BreadcrumbHeader from "@/app/components/Breadcrumb/BreadcrumbHeader";
import SectionSpacing from "@/app/components/Spacing/SectionSpacing";
import Wrapper from "@/app/components/Wrapper";
import fetchAll from "@/app/lib/data/fetchAll";
import fetchUserAddresses from "@/app/lib/data/fetchUserAddresses";
import isAuthenticated from "@/app/lib/data/verifyAuth";
import { ProductType } from "@/app/lib/types";
import React from "react";
import CustomerAddressList from "../../components/CustomerAddressList";
import OrderSummary from "../../components/OrderSummary";
import AddNewAddressAtCheckingOut from "./AddNewAddressAtCheckingOut";
import Card from "@/app/components/Cards/Card";

interface Props {
  slug: string;
  buyNowQuantity?: number;
}

const CheckoutContent = async ({ slug, buyNowQuantity }: Readonly<Props>) => {
  // /products/by_slug/{slug}/

  let productData: ProductType | undefined;

  if (buyNowQuantity) {
    productData = await fetchAll<ProductType>(`products/by_slug/${slug}`);
  }

  const userAddresses = await fetchUserAddresses();
  const isAuth = await isAuthenticated();
  const hasAddress = userAddresses?.length;

  const defaultUserAddress = userAddresses?.find(
    (address) => address.is_default
  );

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
        <section
          className="flex flex-col gap-6
            lg:flex-row"
        >
          <Card styles="lg:w-[70%] h-max" withPaddingRight>
            <section className={` ${!hasAddress && "flex justify-center"}`}>
              <section>
                {hasAddress ? (
                  <CustomerAddressList isInAccount addresses={userAddresses} />
                ) : (
                  <AddNewAddressAtCheckingOut isAuth={isAuth} />
                )}
              </section>
            </section>
          </Card>
          <section className="lg:w-[30%]">
            <OrderSummary
              defaultUserAddressId={defaultUserAddress}
              buyNowProduct={{
                prod_id: productData?.id || "",
                quantity: buyNowQuantity || 1,
                price: productData?.selling_price,
              }}
            />
          </section>
        </section>
      </Wrapper>
      <SectionSpacing />
    </section>
  );
};

export default CheckoutContent;
