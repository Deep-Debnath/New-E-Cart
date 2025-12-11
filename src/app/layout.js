import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Provide from "./store.main";
import ThemeRegistry from "./ThemeRegestry";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://new-e-cart.vercel.app"),
  title: "E-Cart | Shopping App",
  description:
    "A modern shopping app clone built with Next.js, React, and other cutting-edge web tools. Explore products, manage your cart, and experience smooth UI interactions.",
  keywords: [
    "E-Cart",
    "Shopping App",
    "E-commerce",
    "Next.js App",
    "React Cart",
    "Online Store",
    "Products",
  ],
  authors: [
    { name: "Deep Debnath", url: "https://my-portfolio-7432.vercel.app/" },
  ],
  creator: "Deep Debnath",
  category: "E-commerce",
  openGraph: {
    title: "E-Cart | Shopping App",
    description:
      "A modern shopping app clone built with Next.js, React, and Tailwind. Add products, manage your cart, and checkout easily.",
    url: "https://new-e-cart.vercel.app/",
    siteName: "E-Cart",
    images: [
      {
        url: "/globe.svg", // Replace with a real preview image if available
        width: 1200,
        height: 630,
        alt: "E-Cart Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeRegistry>
          <Provide>{children}</Provide>
        </ThemeRegistry>
      </body>
    </html>
  );
}
