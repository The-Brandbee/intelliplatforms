"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import Header from "../common/Header.js";
import HeaderMobileIn from "../common/HeaderMobile.js";
import Footer from "../common/Footer.js";
import Marquee from "../common/Marqueee.js"; 
import "bootstrap/dist/css/bootstrap.min.css";
import { Montserrat } from "next/font/google";
import Script from "next/script";
import Map from "../img/map.png";   
import bordercut from "../img/border-cut.webp";  
import banner from "../img/home-banner.png";
import apart from "../img/Mask-Group-3.png";
import sets from "../img/Group-273.png";
import MONITORING from "../img/Group-242@2x.png";
 import MONITORINGTwo from "../img/Group-255@2x.png"; 
import border from "../img/3.png"; 
import MONITORINGTw from "../img/DEEP-1.png"; 
import MONITORINGTL from "../img/DEEP-2.png";  
import DEFINES from "../img/GIF.gif";
import bot from "../img/border-1.png";   
import services from "../img/Mask-Group-2.png";
import FooterTOp from "../img/border-border.png";  
import Cardone from "../img/paperwork.png";  
import CardTwo from "../img/paperwork.png";  
import CardThree from "../img/paperwork.png";  
import CardTFour from "../img/business-policy-governance-management-with-modern-technology.png";  
import CardFive from "../img/millennial-asia-businessmen-businesswomen-meeting-brainstorming-ideas-about-new-paperwork-project-colleagues-working-together-planning-success-strateg.png";  
import CardSix from "../img/businessman-holding-tablet-management-group-people-his-hand.png";  
import CardSeven from "../img/analyst-monitoring-data-screen@2x.png"; 
import STANDFOR from "../img/shutterstock_2281049609.png";  
import boyNT from "../img/inteli_second_large_slept.png";  
import boyN from "../img/shutterstock_1419431318@2x.png";  
import Banner from "../img/event-banner.png";  
import CustomerOnneTfoy from "../img/built-new-43.png";






import softwareMiddle from "../img/Group-400.png";
import softwareOne from "../img/Group 348.png";
import softwareOneHover from "../img/Group 348-1.png"; 
import softwareTwo from "../img/Group 349.png";
import softwareTwoHover from "../img/Group 349-1.png"; 

import softwareThree from "../img/Group 350.png";
import softwareThreeHover from "../img/Group 350-1.png"; 

import softwareFour from "../img/Group 351.png";
import softwarFourneHover from "../img/Group 351-1.png"; 

import softwareFive from "../img/Group 352.svg";
import softwareFiveHover from "../img/Group 352-1.png"; 

import softwareSix from "../img/Group 357.png";
import Logoone from "../img/relic.svg"; 

import LogoTwo from "../img/line-down2.svg";
import LogoThree from "../img/dynatrace-logo.png"; 

import LogoFour from "../img/splunk.png";
import LogoFive from "../img/line-down2.svg"; 

import CalOne from "../img/location-filled.png";
import CalTwo from "../img/calendar-check-fill.png"; 

import Igo from "../img/IGNITE-Final-Logo-PNG.png";
import Arrow from "../img/arrow-down-circle-fill-nf.png"; 

       

import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
  } from 'react-accessible-accordion';
  
  // Demo styles, see 'Styles' section below for some notes on use.
  import 'react-accessible-accordion/dist/fancy-example.css';

export default function Home() {
  return (
    <div className="network-page enent-page">     
            
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

<>
  {/* banner sec */}
  <section className="home-banner intelli_buit_sec_new partner">
    <div className="container">
      <div className="home-banner-middle">
        <Image src={Banner} alt="" />
        <div className="home-banner-middle-middle">
        <h1 className="intelli_seconf_banner_first_head">AT THE FOREFRONT<br/> OF INNOVATION AND<br/> IMPACT</h1>
       
          <p className="intelli_seconf_banner_first_para">
         Stay connected with Intelli as we engage with global leaders, share insights, and shape the future of staffing, finance, and technology. Explore where we're headed next — and the conversations we've been a part of. </p>
        </div>
        <div className="home-banner-middle-middle-botto-heading partner">
          <h3 className="intelli_second_banner_last_head">
        Past Events
          </h3>
             
        </div>
      </div>
    </div>
  </section>


<section className="event-new-middle">
    <div className="container">
         <div className="event-new-middle-middle">
             <div className="event-new-middle-middle-top">
                <div className="event-new-middle-middletop-left">
                    <h4>Ignite 2026 <span>— Virtuosic Ventures Annual Summit</span></h4>
                    <ul>
                        <li>
                             <Image src={CalOne} alt="" />
                             Hyderabad, India
                        </li>
                         <li>
                             <Image src={CalTwo} alt="" />
                            November 17-18, 2025
                        </li>
                    </ul>
                </div>
                <div className="event-new-middle-middletop-right">
                      <Image src={Igo} alt="" />
                </div>
             </div>
             <div className="event-new-middle-middle-bottom">
                <p><span>Organized by:</span> Virtuosic Ventures </p>
                <p><span>Attended by:</span> Intelli Leadership and Product Teams</p>
                <p><span>Details:</span> Intelli participated in Ignite 2026, contributing to conversations around product innovation, platform scalability, and data-driven transformation. The event brought together leaders from across the ecosystem, enabling Intelli to showcase its capabilities, build cross-portfolio synergies, and gain insights to accelerate its technology roadmap.</p>
             
             </div>
             <div className="enent-arrow">
                <Image src={Arrow} alt="" />
             </div>
         </div>
    </div>
</section>          



  
<section className="foot-top-sectto partener">

   
  
  <div className="container">

    <div className="footer-top-heading">
       <h3>Let's build what's next. <span>Together.</span></h3>
    </div>

  </div>
</section>



  
</>

        <Footer />
      </main>
    </div>
  );
}
