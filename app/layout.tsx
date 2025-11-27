import type { Metadata } from "next";
import "./globals.css";
import Head from 'next/head';
import ogImage from "@/public/ogImg-Card.png";

export const metadata: Metadata = {
  title: "Lunoir | Embrace Crazy Clothing",
  description: "here we create crazy but good quality shirts for you to wear. quality is king. free delivery. free return policy for 30 days. highest and most affordable shirts in India. simply the best of the best. ha hah ha ",
  
  openGraph: {
  images: [
    {
      url: ogImage.src,
      width: ogImage.width,
      height: ogImage.height,
      alt: "Lunoir Preview Card",
    },
  ],
}
};

export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <body>
        {children}
      </body>
    </html>
  );
}
