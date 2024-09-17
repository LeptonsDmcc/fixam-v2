import isAuthenticated from "@/app/lib/data/verifyAuth";
import { redirect } from "next/navigation";
import CheckoutContent from "./CheckoutContent";

interface Props {
  params: { slug: string };
  // g means guest user and can be y=yes or n=no
  searchParams: { g: string; bnq: number };
}

const CheckoutPage = async ({
  params: { slug },
  searchParams: { g, bnq },
}: Props) => {
  let isGuestCheckout = false;
  const isAuth = await isAuthenticated();
  const isGuestUser = g && g === "y";

  // Check if its guest user
  if (isGuestUser) {
    isGuestCheckout = true;
  }

  // Need to return checkout content in any of the two cases
  if ((!isAuth && isGuestCheckout) || isAuth) {
    return <CheckoutContent slug={slug} buyNowQuantity={bnq} />;
  }

  // if (!isAuth && isGuestCheckout) {
  //   return <CheckOutContent slug={slug} />;
  // }

  return redirect("/shopping-cart");
};

export default CheckoutPage;
