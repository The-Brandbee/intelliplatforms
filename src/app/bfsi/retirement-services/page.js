import BfsiSubPage from "../BfsiSubPage";

export const metadata = {
  title: "Retirement Services | Intelli Platforms BFSI",
  description:
    "Retirement Services solutions from Intelli Platforms - modernization and operational excellence for financial institutions.",
  alternates: {
    canonical: "https://www.intelliplatforms.com/bfsi/retirement-services",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RetirementServicesPage() {
  return <BfsiSubPage title="Retirement Services" />;
}
