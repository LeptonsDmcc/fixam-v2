import { PropsWithChildren } from "react";
import Grid from "../components/Grid";
import SectionSpacing from "../components/Spacing/SectionSpacing";
import Wrapper from "../components/Wrapper";
import AccountNavs from "./components/AccountNavs";
import Card from "../components/Card";

const AccountLayout = ({ children }: PropsWithChildren) => {
  return (
    <Wrapper>
      <SectionSpacing />
      <Grid cols={2}>
        <aside className="sticky top-12 hidden lg:block">
          <AccountNavs />
        </aside>
        <Card elementType="main" styles="lg:mx-16">
          {children}
        </Card>
      </Grid>
      <SectionSpacing />
    </Wrapper>
  );
};

export default AccountLayout;
