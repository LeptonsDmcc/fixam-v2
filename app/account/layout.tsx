import { PropsWithChildren } from "react";
import Grid from "../components/Grid";
import SectionSpacing from "../components/Spacing/SectionSpacing";
import Wrapper from "../components/Wrapper";
import AccountNavs from "./components/AccountNavs";

const AccountLayout = ({ children }: PropsWithChildren) => {
  return (
    <main className=" h-full">
      <Wrapper>
        <SectionSpacing />
        <Grid cols={2}>
          <aside className="sticky top-12">
            <AccountNavs />
          </aside>

          <main className="mx-16">{children}</main>
        </Grid>
      </Wrapper>
    </main>
  );
};

export default AccountLayout;
