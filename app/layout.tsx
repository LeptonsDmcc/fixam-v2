import { PropsWithChildren } from "react";

const layout = ({ children }: PropsWithChildren) => {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
};

export default layout;
