import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "../globals.css";
import AppHeader from "./AppHeader/AppHeader";
import Footer from "../components/Footer/Footer";
import MobileBottomNav from "../components/Navigations/MobileBottomNav";
import { Toaster } from "sonner";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600"],
  subsets: ["latin", "latin-ext"],
});

export const metadata: Metadata = {
  title: "Fixam - Buy and Sell Anything Buildings",
  icons: "/assets/fixam-logo.png",
  description:
    "Discover a vibrant online marketplace dedicated to buying and selling all things buildings. Explore diverse listings of residential, commercial, and historic properties. Start your building journey with BuildTrade Hub today",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/assets/fixamlogo-o.png" />
      </head>
      <body className={poppins.className}>
        <Toaster richColors />

        <AppHeader />
        <main>{children}</main>
        <Footer />
        <MobileBottomNav />
      </body>
    </html>
  );
}
