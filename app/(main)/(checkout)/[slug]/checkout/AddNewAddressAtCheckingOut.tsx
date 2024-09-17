"use client";

import { addAddressAction } from "@/actions/address";
import BorderedOrangeButton from "@/app/components/Buttons/BorderedOrangeButton";
import SubmitForm from "@/app/components/Buttons/SubmitForm";
import Checkbox from "@/app/components/Inputs/Checkbox";
import HiddenInput from "@/app/components/Inputs/HiddenInput";
import ContentSpacing from "@/app/components/Spacing/ContentSpacing";
import { AddressType } from "@/app/lib/types";
import { useEffect } from "react";
import { useFormState } from "react-dom";
import { toast } from "sonner";
import ContactInfoFields from "../../components/ContactInfoFields";
import ShippingAddressFields from "../../components/ShippingAddressFields";

interface Props {
  address?: AddressType;
  handleCancel?: (shouldCancel: boolean) => void;
  isAuth: boolean;
}

const AddNewAddressAtCheckingOut = ({
  handleCancel,
  address,
  isAuth,
}: Readonly<Props>) => {
  const [state, addAddressActionForm] = useFormState(addAddressAction, {
    hasError: false,
    message: "",
  });

  useEffect(() => {
    if (state.hasError && state.message) {
      toast.error(state.message, { position: "top-center" });
      return;
    }

    if (state.message) toast.success(state.message, { position: "top-center" });

    if (handleCancel) {
      handleCancel(true);
    }
  }, [state]);

  return (
    <form action={addAddressActionForm} className="py-6">
      <HiddenInput name="isCheckingout" value="true" />
      <HiddenInput name="editId" value={address?.id || ""} />
      <ContactInfoFields
        email={address?.email}
        phone={address?.phone_one}
        first_name={address?.first_name}
        last_name={address?.last_name}
      />
      <ContentSpacing />
      <ShippingAddressFields
        shippingOnly
        city={address?.city}
        state={address?.state}
        streetAddress={address?.street_address}
        zipcode={address?.zip_code}
      />
      <ContentSpacing />

      {isAuth && (
        <>
          <div className="flex gap-3 items-center">
            <Checkbox
              htmlFor="shipToAnotherAddress"
              small
              name="is_default"
              defaultChecked={address?.is_default}
            />
            <p className=" text-orange-400">Set as default address</p>
          </div>
          <ContentSpacing />

          <div className="flex items-center gap-4">
            <SubmitForm color="orange" full={false}>
              Save Address
            </SubmitForm>
            <BorderedOrangeButton
              type="button"
              onClick={() => {
                if (handleCancel) {
                  handleCancel(true);
                }
              }}
            >
              Cancel
            </BorderedOrangeButton>
          </div>
        </>
      )}
    </form>
  );
};

export default AddNewAddressAtCheckingOut;
