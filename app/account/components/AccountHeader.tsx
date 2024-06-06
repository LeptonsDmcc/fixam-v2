import BackButton from "@/app/components/Buttons/BackButton";
import Heading from "@/app/components/Heading";
import React, { PropsWithChildren } from "react";

interface Props {
  withBack?: boolean;
}
const AccountHeader = ({ withBack, children }: PropsWithChildren<Props>) => {
  return (
    <header className=" flex gap-3">
      {withBack && <BackButton>Go Back</BackButton>}
      <Heading variant="h4" bold>
        {children}
      </Heading>
    </header>
  );
};

export default AccountHeader;
