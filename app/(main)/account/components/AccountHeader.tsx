import React, { PropsWithChildren } from "react";
import BackButton from "../../components/Buttons/BackButton";
import Heading from "../../components/Heading";

interface Props {
  withBack?: boolean;
  withBackArrow?: boolean;
}
const AccountHeader = ({
  withBack,
  withBackArrow,
  children,
}: PropsWithChildren<Props>) => {
  return (
    <header className=" flex gap-3 items-center">
      {withBack && <BackButton>Go Back</BackButton>}
      {withBackArrow && <BackButton size={24} />}
      <Heading variant="h4" bold>
        {children}
      </Heading>
    </header>
  );
};

export default AccountHeader;
