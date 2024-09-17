import Button from "@/app/components/Buttons/Button";
import EditButton from "@/app/components/Buttons/EditButton";
import Heading from "@/app/components/Heading";
import RadioInput from "@/app/components/Inputs/RadioInput";
import ContentSpacing from "@/app/components/Spacing/ContentSpacing";
import Space from "@/app/components/Spacing/Space";
import { ROUTES } from "@/app/lib/contants";
import { AddressType } from "@/app/lib/types";
import { Trash } from "iconsax-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import Overlay from "../../shopping-cart/components/Overlay";
import HiddenInput from "@/app/components/Inputs/HiddenInput";
import { useFormState } from "react-dom";
import { deleteAddressAction } from "@/actions/address";
import { toast } from "sonner";
import SubmitForm from "@/app/components/Buttons/SubmitForm";

interface Props {
  address: AddressType;
  handleInlineEditing?: (edit: boolean) => void;
  updateAddress?: (payload: { addressId: string; data: AddressType }) => void;
}

const CustomerAddress = ({
  address,
  handleInlineEditing,
  updateAddress,
}: Props) => {
  const [state, deleteAddressActionForm] = useFormState(deleteAddressAction, {
    hasError: false,
    message: "",
  });

  const [confirmDelete, setConfirmDelete] = useState(false);

  useEffect(() => {
    if (!state.hasError && state.message) {
      setConfirmDelete(false);
      toast.success(state.message, { position: "top-center" });
    }
  }, [state.hasError]);

  return (
    <section className="group">
      {confirmDelete && (
        <Overlay handleCloseOverlay={() => setConfirmDelete(false)}>
          <form action={deleteAddressActionForm}>
            <HiddenInput name="addressId" value={address.id} />
            <header>Are you sure you want to delete address</header>
            <ContentSpacing />
            <div className="flex gap-4">
              <SubmitForm full={false} color="red">
                Delete
              </SubmitForm>
              <Button
                type="button"
                color="gray"
                onClick={() => setConfirmDelete(false)}
              >
                Cancel
              </Button>
            </div>
          </form>
        </Overlay>
      )}
      <div className="flex justify-between items-center">
        <div className="flex gap-6 items-center">
          <form
            action={updateAddress?.bind(null, {
              addressId: address.id,
              data: { ...address, is_default: !address.is_default },
            })}
          >
            <button>
              <RadioInput
                htmlFor={address.id}
                checked={address.is_default}
                name="address"
              />
            </button>
          </form>

          <Heading variant="h4" styles="font-semibold">
            Customer Address
          </Heading>
        </div>

        {handleInlineEditing ? (
          <EditButton
            onClick={() => {
              handleInlineEditing(false);
            }}
          />
        ) : (
          <Link href={`${ROUTES.profile}/address/${address.id}?mode=edit`}>
            <EditButton />
          </Link>
        )}
      </div>
      <ContentSpacing />
      <div className="ml-12 flex justify-between">
        <div>
          <p>
            {address?.first_name} {address?.last_name}
          </p>
          <Space spacing="my-4" />
          <p className=" text-xs">
            {address.street_address} | {address.city} - {address.state} |{" "}
            {address.phone_one}
          </p>
        </div>
        <div className="flex items-end">
          <button
            onClick={() => setConfirmDelete(true)}
            className="flex items-center justify-center opacity-0 hover:text-red-500
            group-hover:opacity-100 transition-opacity duration-300 rounded-full w-8 h-8 bg-gray-300"
          >
            <Trash size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CustomerAddress;
