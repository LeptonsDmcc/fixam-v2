import { PropsWithChildren } from "react";
import Button from "../Buttons/Button";
import Heading from "../Heading";
import FormSpacing from "../Spacing/FormSpacing";

interface Props {
  heading: string;
  withClear?: boolean;
}
const FormInputGroup = ({
  heading,
  withClear,
  children,
}: PropsWithChildren<Props>) => {
  return (
    <section>
      <header className="flex justify-between items-center">
        <Heading variant="h4">
          <span className="font-semibold">{heading}</span>
        </Heading>
        {withClear && <Button variant="text">Clear</Button>}
      </header>
      <FormSpacing />
      <section>{children}</section>
    </section>
  );
};

export default FormInputGroup;
