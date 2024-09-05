"use client";

import { addAddressAction } from "@/actions/address";
import ContactInfoFields from "@/app/(main)/(checkout)/components/ContactInfoFields";
import ShippingAddressFields from "@/app/(main)/(checkout)/components/ShippingAddressFields";
import SubmitForm from "@/app/components/Buttons/SubmitForm";
import FixamMessage from "@/app/components/FixamMessage";
import Checkbox from "@/app/components/Inputs/Checkbox";
import AccountSpacing from "@/app/components/Spacing/AccountSpacing";
import { useFormState } from "react-dom";
import Cancel from "./Cancel";
import { AddressType } from "@/app/lib/types";

interface Props {
  address?: AddressType;
}
const AddressForm = ({ address }: Props) => {
  const [state, formAddAddressAction] = useFormState(addAddressAction, {
    hasError: false,
    message: "",
  });

  return (
    <form action={formAddAddressAction}>
      <input type="text" hidden name="editId" value={address?.id} />
      <ContactInfoFields
        email={address?.email}
        phone={address?.phone_one}
        first_name={address?.first_name}
        last_name={address?.last_name}
      />
      <AccountSpacing />
      <ShippingAddressFields
        shippingOnly
        city={address?.city}
        state={address?.state}
        streetAddress={address?.street_address}
        zipcode={address?.zip_code}
      />
      <AccountSpacing />
      <div className="flex gap-3 items-center">
        <Checkbox
          htmlFor="shipToAnotherAddress"
          small
          name="is_default"
          defaultChecked={address?.is_default}
        />
        <p className=" text-orange-400">Set as default address</p>
      </div>
      <AccountSpacing />
      <FixamMessage type={"error"} show={state.hasError}>
        {state.message}
      </FixamMessage>
      <AccountSpacing />
      <div className="flex gap-3">
        <div className="w-1/2">
          <SubmitForm>Save</SubmitForm>
        </div>
        <div className="w-1/2">
          <Cancel />
        </div>
      </div>
    </form>
  );
};

export default AddressForm;
