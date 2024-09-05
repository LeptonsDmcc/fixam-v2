import { formatPrice } from "@/app/lib/number-formatter";
import { useState } from "react";
import useCartStore from "../../store/cart";
import Overlay from "./Overlay";
import AuthPrompt from "@/app/components/Auth/AuthPrompt";
import Button from "@/app/components/Buttons/Button";
import HR from "@/app/components/HR";
import LabelValueDisplay from "@/app/components/LabelValueDisplay";
import Space from "@/app/components/Spacing/Space";
import Card from "@/app/components/Card";

const CheckoutSummary = () => {
  const [showOverlay, setShowOverlay] = useState(false);

  const { cartItems } = useCartStore();

  const subtotal =
    cartItems &&
    cartItems.reduce((acc, cur) => {
      return acc + (cur.price || 0) * cur.quantity;
    }, 0);

  const deliveryFee = 100;
  const discount = 0;
  const promoOffer = 0;
  const grandTotal = subtotal + deliveryFee + discount + promoOffer;

  return (
    <Card>
      {showOverlay && (
        <Overlay>
          <AuthPrompt />
        </Overlay>
      )}
      <div className=" py-8 px-6">
        <LabelValueDisplay
          label="Subtotal"
          value={formatPrice(subtotal).toString()}
        />
        <Space spacing="my-6" />
        <LabelValueDisplay
          label="Delivery Fee"
          value={formatPrice(deliveryFee).toString()}
        />
        <Space spacing="my-6" />

        <LabelValueDisplay
          label="Discount"
          value={formatPrice(discount).toString()}
        />
        <Space spacing="my-6" />
        <LabelValueDisplay
          label="Promo Offer"
          value={formatPrice(promoOffer).toString()}
        />
        <Space spacing="my-6" />
        <HR />
        <Space spacing="my-6" />
        <LabelValueDisplay
          label="Grand Total"
          value={formatPrice(grandTotal).toString()}
          darkLabel
        />
        <Space spacing="my-6" />
        <HR />
        <Space spacing="my-6" />
        <Button
          full
          onClick={() => {
            setShowOverlay(!showOverlay);
          }}
        >
          Checkout({formatPrice(grandTotal)})
        </Button>
      </div>
    </Card>
  );
};

export default CheckoutSummary;
