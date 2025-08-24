import type { Metadata } from "next";
import { League_Gothic } from "next/font/google";
import "./globals.css";

const gothic = League_Gothic({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: "Portfolio - Fernando Graham",
  description: "Fernando Graham's Portfolio Dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${gothic.className} text-2xl antialiased leading-8 overflow-x-hidden dark:bg-darkTheme dark:text-white`}>
        {children}
      </body>
    </html>
  );
}