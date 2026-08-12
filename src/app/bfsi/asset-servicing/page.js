import BfsiSubPage from "../BfsiSubPage";

export const metadata = {
  title: "Asset Servicing | Intelli Platforms BFSI",
  description:
    "Asset Servicing solutions from Intelli Platforms - modernization and operational excellence for financial institutions.",
  alternates: {
    canonical: "https://www.intelliplatforms.com/bfsi/asset-servicing",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function AssetServicingPage() {
  return <BfsiSubPage title="Asset Servicing" />;
}
