import Button from "@/app/components/Buttons/Button";
import { ROUTES } from "@/app/lib/contants";
import { formatPrice } from "@/app/lib/number-formatter";

interface Props {
  subtotal: number;
  handleShowOverlay: (show: boolean) => void;
  grandTotal: number;
  showOverlay: boolean;
  isAuth: boolean;
}
const ProceedToCheckout = ({
  subtotal,
  handleShowOverlay,
  grandTotal,
  showOverlay,
  isAuth,
}: Props) => {
  if (isAuth)
    return (
      <Button
        elementType={isAuth ? "link" : "button"}
        href={ROUTES.shoppingCartcheckout}
        disabled={!subtotal}
        full
      >
        Checkout({formatPrice(grandTotal)})
      </Button>
    );

  return (
    <Button
      disabled={!subtotal}
      full
      onClick={() => {
        handleShowOverlay(!showOverlay);
      }}
    >
      Checkout({formatPrice(grandTotal)})
    </Button>
  );
};

export default ProceedToCheckout;
