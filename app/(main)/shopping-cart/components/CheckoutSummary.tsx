"use client";

import { useState } from "react";
import Card from "../../components/Card";
import Overlay from "./Overlay";
import AuthPrompt from "../../components/Auth/AuthPrompt";
import LabelValueDisplay from "../../components/LabelValueDisplay";
import Space from "../../components/Spacing/Space";
import HR from "../../components/HR";
import Button from "../../components/Buttons/Button";

const CheckoutSummary = () => {
  const [showOverlay, setShowOverlay] = useState(false);

  return (
    <Card>
      {showOverlay && (
        <Overlay>
          <AuthPrompt />
        </Overlay>
      )}
      <div className=" py-8 px-6">
        <LabelValueDisplay label="Subtotal" value="1234" />
        <Space spacing="my-6" />
        <LabelValueDisplay label="Delivery Fee" value="10" />
        <Space spacing="my-6" />

        <LabelValueDisplay label="Discount" value="-5.0" />
        <Space spacing="my-6" />
        <LabelValueDisplay label="Promo Offer" value="0.0" />
        <Space spacing="my-6" />
        <HR />
        <Space spacing="my-6" />
        <LabelValueDisplay label="Grand Total" value="1_305.0" darkLabel />
        <Space spacing="my-6" />
        <HR />
        <Space spacing="my-6" />
        <Button
          full
          onClick={() => {
            setShowOverlay(!showOverlay);
          }}
        >
          Checkout(₦1,305.00)
        </Button>
      </div>
    </Card>
  );
};

export default CheckoutSummary;
