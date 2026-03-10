"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import Header from "../app/common/Header.js";
import HeaderMobileIn from "../app/common/HeaderMobile.js";
import MarqueeTwo from "../app/common/MarqueeeTwo.js"; 
import Footer from "../app/common/Footer.js";
import Marquee from "../app/common/Marqueee.js"; 
import "bootstrap/dist/css/bootstrap.min.css";
import { Montserrat } from "next/font/google";
import Script from "next/script";
import Map from "../app/img/map.png";   
import bordercut from "../app/img/border-cut.png";  
import banner from "../app/img/home-banner.png";
import apart from "../app/img/Mask-Group-3.png";
import sets from "../app/img/Group-273.png";
import DEFINES from "../app/img/GIF.gif";
import MONITORING from "../app/img/Group-242@2x.png";
 import OptimizerTen from "../app/img/Group 381.svg";  
import border from "../app/img/3.png"; 
import OptimizerNine from "../app/img/Group 379.svg"; 
import MONITORINGTL from "../app/img/DEEP-2.png";  
import OptimizerEight from "../app/img/Group 377.svg";
import bot from "../app/img/border-1.png";   
import OptimizerSeven from "../app/img/Group 375.svg";
import CustomerOne from "../app/img/Component 4 – 1.png";  
import OptimizerSix from "../app/img/Group 373.svg";  
import OptimizerFive from "../app/img/Group 371.svg";  
import OptimizerFour from "../app/img/Group 370.svg";  
import OptimizerThree from "../app/img/Group 333.svg";  
import OptimizerTwo from "../app/img/Group 330.svg";  
import OptimizerOne  from "../app/img/Group 327.svg";
import FooterTOp from "../app/img/border-border.png";  
import Banner from "../app/img/Mask-Group-1.png";
import SpecializiLeft  from "../app/img/Group--396@2x.png";
import SpecializiMiddle from "../app/img/Group397.svg";  
import SpecializiRight from "../app/img/Group 180.png";

import { GoogleTagManager } from "@next/third-parties/google";

export default function Home() {
  return (
    <>     
            <GoogleTagManager gtmId="GTM-WK52CSMG" /> 
      <main>                   
        <Head>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta name="robots" content="index, follow" />
          <meta name="description" content="=" />
          <link rel="canonical" href="https://www.intelliplatforms.com/" />
        </Head>

        <header>
          <Header />

       </header> 

  {/* banner sec */}
  <section className="home-banner intelli_buit_sec_new">
    <div className="container">
      <div className="home-banner-middle">
        <Image src={Banner} alt="" />
        <div className="home-banner-middle-middle">
          <h1 className="intelli_seconf_banner_first_head">
          BUILT FOR THE ENTERPRISE .
          <span className="intelli_seconf_banner_second_head">
         DRIVEN BY OUR EXPERTISE .
          </span>
          </h1>
          <p className="intelli_seconf_banner_first_para">
  As a global, full-service Managed IT Services Provider with over a decade of experience, Intelli Platforms help businesses navigate the rapidly transforming technology landscape. We deliver innovative solutions that drive scalability and operational efficiency, empowering our clients to meet the evolving demands of the tech ecosystem.
          </p>
        </div>
        <div className="home-banner-middle-middle-botto-heading">
          <h3 className="intelli_second_banner_last_head">
            SIMPLIFYING COMPLEXITY. <span>DELIVERING VALUE.</span>
          </h3>
          <p className="intelli_second_banner_last_para">
         Technology decisions can be overwhelming, especially with so many platforms, pricing models, and service levels to navigate. That’s where we come in. At Inteli, We help our clients maximize their existing software investments, ensuring solutions are optimally (re)configured, implemented or updated reducing the exposure to unnecessary costs. </p>
        </div>
      </div>
    </div>
  </section>

  <section className="ingest_optomize_sec">
  <div className="container--">

     <MarqueeTwo /> 


    </div>
</section>
<div className="back-main">
<section className="we_specializi_in_sec">
  <div className="we_specializi_in_container">
    <div className="we_specializi_in_row">
      <div className="we_specializi_in_left_column">
        <div className="we_specializi_in_left_box">
          <Image src={SpecializiLeft} alt="" />
        </div>
      </div>
      <div className="we_specializi_in_right_column">
        <div className="we_specializi_in_right_lines_box">
          <Image src={SpecializiMiddle} alt="" />
        </div>
        <div className="we_specializi_in_right_loso_box">
         <Image src={SpecializiRight} alt="" />
        </div>
      </div>
    </div>
  </div>
</section>
<section className="what-defines-our-culture">
    <Image src={FooterTOp} alt="" className="FooterTOp-mfn" />
     <div className="container--">
         
          
           <div className="what-defines-our-culture-bot">
               
                 <h3>GLOBAL REACH <span>AND RESULTS</span></h3>
           </div>
             
             <div className="ENTERPRISES-main-frame">
              <Marquee /> 
                  
             </div>

     </div>
</section>
</div>


<section className="foot-top-sectto">
 
  <div className="container">
   <div className="footer-top-heading-n-b">
         <h3>WHY <span>INTELLI PLATFORMS</span></h3>
         <p>At Intelli, we don't just support IT, we solve for it. Whether you’re navigating the maze of enterprise technology, building your next-gen platform, or scaling global operations, we're the partner whose data-driven intelligence delivers solutions with the precision, integrity, and speed required at scale. </p>
    </div>
    </div>
  <Image src={FooterTOp} alt="" />
  <div className="container">

   

    <div className="footer-top-heading">
       <h3>Let's build what's next. <span>Together.</span></h3>
    </div>

  </div>
</section>
   
        <Footer />
      </main>
    </>
  );
}
