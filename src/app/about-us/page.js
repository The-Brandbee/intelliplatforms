import About from "./About";


export const metadata = {
  title: "Empowering Enterprises Through Intelligent IT Solutions",
  description: "Empowering Enterprises Through Intelligent IT Solutions",
  alternates: {
    canonical: "https://www.fundedd.com/about-us", 
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
    <About />
    </>
  );
}
