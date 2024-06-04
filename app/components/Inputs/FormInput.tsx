import React, { InputHTMLAttributes } from "react";
import { FiPhone } from "react-icons/fi";
import { IoMailOutline, IoMapOutline, IoPersonOutline } from "react-icons/io5";
import Input from "./Input";
import { CiGlobe, CiLock } from "react-icons/ci";
import { BsSend } from "react-icons/bs";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  variant:
    | "email"
    | "phone"
    | "password"
    | "name"
    | "address"
    | "address_select"
    | "zipcode";
}

const FormInput = ({ variant, ...rest }: Props) => {
  switch (variant) {
    case "email":
      return (
        <Input
          {...rest}
          type="email"
          icon={<IoMailOutline />}
          placeholder="Enter Your Email"
        />
      );
    case "phone":
      return (
        <Input
          {...rest}
          icon={<FiPhone />}
          type="tel"
          placeholder="Enter Phone No."
        />
      );
    case "password":
      return <Input {...rest} icon={<CiLock />} type="password" />;
    case "name":
      return <Input {...rest} icon={<IoPersonOutline />} />;
    case "address":
      return (
        <Input {...rest} icon={<CiGlobe />} placeholder="Enter Your Address" />
      );
    case "address_select":
      return <Input {...rest} icon={<IoMapOutline />} />;
    case "zipcode":
      return (
        <Input {...rest} icon={<BsSend />} placeholder="Postal Code / Zip" />
      );
    default:
      return <Input {...rest} />;
  }
};

export default FormInput;
