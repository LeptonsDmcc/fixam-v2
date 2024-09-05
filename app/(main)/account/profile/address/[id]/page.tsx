import AccountSpacing from "@/app/components/Spacing/AccountSpacing";
import AccountHeader from "../../../components/AccountHeader";
import AddressForm from "../AddressForm";
import fetchAll from "@/app/lib/data/fetchAll";
import { AddressType } from "@/app/lib/types";

interface Props {
  params: { id: string };
  searchParams: { mode: string };
}
const page = async ({ params: { id }, searchParams: { mode } }: Props) => {
  const address = await fetchAll<AddressType>(`users/adresses/${id}`, {
    withAuth: true,
  });

  if (mode === "edit")
    return (
      <>
        <AccountHeader withBack />
        <AccountSpacing />
        <section
          className="m-auto
            lg:w-[513px]"
        >
          <AddressForm address={address} />
          <AccountSpacing />
        </section>
      </>
    );

  return <></>;
};

export default page;
