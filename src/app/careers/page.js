import { notFound } from "next/navigation";

// Careers page is disabled for now.
// To re-enable:
// 1. Restore the CareersPage export below (commented out)
// 2. Uncomment Careers links in Header.js and HeaderMobile.js

export const metadata = {
  title: "Careers & Job Openings | Intelli Platforms",
  robots: {
    index: false,
    follow: false,
  },
};

export default function CareersPage() {
  notFound();
}

/*
import Careers from "./Careers";

export const metadata = {
  title: "Careers & Job Openings | Intelli Platforms",
  description:
    "Explore current job openings at Intelli Platforms - Software Developers and Network Engineers. Join a global Managed IT Services Provider.",
  alternates: {
    canonical: "https://www.intelliplatforms.com/careers/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    images: "",
  },
};

export default function CareersPage() {
  return <Careers />;
}
*/
