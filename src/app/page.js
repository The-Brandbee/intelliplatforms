"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import Header from "../app/common/Header.js";
import HeaderMobileIn from "../app/common/HeaderMobile.js";
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
import MONITORING from "../app/img/Group-242@2x.png";
 import MONITORINGTwo from "../app/img/Group-255@2x.png"; 
import border from "../app/img/3.png"; 
import MONITORINGTw from "../app/img/DEEP-1.png"; 
import MONITORINGTL from "../app/img/DEEP-2.png";  
import DEFINES from "../app/img/GIF.gif";
import bot from "../app/img/border-1.png";   
import services from "../app/img/Mask-Group-2.png";
import CustomerOne from "../app/img/Component 4 – 1.png";  
import CustomerTwo from "../app/img/Group 75.png";  
import CustomerThree from "../app/img/Group 76.png";  
import CustomerOnne from "../app/img/built-new-1.png";  
import CustomerOnneT from "../app/img/built-new-3.png";  
import CustomerOnneThree from "../app/img/built-new-2.png";  
  import CustomerOnneTfoy from "../app/img/built-new-43.png";
export default function Home() {
  return (
    <>     
            
      <main>                   
        <Head>
          <meta charset="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta name="robots" content="index, follow" />
          <meta name="description" content="=" />
        </Head>

        <header>
          <Header />
         
       </header> 

<section className="home-banner">
   <div className="container">
 
        <div className="home-banner-middle">
             <Image src={banner} alt="" />
             <div className="home-banner-middle-middle">
                  <h1><span>Empowering Enterprises</span> Through Intelligent IT Solutions</h1>
                  <p>Inteli Platforms empowers enterprises to innovate and scale through certified talent, global delivery, and smart technology execution</p>
                  <div className="banner-bottom">
                       <Link href="#">Explore Our Services</Link>
                       <Link href="#">Contact Our Team</Link>
                  </div>
             </div>
             <div className="home-banner-middle-middle-botto-heading">
                <h3>BUILT FOR PERFORMANCE. <span>DESIGNED FOR SCALE.</span></h3>
             </div>
        </div>
   </div>
</section>

<section className="Customer-Centricity-frame">
   <div className="container">
        <div className="Customer-Centricity-frame-middle">
          <div className="bor-m-last">
              <Image src={CustomerOnne} alt="" />
          </div>
           
            <ul>
              <div className="bor-m-last-t">
              <Image src={CustomerOnneT} alt="" />
          </div>
           <div className="bor-m-last-three">
              <Image src={CustomerOnneThree} alt="" />
          </div>
              <li>
                <Image src={CustomerOne} alt="" />
                <h4>Customer Centricity</h4>
                <p>We align with your goals to deliver measurable, business-driven outcomes.</p>
              </li>
               <li>
                <Image src={CustomerTwo} alt="" />
                <h4>Employee Resilience</h4>
                <p>We invest in people who adapt, innovate, and lead with agility.</p>
              </li>
               <li>
                <Image src={CustomerThree} alt="" />
                <h4>Lean Operations</h4>
                <p>We ensure delivery is predictable, repeatable, and value-focused across engagements.</p>
              </li>
            </ul>
        </div>

        <div className="strategic-it-services-partner">
            <div className="strategic-it-services-partner-left">
                <h4>YOUR STRATEGIC <span>IT SERVICES PARTNER</span></h4>
                <p><span>Intelli Platforms</span> is a global IT services company specializing in intelligent delivery models, enterprise transformation, and cross-functional technology partnerships. We enable Fortune 1000 companies to evolve faster through scalable solutions in infrastructure, application services, DevOps, and data engineering.</p>
                 <p><a href="#">Know More</a></p>
            </div>
            <div className="strategic-it-services-partner-right">
<Image src={services} alt="" />

            </div>
             <div className="bor-m-last-four">
              <Image src={CustomerOnneTfoy} alt="" />
          </div>
        </div>
   </div>
</section>

<section className="what-defines-our-culture">
     <div className="container">
         <div className="defines-po-img">
            <Image src={bordercut} alt="" />
      </div>
           <div className="what-defines-our-culture-heading">
                <h3>WHAT DEFINES OUR <span>CULTURE</span></h3> 
                 <Image src={DEFINES} alt="" />
           </div>
           <div className="what-defines-our-culture-bot">
                 <Image src={bot} alt="" />
                 <h3>TRUSTED BY <span>GLOBAL ENTERPRISES</span></h3>
           </div>
             
             <div className="ENTERPRISES-main-frame">
              <Marquee /> 
                  
             </div>

     </div>
</section>


<section className="your-strategic-it-services-partner">
     <div className="container">
      
           <div className="your-strategic-it-services-partner-middle">
             <div className="your-strategic-it-services-partner-middle-left">
               <div className="your-strategic-it-services-partner-middle-left-middle">
                <div className="left-border">
                  <Image src={border} alt="" />
                </div>
                    <h3>DEEP EXPERTISE IN OBSERVABILITY &</h3>
                    <h4>MONITORING <br/>TOOLS</h4>
                    <Image src={MONITORING} alt="" />
                    <div className="MONITORING-images-frame">
                       <Image src={MONITORINGTw} alt="" />
                    </div>
               </div> 
               <div className="arrow-container">
    <div className="triangle"></div>
  </div>
               </div>
               <div className="your-strategic-it-services-partner-middle-left">
                <div className="your-strategic-it-services-partner-middle-left-middle">
                <div className="left-border">
                  <Image src={border} alt="" />
                </div>
                    <h3>PROVEN IMPACT <br/>ACROSS</h3>
                    <h4>KEY INDUSTRY <br/>VERTICALS</h4>
                    <Image src={MONITORINGTwo} alt="" />
                    <div className="MONITORING-images-frame">
                       <Image src={MONITORINGTL} alt="" />
                    </div>
                    </div>
                    <div className="arrow-container">
    <div className="triangle"></div>
  </div>
               </div> 
           </div>
     </div>
</section>

<section className="where-we-deliver">
   <div className="container">
       <div className="where-we-deliver-middle">
           <h3>WHERE WE <span>DELIVER</span></h3>
            <Image src={Map} alt="" />
       </div>
   </div>
</section>

<section className="what-sets-us-apart">
     <div className="container">
         <div className="what-sets-us-apart-middle-heading">
           <h3>WHAT SETS US <span>APART</span></h3>
         </div>
         <div className="what-sets-us-apart-middle">
           <div className="what-sets-us-apart-middle-left">
                 <Image src={sets} alt="" />
                 <ul className="what-sets-us-apart-middle-left-list">
                  <li><span>Global footprint with localized expertise</span></li>
                  <li><span>Proven delivery excellence across industries</span></li>
                  <li><span>Deep vertical experience in financial services, healthcare, and technology</span></li>
                  <li><span>750+ certified professionals with advanced technical capabilities</span></li>
                  <li><span>Strategic alliance with New Relic to optimize enterprise monitoring</span></li>
                 </ul>
           </div>
           <div className="what-sets-us-apart-middle-right">
               <Image src={apart} alt="" />
           </div>

         </div>
     </div>
</section>


      <section className="LET-BUILD-WHAT-NEXT">
          <div className="container">
              <div className="LET-BUILD-WHAT-NEXT-middle">
                  <h3>LET'S BUILD <span>WHAT'S NEXT</span></h3>
                  <p>Whether you're scaling cloud infrastructure, modernizing your app ecosystem, or strengthening your data layer, we’re built to deliver.</p>
                 <p>
                  <Link href="/">Explore Our Services</Link>
                  <Link href="/">Contact Our Team</Link>
                 </p>
              </div>
          </div>
      </section>
        <Footer />
      </main>
    </>
  );
}
