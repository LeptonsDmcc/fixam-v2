"use client";

import Card from "@/app/components/Card";
import { AddressType } from "@/app/lib/types";
import { useState } from "react";
import AddNewAddressAtCheckingOut from "../[slug]/checkout/AddNewAddressAtCheckingOut";
import CustomerAddress from "./CustomerAddress";

interface Props {
  address: AddressType;
  withBorder?: boolean;
  shouldEdit?: boolean;
  updateAddress?: (payload: { addressId: string; data: AddressType }) => void;
}

const CustomerAddressOrForm = ({
  address,
  shouldEdit,
  withBorder,
  updateAddress,
}: Props) => {
  const [allowEditAddress, setAllowEditAddress] = useState(true);

  return (
    <Card borderedCard={withBorder}>
      {shouldEdit ? (
        <div
          className={`${
            allowEditAddress
              ? "scale-100 max-h-[1300px]"
              : "scale-0 max-h-0 overflow-hidden"
          } 
        duration-300`}
        >
          <CustomerAddress
            address={address}
            handleInlineEditing={setAllowEditAddress}
            updateAddress={updateAddress}
          />
        </div>
      ) : (
        <div>
          <CustomerAddress address={address} updateAddress={updateAddress} />
        </div>
      )}

      <div
        className={`${
          allowEditAddress
            ? "scale-0 max-h-0 overflow-hidden"
            : "scale-100 max-h-[1300px]"
        } 
        duration-300`}
      >
        <AddNewAddressAtCheckingOut
          address={address}
          handleCancel={setAllowEditAddress}
        />
      </div>
    </Card>
  );
};

export default CustomerAddressOrForm;
