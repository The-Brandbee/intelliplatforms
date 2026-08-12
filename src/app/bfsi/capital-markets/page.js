import BfsiSubPage from "../BfsiSubPage";

export const metadata = {
  title: "Capital Markets | Intelli Platforms BFSI",
  description:
    "Capital Markets solutions from Intelli Platforms - modernization and operational excellence for financial institutions.",
  alternates: {
    canonical: "https://www.intelliplatforms.com/bfsi/capital-markets",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function CapitalMarketsPage() {
  return <BfsiSubPage title="Capital Markets" />;
}
