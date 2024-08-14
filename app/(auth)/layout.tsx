import { Poppins } from "next/font/google";
import { Toaster } from "sonner";
import "../globals.css";
import AppHeader from "../(main)/AppHeader/AppHeader";
import Footer from "../(main)/components/Footer/Footer";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600"],
  subsets: ["latin", "latin-ext"],
});

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  //   const isAuthPage = headers().get("x-auth-page") === "true";

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/assets/fixamlogo-o.png" />
      </head>
      <body className={poppins.className}>
        <Toaster richColors />
        <main>{children}</main>
      </body>
    </html>
  );
}
