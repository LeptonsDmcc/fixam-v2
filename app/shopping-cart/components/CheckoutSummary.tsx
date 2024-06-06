"use client";

import AuthPrompt from "@/app/components/Auth/AuthPrompt";
import Button from "@/app/components/Buttons/Button";
import Card from "@/app/components/Card";
import HR from "@/app/components/HR";
import Space from "@/app/components/Spacing/Space";
import Overlay from "./Overlay";
import LabelValueDisplay from "@/app/components/LabelValueDisplay";
import { useState } from "react";

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
