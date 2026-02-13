import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Empowering Enterprises Through Intelligent IT Solutions",
  description: "Empowering Enterprises Through Intelligent IT Solutions",

  verification: {
    google: "lt0rwl2olLUmWdGmQOT2AL1s6DTzk5rAG30Sp8oT4Pg",
  },

  alternates: {
    canonical: "",
  },
  openGraph: {
    images: "",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
