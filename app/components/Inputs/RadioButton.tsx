import { InputHTMLAttributes } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {}

const RadioButton = ({ ...rest }: Props) => {
  return <input {...rest} type="radio" className="w-4" />;
};

export default RadioButton;
