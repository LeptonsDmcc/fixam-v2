import { PropsWithChildren } from "react";
import Space from "../Spacing/Space";
interface Props {
  label: string;
}
const InputGroup = ({ children, label }: PropsWithChildren<Props>) => {
  return (
    <div>
      <label htmlFor={label}>{label} </label>
      <Space spacing="my-4" />
      {children}
    </div>
  );
};

export default InputGroup;
