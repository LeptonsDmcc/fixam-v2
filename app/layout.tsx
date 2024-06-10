import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { headers } from "next/headers";
import AppHeader from "./AppHeader/AppHeader";
import AuthPageChecker from "./components/AuthPageChecker";
import Footer from "./components/Footer/Footer";
import "./globals.css";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600"],
  subsets: ["latin", "latin-ext"],
});

export const metadata: Metadata = {
  title: "Fixam - Buy and Sell Anything Buildings",
  icons: "/assets/vercel.svg",
  description:
    "Discover a vibrant online marketplace dedicated to buying and selling all things buildings. Explore diverse listings of residential, commercial, and historic properties. Start your building journey with BuildTrade Hub today",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const isAuthPage = headers().get("x-auth-page") === "true";

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/assets/fixamlogo-b.png" />
      </head>
      <body className={poppins.className}>
        <AuthPageChecker component={<AppHeader />} />
        <main>{children}</main>
        <AuthPageChecker component={<Footer />} />
      </body>
    </html>
  );
}
