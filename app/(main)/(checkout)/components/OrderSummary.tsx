"use client";

import { placeOrderAction } from "@/actions/payment";
import Button from "@/app/components/Buttons/Button";
import Card from "@/app/components/Cards/Card";
import Heading from "@/app/components/Heading";
import HR from "@/app/components/HR";
import LabelValueDisplay from "@/app/components/LabelValueDisplay";
import ContentSpacing from "@/app/components/Spacing/ContentSpacing";
import SectionSpacing from "@/app/components/Spacing/SectionSpacing";
import { calculateCartItemsSubtoalPrice } from "@/app/lib/data/cart";
import { formatPrice } from "@/app/lib/number-formatter";
import { AddressType, CartItemType, ProductType } from "@/app/lib/types";
import { useRouter } from "next/navigation";
import { Fragment, useTransition } from "react";
import useCartStore from "../../store/cart";
import OrderSummaryItem from "./OrderSummaryItem";
import SelectPaymentMethod from "./SelectPaymentMethod";

interface Props {
  defaultUserAddressId?: AddressType;
  buyNowProduct?: CartItemType;
}

const OrderSummary = ({ defaultUserAddressId, buyNowProduct }: Props) => {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const handleOrder = async (formData: FormData) => {
    startTransition(async () => {
      const authorizationUrl = await placeOrderAction(
        {
          addressId: defaultUserAddressId?.id,
          email: defaultUserAddressId?.email,
          cartItems,
          grandTotal,
        },
        formData
      );

      if (authorizationUrl) {
        window.location.href = authorizationUrl; // Redirect to Paystack URL
      }
    });
  };

  const { cartItems } = useCartStore();

  let subtotal = calculateCartItemsSubtoalPrice(cartItems);

  const deliveryFee = subtotal === 0 ? 0 : 100;
  const discount = 0;
  const promoOffer = 0;
  if (buyNowProduct?.price) {
    subtotal = buyNowProduct.price * buyNowProduct.quantity;
  }
  const grandTotal = subtotal + deliveryFee + discount + promoOffer;

  return (
    <section>
      <Card>
        <section className="py-6">
          <Heading variant="h4">
            <div className="font-semibold text-center">Your Order</div>
          </Heading>
          <ContentSpacing />
          <section className="p-6 overflow-y-auto has-scrollbar">
            <ul>
              {buyNowProduct && buyNowProduct.prod_id ? (
                <>
                  <OrderSummaryItem orderItem={buyNowProduct} />
                  <ContentSpacing />
                </>
              ) : (
                <>
                  {cartItems.map((cartItem) => (
                    <Fragment key={cartItem.id}>
                      <OrderSummaryItem orderItem={cartItem} />
                      <ContentSpacing />
                    </Fragment>
                  ))}
                </>
              )}
            </ul>

            <div>
              <ContentSpacing />
              <HR />
              <ContentSpacing />
              <div>
                <LabelValueDisplay
                  label="Subtotal"
                  value={formatPrice(subtotal)}
                  isCurrency
                />
                <ContentSpacing />
                <LabelValueDisplay
                  label="Delivery Fee"
                  value={formatPrice(deliveryFee)}
                />
              </div>
              <ContentSpacing />
              <HR />
              <ContentSpacing />
              <LabelValueDisplay
                label="Grand Total"
                value={formatPrice(grandTotal)}
                darkLabel
                isCurrency
              />
            </div>
          </section>
        </section>
      </Card>
      <ContentSpacing />

      <form
        // action={placeOrderAction.bind(null, {
        //   addressId: defaultUserAddressId?.id,
        //   email: defaultUserAddressId?.email,
        //   cartItems,
        //   grandTotal,
        // })}
        onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData(e.currentTarget);
          handleOrder(formData);
        }}
      >
        <Card>
          <SelectPaymentMethod />
        </Card>
        <SectionSpacing />
        <div className="w-[80%] m-auto">
          <Button disabled={isPending}>
            {isPending ? "Processing..." : "Proceed to Payment"}
          </Button>
        </div>
      </form>
    </section>
  );
};

export default OrderSummary;
