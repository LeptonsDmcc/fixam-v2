import Card from "@/app/components/Card";
import Heading from "@/app/components/Heading";
import RadioInput from "@/app/components/Inputs/RadioInput";
import FormSpacing from "@/app/components/Spacing/FormSpacing";
import Space from "@/app/components/Spacing/Space";
import { ROUTES } from "@/app/lib/contants";
import { AddressType } from "@/app/lib/types";
import { Edit2 } from "iconsax-react";
import Link from "next/link";

interface Props {
  address: AddressType;
  withBorder?: boolean;
}
const CustomerAddress = ({ address, withBorder }: Props) => {
  return (
    <Card borderedCard={withBorder}>
      <div className="flex justify-between items-center">
        <div className="flex gap-6 items-center">
          <RadioInput htmlFor={address.id} checked={address.is_default} />
          <Heading variant="h4" styles="font-semibold">
            Customer Address
          </Heading>
        </div>

        <Link
          href={`${ROUTES.profile}/address/${address.id}?mode=edit`}
          className="flex items-center gap-[6px] text-orange-400"
        >
          <span>Edit</span>
          <Edit2 />
        </Link>
      </div>
      <FormSpacing />
      <div className="ml-12">
        <p>
          {address?.first_name} {address?.last_name}
        </p>
        <Space spacing="my-4" />
        <p className=" text-xs">
          {address.street_address} | {address.city} - {address.state} |{" "}
          {address.phone_one}
        </p>
      </div>
    </Card>
  );
};

export default CustomerAddress;
