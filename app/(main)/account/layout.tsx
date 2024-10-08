import { PropsWithChildren, Suspense } from "react";
import AccountNavs from "./components/AccountNavs";
import isAuthenticated from "@/app/lib/data/verifyAuth";
import { redirect } from "next/navigation";
import Grid from "@/app/components/Grid";
import SectionSpacing from "@/app/components/Spacing/SectionSpacing";
import Wrapper from "@/app/components/Wrapper";
import Card from "@/app/components/Card";

const AccountLayout = async ({ children }: PropsWithChildren) => {
  const isAuth = await isAuthenticated();

  if (!isAuth) {
    redirect("/signin");
  }

  if (isAuth)
    return (
      <Wrapper>
        <SectionSpacing />
        <Grid cols={2}>
          <aside className="sticky top-12 hidden lg:block">
            <AccountNavs />
          </aside>
          <Suspense fallback={<p>Loading...</p>}>
            <Card elementType="main" styles="lg:mx-16">
              {children}
            </Card>{" "}
          </Suspense>
        </Grid>
        <SectionSpacing />
      </Wrapper>
    );
};

export default AccountLayout;
