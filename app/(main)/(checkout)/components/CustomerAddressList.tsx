import { patchData } from "@/app/lib/services/apiClient";
import { AddressType } from "@/app/lib/types";
import CustomerAddressOrForm from "./CustomerAddressOrForm";
import isAuthenticated from "@/app/lib/data/verifyAuth";

interface Props {
  isInAccount?: boolean;
  withBorder?: boolean;
  addresses: AddressType[];
}

const CustomerAddressList = async ({
  isInAccount,
  withBorder,
  addresses,
}: Props) => {
  const isAuth = await isAuthenticated();
  // const [optimisticAddresses, updateOptimisticAddress] = useOptimistic(
  //   addresses,
  //   (prevAddresses, addressId) => {
  //     const updatedAddresses = prevAddresses.map((address) => {
  //       if (address.id === addressId)
  //         return {
  //           ...address,
  //           is_default: true,
  //         };

  //       return { ...address, is_default: false };
  //     });

  //     return updatedAddresses;
  //   }
  // );

  const updateAddress = async (payload: {
    addressId: string;
    data: AddressType;
  }) => {
    const { addressId, data } = payload;
    // updateOptimisticAddress(addressId);
    await patchData(`users/adresses/${addressId}`, data);
  };

  return (
    <section className="min-w-full">
      {addresses.map((address) => (
        <div key={address.id} className="my-6 md:my-12">
          <CustomerAddressOrForm
            // updateAddress={updateAddress}
            isAuth={isAuth}
            address={address}
            withBorder={withBorder}
            shouldEdit={isInAccount}
          />
        </div>
      ))}
    </section>
  );
};

export default CustomerAddressList;
