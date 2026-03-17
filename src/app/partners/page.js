import Partners from "./Partners";



export const metadata = {
  title: "Empowering Enterprises Through Intelligent IT Solutions",
  description: "Empowering Enterprises Through Intelligent IT Solutions",
  alternates: {
    canonical: "https://www.fundedd.com/partners", 
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
       <Partners />
    </>
  );
}
