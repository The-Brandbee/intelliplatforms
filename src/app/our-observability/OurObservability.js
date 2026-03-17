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
import Banner from "../img/Mask Group 1.png";  
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
import softwareSixHover from "../img/Group 357-1.png"; 

import softwareSeven from "../img/Group 356.png";
import softwareSevenHover from "../img/Group 356-1.png"; 

import softwareEight from "../img/Group 355.png";
import softwareEightHover from "../img/Group 355-1.png"; 

import softwareNine from "../img/Group 354.png";
import softwareNineHover from "../img/Group 354-1.png"; 

import softwareTen from "../img/Group 353.png";
import softwareTenHover from "../img/Group 353-1.png"; 

export default function OurObservability() {
  return (
    <div className="network-page">     
            
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
  <section className="home-banner intelli_buit_sec_new">
    <div className="container">
      <div className="home-banner-middle">
        <Image src={Banner} alt="" />
        <div className="home-banner-middle-middle">
          <h1 className="intelli_seconf_banner_first_head">
          OUR 
          </h1>
          <h1 className="intelli_seconf_banner_second_head">
        OBSERVABILITY
          </h1>
          <p className="intelli_seconf_banner_first_para">
         Driving end-to-end visibility, reliability, and performance across modern digital ecosystems.
          </p>
        </div>
        <div className="home-banner-middle-middle-botto-heading">
          <h3 className="intelli_second_banner_last_head">
          ENGINEERING <br/> <span>INTELLIGENCE AT SCALE</span>
          </h3>
          <p className="intelli_second_banner_last_para">
          A global fellowship of 200+ certified network engineers delivering precision-driven, scalable, and cost-effective solutions. Trusted by enterprises to modernize network infrastructure and observability layers in real time. </p>
        </div>
      </div>
    </div>
  </section>

<section className="si-pagemidle">

     <div className="container">
      <div className="top">
         <h2>
      CAPABILITIES THAT DRIVE <span>RESULTS</span>
    </h2>
      </div>
  <div className="capabilities-v2">
  {/* Left Side */}
  
  {/* Right Side Grid */}
  <div className="capabilities-v2-right">
    {/* Card 1 */}
    <div className="cap-card">
      <div className="cap-card-img">
       
         <Image src={Cardone} alt="" />
      </div>
      <h3 className="cap-title">Strategic & Advisory Services</h3>
      <div className="cap-card-hover">
        <h3 className="cap-title-b">Strategic & Advisory Services</h3>
        <p>
          High-level consulting to align monitoring and observability strategy with business goals.
        </p>
        <ul>
          <li>Observability maturity assessments to identify gaps and create roadmaps</li>
          <li>Tool selection and rationalization to reduce cost and complexity</li>
          <li>Advisory on best-fit platforms (Splunk, Dynatrace, others)</li>
        </ul>
      </div>
    </div>
    {/* Card 2 */}
    <div className="cap-card">
      <div className="cap-card-img">
       <Image src={CardTwo} alt="" />
      </div>
      <h3 className="cap-title">Implementation & Integration Services</h3>
      <div className="cap-card-hover">
        <h3 className="cap-title-b">Implementation & Integration Services</h3>
        <p>
         Hands-on technical delivery of monitoring and observability platforms.
        </p>
        <ul>
          <li>Full-scale deployment and configuration across environments</li>
          <li>Agent instrumentation for APM, distributed tracing, and real-user monitoring</li>
          <li>Custom dashboards and intelligent, context-aware alerting</li>
         
        </ul>
      </div>
    </div>
    {/* Card 3 */}
    <div className="cap-card">
      <div className="cap-card-img">
      <Image src={CardThree} alt="" />
      </div>
      <h3 className="cap-title">Managed Services & Optimization</h3>
      <div className="cap-card-hover">
        <h3 className="cap-title-b">Managed Services & Optimization</h3>
        <p>
         Ongoing support and continuous improvement for long-term reliability.
        </p>
        <ul>
          <li>24/7 platform management and support</li>
          <li>Observability-as-a-Service model</li>
          <li>Continuous optimization, upgrades, and performance tuning</li>
          <li>Site Reliability Engineering (SRE) augmentation for system reliability</li>
        </ul>
      </div>
    </div>
    {/* Card 4 */}
    <div className="cap-card">
      <div className="cap-card-img">
          <Image src={CardTFour} alt="" /> 
      </div>
      <h3 className="cap-title">Specialized & Advanced Services</h3>
      <div className="cap-card-hover">
        <h3 className="cap-title-b">Specialized & Advanced Services</h3>
        <p>Tailored, high-value services to meet unique enterprise needs.</p>
        <ul>
          <li>Custom application, integration, and extension development</li>
          <li>Advanced platform enhancements to unlock new capabilities</li>
          <li>
            Bespoke solutions designed for complex, industry-specific requirements
          </li>
        </ul>
      </div>
    </div>
   
   
  </div>
</div>
</div>
</section>


<section className="si-pagemidle">
     <div className="container">
<div className="saas-toolbox"> 
  <div className="toolbox-container">
    {/* Left */}
    <div className="toolbox-left">
      <h2>
        SOFTWARE-AS-A-SERVICE <br />
        <span>TOOLBOX</span>
      </h2>
    </div>
    {/* Right */}
    <div className="toolbox-right">
      <p>
        Our Toolbox delivers precision controls to manage ingest, users, and
        monitoring integrity. Enhancing signal fidelity and optimizing
        configurations, it helps enterprises align observability with their
        unique operating model.
      </p>
    </div>
  </div>
</div>
</div>
</section>


<section className="software-as-main-section">
<div className="container">
   <div className="software-as-main-section-middle-main">
       <div className="software-as-main-section-left">
           <ul>
            <li>
              <div className="software-a-img">
                 <Image src={softwareOne} alt="" className="normal" />
                  <Image src={softwareOneHover} alt="" className="hover" />
              </div>
              <div className="box-im-content-hover">
                <p>Ingest Optimizer <br/>Scheduler</p>
              </div>
            </li>
             <li>
              <div className="software-a-img">
                 <Image src={softwareTwo} alt="" className="normal" />
                  <Image src={softwareTwoHover} alt="" className="hover" />
              </div>
              <div className="box-im-content-hover">
                <p>Synthetics <br/>Synthesizer</p>
              </div>
            </li>
             <li>
              <div className="software-a-img">
                 <Image src={softwareThree} alt="" className="normal" />
                  <Image src={softwareThreeHover} alt="" className="hover" />
              </div>
              <div className="box-im-content-hover">
                <p>Forensic <br/>Fingerprint</p>
              </div>
            </li>
             <li>
              <div className="software-a-img">
                 <Image src={softwareFour} alt="" className="normal" />
                  <Image src={softwarFourneHover} alt="" className="hover" />
              </div>
              <div className="box-im-content-hover">
                <p>Synthetics <br/>Vindicator</p>
              </div>
            </li>
             <li>
              <div className="software-a-img">
                 <Image src={softwareFive} alt="" className="normal" />
                  <Image src={softwareFiveHover} alt="" className="hover" />
              </div>
              <div className="box-im-content-hover">
                <p>Trace <br/>Toggle</p>
              </div>
            </li>
           </ul>
       </div>
       <div className="software-as-main-section-middle">
      <Image src={softwareMiddle} alt="" className="normal" />
      <div className="bottom-content">
        <p><a href="#">Click here </a> to know more of our accelerators</p>
      </div>
       </div>
       <div className="software-as-main-section-right">
          <ul>
            <li>
              <div className="software-a-img">
                 <Image src={softwareSix} alt="" className="normal" />
                  <Image src={softwareSixHover} alt="" className="hover" />
              </div>
              <div className="box-im-content-hover">
                <p>User <br/>Optimizer</p>
              </div>
            </li>
             <li>
              <div className="software-a-img">
                 <Image src={softwareSeven} alt="" className="normal" />
                  <Image src={softwareSevenHover} alt="" className="hover" />
              </div>
              <div className="box-im-content-hover">
                <p>Remediator</p>
              </div>
            </li>
             <li>
              <div className="software-a-img">
                 <Image src={softwareEight} alt="" className="normal" />
                  <Image src={softwareEightHover} alt="" className="hover" />
              </div>
              <div className="box-im-content-hover">
                <p>Service Layer <br/>Analyzer</p>
              </div>
            </li>
             <li>
              <div className="software-a-img">
                 <Image src={softwareNine} alt="" className="normal" />
                  <Image src={softwareNineHover} alt="" className="hover" />
              </div>
              <div className="box-im-content-hover">
                <p>Infrastructure <br/>4 Free</p>
              </div>
            </li>
             <li>
              <div className="software-a-img">
                 <Image src={softwareTen} alt="" className="normal" />
                  <Image src={softwareTenHover} alt="" className="hover" />
              </div>
              <div className="box-im-content-hover">
                <p>Ingest Optimizer - <br/>Transaction Tracker</p>
              </div>
            </li>
           </ul>
       </div>
   </div>
</div>

</section>
  
  
<section className="foot-top-sectto">

     <div className="container">
   <div className="footer-top-heading-n-b">
         <h3><span>READY TO MODERNIZE</span> YOUR<br/> NETWORKS AND CLOUD OPERATIONS?</h3>
         <p>Let Intelli Platforms help you design, operate, and optimize intelligent infrastructure for the future.</p>
       <h5><a href="#">Talk to Our Experts</a></h5>
    </div>
    </div>
  <Image src={FooterTOp} alt="" />
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
