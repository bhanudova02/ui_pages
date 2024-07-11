import type { Metadata } from "next";
import "../globals.css";
import Header from "../components/Home/Navigation/Header";
import { Oswald } from "next/font/google";

const oswald = Oswald({
    weight:['200','300','400','500','600','700'],
    subsets:['latin']
})

export const metadata: Metadata = {
    title: "Mr Bhanu",
    description: "NextJs Web App",
};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang="en">
            <body className={oswald.className}>
                <Header/>
                {children}
            </body>
        </html>
    );
}
