import AccountSpacing from "@/app/components/Spacing/AccountSpacing";
import BaseSpacing from "@/app/components/Spacing/BaseSpacing";
import AccountHeader from "../components/AccountHeader";
import SavedItem from "./SavedItem";
import { Fragment, Suspense } from "react";
import { getUserWishlist } from "@/app/lib/data/product";

const SaveItemsPage = async () => {
  const wishlist = await getUserWishlist();

  return (
    <section>
      <AccountHeader>Saved Items</AccountHeader>
      <AccountSpacing />
      <Suspense fallback={<p>Loading Wishlist...</p>}>
        {wishlist.length ? (
          wishlist.map((item) => (
            <Fragment key={item.id}>
              <SavedItem productId={item.product} wishItemId={item.id} />
              <BaseSpacing />
            </Fragment>
          ))
        ) : (
          <p className=" text-center">No item added</p>
        )}
      </Suspense>
    </section>
  );
};

export default SaveItemsPage;
