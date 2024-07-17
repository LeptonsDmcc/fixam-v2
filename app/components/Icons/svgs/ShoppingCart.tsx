import React from "react";

type ShoppingCartColorType = "orange" | "white" | "dark";

interface Props {
  color: ShoppingCartColorType;
}

const MyShoppingCart = ({ color }: Props) => {
  const colors: { [key in ShoppingCartColorType]: string } = {
    orange: "#FB923C",
    white: "white",
    dark: "#343434",
  };

  return (
    <svg
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2 2.3248H3.74001C4.82001 2.3248 5.67 3.2548 5.58 4.3248L4.75 14.2848C4.61 15.9148 5.89999 17.3148 7.53999 17.3148H18.19C19.63 17.3148 20.89 16.1348 21 14.7048L21.54 7.2048C21.66 5.5448 20.4 4.19479 18.73 4.19479H5.82001"
        stroke={colors[color]}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.25 22.3248C16.9404 22.3248 17.5 21.7652 17.5 21.0748C17.5 20.3844 16.9404 19.8248 16.25 19.8248C15.5596 19.8248 15 20.3844 15 21.0748C15 21.7652 15.5596 22.3248 16.25 22.3248Z"
        stroke={colors[color]}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.25 22.3248C8.94036 22.3248 9.5 21.7652 9.5 21.0748C9.5 20.3844 8.94036 19.8248 8.25 19.8248C7.55964 19.8248 7 20.3844 7 21.0748C7 21.7652 7.55964 22.3248 8.25 22.3248Z"
        stroke={colors[color]}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 8.3248H21"
        stroke={colors[color]}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default MyShoppingCart;
