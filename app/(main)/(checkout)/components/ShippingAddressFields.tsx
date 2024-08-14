import Checkbox from "../../components/Inputs/Checkbox";
import FormInput from "../../components/Inputs/FormInput";
import FormInputGroup from "../../components/Inputs/FormInputGroup";
import GroupInput from "../../components/Inputs/GroupInput";
import FormSpacing from "../../components/Spacing/FormSpacing";

interface Props {
  shippingOnly?: boolean;
}

const ShippingAddressFields = ({ shippingOnly }: Props) => {
  return (
    <FormInputGroup heading="Shipping Address" withClear>
      <FormInput variant="address" />
      <FormSpacing />
      <section>
        <GroupInput>
          <FormInput variant="address_select" placeholder="State" />
          <FormInput variant="address_select" placeholder="City" />
        </GroupInput>
        <FormSpacing />
        <FormInput variant="zipcode" />
      </section>
      <FormSpacing />
      <section>
        {!shippingOnly && (
          <section>
            <div className="flex gap-3 items-center">
              <Checkbox htmlFor="shipToAnotherAddress" small />
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
