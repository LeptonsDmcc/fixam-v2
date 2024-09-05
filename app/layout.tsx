import { PropsWithChildren } from "react";
import { Toaster } from "sonner";
import MergeCart from "./(main)/MergeCart";
import getAuthUser, { getAuthToken } from "./lib/data/user";

const layout = async ({ children }: PropsWithChildren) => {
  const accessToken = await getAuthToken();
  const useer = await getAuthUser();
  const isAuth = useer !== null;

  return (
    <html>
      <body>
        <MergeCart accessToken={accessToken || ""} isAuth={isAuth} />
        <Toaster richColors />
        {children}
      </body>
    </html>
  );
};

export default layout;
