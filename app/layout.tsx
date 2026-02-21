import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Miki Wire Works",
    description: "POWERING INFRASTRUCTURE.",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
