import { Edit2 } from "iconsax-react";
import Card from "../../components/Card";
import Heading from "../../components/Heading";
import RadioInput from "../../components/Inputs/RadioInput";
import FormSpacing from "../../components/Spacing/FormSpacing";
import Space from "../../components/Spacing/Space";

interface Props {
  addressId: string;
  isDefault?: boolean;
  withBorder?: boolean;
}
const CustomerAddress = ({ addressId, withBorder, isDefault }: Props) => {
  return (
    <Card borderedCard={withBorder}>
      <div className="flex justify-between items-center">
        <div className="flex gap-6 items-center">
          <RadioInput htmlFor={addressId} defaultChecked={!!isDefault} />
          <Heading variant="h4" styles="font-semibold">
            Customer Address
          </Heading>
        </div>

        <div className="flex items-center gap-[6px] text-orange-400">
          <span>Edit</span>
          <Edit2 />
        </div>
      </div>
      <FormSpacing />
      <div className="ml-12">
        <p>Patrick Chimezie Chukwudifu Chukwudifu</p>
        <Space spacing="my-4" />
        <p className=" text-xs">
          5 Tony Jim Street, commissioner quarters | Anambra - Awka South | +234
          8167000077
        </p>
      </div>
    </Card>
  );
};

export default CustomerAddress;
