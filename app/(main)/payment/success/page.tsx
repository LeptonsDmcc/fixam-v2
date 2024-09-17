import Wrapper from "@/app/components/Wrapper";
import OrderSuccess from "../../(checkout)/components/OrderSuccess";

interface Props {
  searchParams: {
    oid: string;
  };
}
const OrderSuccessPage = ({ searchParams: { oid } }: Readonly<Props>) => {
  console.log("OID", oid);
  return (
    <Wrapper>
      <OrderSuccess />
    </Wrapper>
  );
};

export default OrderSuccessPage;
