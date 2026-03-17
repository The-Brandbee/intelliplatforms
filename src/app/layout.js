import { Inter } from "next/font/google";
import "./globals.css";
import { GoogleTagManager } from "@next/third-parties/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Empowering Enterprises Through Intelligent IT Solutions",
  description: "Empowering Enterprises Through Intelligent IT Solutions",
  alternates: {
    canonical: "https://www.fundedd.com", 
  },
   robots: {
    index: true,
    follow: true,
  },

  verification: {
    google: "lt0rwl2olLUmWdGmQOT2AL1s6DTzk5rAG30Sp8oT4Pg",
  },
  openGraph: {
    images: "",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <GoogleTagManager gtmId="GTM-WK52CSMG" />
        {children}
      </body>
    </html>
  );
}
