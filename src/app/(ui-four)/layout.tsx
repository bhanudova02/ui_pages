import type { Metadata } from "next";
import "../globals.css";
import Header from "../components/Home/Navigation/Header";

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
            <body >
                <Header />
                {children}
            </body>
        </html>
    );
}
