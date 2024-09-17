import Checkbox from "@/app/components/Inputs/Checkbox";
import FormInput from "@/app/components/Inputs/FormInput";
import FormInputGroup from "@/app/components/Inputs/FormInputGroup";
import GroupInput from "@/app/components/Inputs/GroupInput";
import ContentSpacing from "@/app/components/Spacing/ContentSpacing";

interface Props {
  shippingOnly?: boolean;
  streetAddress?: string;
  state?: string;
  city?: string;
  zipcode?: number;
  idDefualt?: boolean;
}

const ShippingAddressFields = ({
  shippingOnly,
  streetAddress,
  state,
  city,
  zipcode,
  idDefualt,
}: Props) => {
  return (
    <FormInputGroup heading="Shipping Address" withClear>
      <FormInput
        variant="address"
        name="street_address"
        defaultValue={streetAddress || ""}
      />
      <ContentSpacing />
      <section>
        <GroupInput>
          <FormInput
            variant="address_select"
            placeholder="State"
            name="state"
            defaultValue={state || ""}
          />
          <FormInput
            variant="address_select"
            placeholder="City"
            name="city"
            defaultValue={city || ""}
          />
        </GroupInput>
        <ContentSpacing />
        <FormInput
          variant="zipcode"
          name="zipcode"
          defaultValue={zipcode || ""}
        />
      </section>
    </FormInputGroup>
  );
};

export default ShippingAddressFields;
