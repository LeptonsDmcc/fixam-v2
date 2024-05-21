import Button from "./Button";
import Image from "next/image";

const AddToCartButton = () => {
  return (
    <Button
      icon={
        <Image
          src={"/assets/icons/shopping-cart.svg"}
          alt={""}
          width={24}
          height={24}
        />
      }
    >
      Add to Cart
    </Button>
  );
};

export default AddToCartButton;
