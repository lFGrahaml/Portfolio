import type { Metadata } from "next";
import { League_Gothic } from "next/font/google";
import "./globals.css";

const gothic = League_Gothic({
  subsets: ['latin']
});

export const metadata: Metadata = {
  title: "Porfolio - Fernando Graham",
  description: "Fernando Graham's Portfolio Dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${gothic.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
