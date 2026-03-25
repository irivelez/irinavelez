import type { Metadata } from "next";
import { Newsreader, Manrope } from "next/font/google";
import "./globals.css";

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Irina V\u00e9lez",
  description:
    "From corporate leader to AI entrepreneur. Building the first AI-driven business from LATAM.",
  openGraph: {
    title: "Irina V\u00e9lez",
    description:
      "From corporate leader to AI entrepreneur. Building the first AI-driven business from LATAM.",
    url: "https://irinavelez.com",
    siteName: "Irina V\u00e9lez",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Irina V\u00e9lez",
    description:
      "From corporate leader to AI entrepreneur. Building the first AI-driven business from LATAM.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${newsreader.variable} ${manrope.variable} antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}
