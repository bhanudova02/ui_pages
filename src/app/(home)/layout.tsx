import type { Metadata } from "next";
import { Barlow_Condensed } from "next/font/google";
import "../globals.css";
import Header from "../components/Home/Navigation/Header";
import Footer from "../components/Home/Footer/Footer";

const barlow_Condensed = Barlow_Condensed({
  weight: ['300', '400', '500', '600', '700', '800'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: "Mr Bhanu",
  description: "NextJs Web App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={barlow_Condensed.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
