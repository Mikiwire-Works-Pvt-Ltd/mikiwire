import type { Metadata } from "next";
import { Oswald, Space_Grotesk } from "next/font/google";
import "./globals.css";

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["400", "500", "700"], // Uppercase headings
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Miki Wire Works | The Digital Forge",
  description: "The Nervous System of Infrastructure. Manufacturing High-Quality Steel Wire since 1987.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${oswald.variable} ${spaceGrotesk.variable} antialiased bg-void text-titanium font-space overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
