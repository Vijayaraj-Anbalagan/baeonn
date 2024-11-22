import type { Metadata } from "next";
import { GeistSans } from 'geist/font/sans';
import "./globals.css";




export const metadata: Metadata = {
  title: "BAEONN - Unlock Hyperlocal Customer Acquisition",
  description: "BAEONN is a hyperlocal customer acquisition platform designed to help businesses connect with local customers effectively through targeted campaigns, cost-effective pricing, and powerful engagement tools.",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${GeistSans.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
