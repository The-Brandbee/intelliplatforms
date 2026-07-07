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
