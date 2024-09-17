// "use client";

import { toggleFavoriteAction } from "@/actions/product";
import AddToFavoriteSubmit from "./AddToFavoriteSubmit";

interface Props {
  isFavorited: boolean;
  productId: string;
}

const AddFavoriteButton = ({ isFavorited, productId }: Readonly<Props>) => {
  return (
    <form
      action={toggleFavoriteAction.bind(null, {
        productId: productId,
        is_favorited: !isFavorited,
      })}
    >
      <AddToFavoriteSubmit isFavorited={isFavorited} />
    </form>
  );
};

export default AddFavoriteButton;
