import Contact from "./Contact";


export const metadata = {
  title: "Empowering Enterprises Through Intelligent IT Solutions",
  description: "Empowering Enterprises Through Intelligent IT Solutions",
  alternates: {
    canonical: "https://www.fundedd.com/contact-us", 
  },
   robots: {
    index: true,
    follow: true,
  },
  openGraph: { 
    images:
      "",
  },
};

export default function MdrMain() {
  return (
    <>    
    <Contact />
    </>
  );
}
