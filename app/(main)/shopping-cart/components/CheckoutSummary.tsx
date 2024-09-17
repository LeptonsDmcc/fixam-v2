import AuthPrompt from "@/app/components/Auth/AuthPrompt";
import Card from "@/app/components/Card";
import HR from "@/app/components/HR";
import LabelValueDisplay from "@/app/components/LabelValueDisplay";
import Space from "@/app/components/Spacing/Space";
import { formatPrice } from "@/app/lib/number-formatter";
import { useState } from "react";
import useCartStore from "../../store/cart";
import Overlay from "./Overlay";
import ProceedToCheckout from "./ProceedToCheckout";
import { calculateCartItemsSubtoalPrice } from "@/app/lib/data/cart";
import { ROUTES } from "@/app/lib/contants";

interface Props {
  isAuth: boolean;
}
const CheckoutSummary = ({ isAuth }: Props) => {
  const [showOverlay, setShowOverlay] = useState(false);

  const { cartItems } = useCartStore();

  const subtotal = cartItems && calculateCartItemsSubtoalPrice(cartItems);

  // const deliveryFee = subtotal === 0 ? 0 : 100;
  // const discount = 0;
  // const promoOffer = 0;
  // const grandTotal = subtotal + deliveryFee + discount + promoOffer;
  const grandTotal = subtotal;

  return (
    <Card>
      {showOverlay && (
        <Overlay>
          <AuthPrompt from="/shopping-cart" to={ROUTES.shoppingCartcheckout} />
        </Overlay>
      )}
      <div className=" py-8 px-6">
        {/* <LabelValueDisplay
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
        <HR /> */}
        <Space spacing="my-6" />
        <LabelValueDisplay
          label="Grand Total"
          value={formatPrice(grandTotal).toString()}
          darkLabel
        />
        <Space spacing="my-6" />
        <HR />
        <Space spacing="my-6" />
        <ProceedToCheckout
          subtotal={subtotal}
          handleShowOverlay={setShowOverlay}
          grandTotal={grandTotal}
          showOverlay={showOverlay}
          isAuth={isAuth}
        />
      </div>
    </Card>
  );
};

export default CheckoutSummary;
