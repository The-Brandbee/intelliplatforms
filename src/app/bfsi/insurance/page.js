import BfsiSubPage from "../BfsiSubPage";

export const metadata = {
  title: "Insurance | Intelli Platforms BFSI",
  description:
    "Insurance solutions from Intelli Platforms - modernization and operational excellence for financial institutions.",
  alternates: {
    canonical: "https://www.intelliplatforms.com/bfsi/insurance",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function InsurancePage() {
  return <BfsiSubPage title="Insurance" />;
}
