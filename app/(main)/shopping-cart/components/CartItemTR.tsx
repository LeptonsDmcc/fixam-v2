import { CartItemType, ProductType } from "@/app/lib/types";
import ProductCartItem from "./ProductCartItem";
import { useEffect, useState } from "react";
import useCartStore from "../../store/cart";
import ProductPrice from "@/app/components/Products/ProductPrice";
import ProductQuantity from "@/app/components/Products/ProductQuantity";
import TrashBin from "@/app/components/TrashBin";

interface Props {
  item: CartItemType;
  fixamBaseUrl: string;
  isAuth?: boolean;
}

const CartItemTR = ({ item, fixamBaseUrl, isAuth }: Props) => {
  const [cartProduct, setCartProduct] = useState<ProductType>();
  const { removeItem, incrementQuantity, decrementQuantity } = useCartStore();

  useEffect(() => {
    const initCartProd = async () => {
      const res = await fetch(`${fixamBaseUrl}/products/${item.prod_id}/`);

      const prods = await res.json();

      setCartProduct(prods);
    };

    initCartProd();
  }, []);

  if (!cartProduct) return <p>Loading...</p>;

  return (
    <tr
      className="flex justify-between w-full items-center py-6  
    last-of-type:border-b-0 border-b flex-wrap
    md:py-12"
    >
      <td
        className="flex items-center w-1/3 
        md:flex-grow md:w-auto"
      >
        <>
          {/* <Checkbox /> */}
          <ProductCartItem product={cartProduct} />
        </>
      </td>

      <td
        className="w-1/3 md:w-[22.5%] text-center
      md:text-left"
      >
        <ProductPrice
          discount={0}
          textSize="sm"
          price={cartProduct.selling_price * item.quantity}
        />
      </td>

      <td className="w-1/3 md:w-[22.5%]">
        <ProductQuantity
          quantity={item.quantity}
          incrementQuantity={() => incrementQuantity(item.id || "", isAuth)}
          decrementQuantity={() => decrementQuantity(item.id || "", isAuth)}
        />
      </td>

      <td
        onClick={() => removeItem(item.id || "", isAuth)}
        className="w-full flex justify-end mt-5
        md:w-[5%] md:block md:mt-0"
      >
        <TrashBin />
      </td>
    </tr>
  );
};

export default CartItemTR;
