import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { TRPCReactProvider } from "@/trpc/client";

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400']
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
    <TRPCReactProvider>
      <html lang="en" className="scroll-smooth">
        <body className={`${poppins.className} text-2xl antialiased leading-8 overflow-x-hidden dark:bg-darkTheme dark:text-white`}>
          {children}
        </body>
      </html>
    </TRPCReactProvider>
    
  );
}
