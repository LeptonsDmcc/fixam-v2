import Checkbox from "@/app/components/Inputs/Checkbox";
import FormInput from "@/app/components/Inputs/FormInput";
import FormInputGroup from "@/app/components/Inputs/FormInputGroup";
import GroupInput from "@/app/components/Inputs/GroupInput";
import FormSpacing from "@/app/components/Spacing/FormSpacing";

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
      <FormSpacing />
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
        <FormSpacing />
        <FormInput
          variant="zipcode"
          name="zipcode"
          defaultValue={zipcode || ""}
        />
      </section>
      <FormSpacing />
      <section>
        {!shippingOnly && (
          <section>
            <div className="flex gap-3 items-center">
              <Checkbox
                htmlFor="shipToAnotherAddress"
                small
                defaultChecked={idDefualt || false}
              />
              <p className=" text-orange-400">Ship to another address</p>
            </div>
            <FormSpacing />
            <GroupInput>
              <FormInput variant="email" />
              <FormInput variant="phone" />
            </GroupInput>
            <FormSpacing />
            <GroupInput>
              <FormInput variant="name" placeholder="Enter your first name" />
              <FormInput variant="name" placeholder="Enter your last name" />
            </GroupInput>
            <FormSpacing />
            <FormInput variant="address" />
            <FormSpacing />
            <GroupInput>
              <FormInput variant="address_select" placeholder="State" />
              <FormInput variant="address_select" placeholder="City" />
            </GroupInput>
            <FormSpacing />
            <FormInput variant="zipcode" />
            <FormSpacing />
            <div className="flex gap-3 items-center">
              <Checkbox htmlFor="saveForLater" small />
              <p className=" text-orange-400">
                Save this information for next time
              </p>
            </div>
            <FormSpacing />
          </section>
        )}
      </section>
    </FormInputGroup>
  );
};

export default ShippingAddressFields;
