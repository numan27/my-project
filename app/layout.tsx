import { Metadata } from "next";
import "./globals.css";
import "./../src/assets/styles/styles.css";
import { SITE } from "@/config.js";
import Header from "../src/components/AppLayout/Header";
import Footer from "../src/components/AppLayout/Footer";

export interface LayoutProps {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: {
    template: `%s — ${SITE.name}`,
    default: SITE.title,
  },
  description: SITE.description,
};

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@200..800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="tracking-tight antialiased text-white">
        <Header />
        <main className="bg-[#1A1A1A]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
