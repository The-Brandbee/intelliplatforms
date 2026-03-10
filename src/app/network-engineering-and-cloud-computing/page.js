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
import Banner from "../img/Mask Group 1qq.png";  
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
        <h1 className="intelli_seconf_banner_first_head">NETWORK <br/>PLATFORMS AND
        <span className="intelli_seconf_banner_second_head">CLOUD COMPUTING</span>
        </h1>
          <p className="intelli_seconf_banner_first_para">
         Trusted, scalable, and cost-effective solutions to modernize enterprise networks and cloud infrastructure.
          </p>
        </div>
        <div className="home-banner-middle-middle-botto-heading">
          <h3 className="intelli_second_banner_last_head">
         BUILDING INTELLIGENT, <br/><span>RESILIENT NETWORKS</span>
          </h3>
          <p className="intelli_second_banner_last_para">
          Intelli Platforms brings over nine years of proven expertise in network engineering and cloud operations, backed by a fellowship of 200+ certified engineers across the U.S., India, and Costa Rica. Our solutions are built to ensure secure, high-performing, and future-ready networks that empower enterprises to innovate and scale with confidence.
          </p>
        </div>
      </div>
    </div>
  </section>

<section className="si-pagemidle">

     <div className="container">


     <div className="faq-section-main-section">
      <div className="faq-section-main-section-heading">
          <h3>OUR CAPABILITIES <span>AT A GLANCE</span></h3>   
      </div>
        <div className="faq-section-main-section-middle">
                 
            <Accordion preExpanded={['a']}>
            <AccordionItem uuid={'a'} >
                <AccordionItemHeading>
                    <AccordionItemButton>
                    <h3>Network Engineering as a Service (NEaaS)

                    </h3>
                      
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <div className="phase-main-middle-frame">
                      <p>
        Flexible access to certified engineers for end-to-end network support.
        </p>
        <ul>
          <li>Multi-vendor expertise: Cisco, Juniper, Fortinet, Palo Alto, Arista</li>
          <li>On-demand L1, L2, L3 engineers</li>
          <li>WAN, LAN, SD-WAN, wireless, and data center support</li>
        </ul>
                     </div>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem uuid={'b'}>
                <AccordionItemHeading>
                    <AccordionItemButton>
                    <h3>Cloud & Edge Network Modernization </h3>
                      
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                <div className="phase-main-middle-frame PHASE-2">
                <p>
         Modernizing infrastructure for cloud migration and hybrid readiness.
        </p>
        <ul>
          <li>Network architecture redesign for cloud migration</li>
          <li>VPN, Direct Connect, and ExpressRoute implementations</li>
          <li>Secure connectivity across AWS, Azure, and GCP</li>
          <li>Hybrid and multi-cloud optimization</li>
         
        </ul>
                    </div>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem uuid={'c'}>
                <AccordionItemHeading>
                    <AccordionItemButton>
                    <h3>Observability Enablement</h3>
                      
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                <div className="phase-main-middle-frame">
                <p>
       Delivering real-time insights to ensure reliability and performance.
        </p>
        <ul>
          <li>Full-stack observability across leading APM and monitoring tools</li>
          <li>Metrics, Events, Logs, Traces (MELT) orchestration</li>
          <li>Dashboarding and alerting via real-time analytics</li>
          <li>Network insight through telemetry, SNMP traps, and flow analysis</li>
        </ul>
                    </div>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem uuid={'d'}>
                <AccordionItemHeading>
                    <AccordionItemButton>
                    <h3> Staffing & Resource Augmentation
                    </h3>
                      
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                <div className="phase-main-middle-frame">
               <p>Flexible staffing solutions to extend client capabilities.</p>
        <ul>
          <li>Contract, contract-to-hire, or full-time resources</li>
          <li>Dedicated agile pods for project execution</li>
          <li>
            U.S. onshore + offshore hybrid delivery models
          </li>
          <li>ITIL-compliant workflows</li>
        </ul>

                    </div>
                </AccordionItemPanel>
            </AccordionItem>
              <AccordionItem uuid={'e'}>
                <AccordionItemHeading>
                    <AccordionItemButton>
                    <h3> Managed NOC Services
                    </h3>
                      
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                <div className="phase-main-middle-frame">
               <p>Comprehensive, global support from a centralized NOC.</p>
        <ul>
          <li>24×7 operations with worldwide coverage</li>
          <li>Tiered support: L1 (alerts), L2 (diagnostics), L3 (resolution & escalation)</li>
          <li>
            SLA-driven incident and problem management
          </li>
          <li>ITIL-compliant workflows</li>
        </ul>

                    </div>
                </AccordionItemPanel>
            </AccordionItem>
              <AccordionItem uuid={'f'}>
                <AccordionItemHeading>
                    <AccordionItemButton>
                    <h3> Compliance & Security Hardening
                    </h3>
                      
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                <div className="phase-main-middle-frame">
                 <p>Ensuring networks are secure, compliant, and resilient.</p>
        <ul>
          <li>Network audits and vulnerability assessments</li>
          <li>Secure baseline configurations</li>
          <li>
            Continuous monitoring and compliance reporting (NIST, SOC2, ISO)
          </li>
          
        </ul>

                    </div>
                </AccordionItemPanel>
            </AccordionItem>
             <AccordionItem uuid={'y'}>
                <AccordionItemHeading>
                    <AccordionItemButton>
                    <h3> Project-Based Services
                    </h3>
                      
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                <div className="phase-main-middle-frame">
                <p>Specialized services to manage transitions and upgrades.</p>
        <ul>
          <li>New site deployments, upgrades, and migrations</li>
          <li>Equipment refresh & lifecycle management</li>
          <li>
            Network documentation and runbooks
          </li>
          <li>Decommissioning and clean-up projects</li>
          
        </ul>

                    </div>
                </AccordionItemPanel>
            </AccordionItem>
        </Accordion>
             <div className="bottom-p-content">
    <p>From strategy to execution, Intelli delivers the expertise and scale needed to keep your networks secure, agile, and always-on.</p>
</div>
        </div>
     </div>



      
<div className="capabilities-v2" style={{ display: "none" }}>
  {/* Left Side */}
  
  {/* Right Side Grid */}
  <div className="capabilities-v2-right">
 {/* Card 0 */}
    <div className="cap-card first-new">
     
     <h3>OUR <br/>CAPABILITIES <span>AT A GLANCE</span></h3>   
    </div>

    {/* Card 1 */}
    <div className="cap-card">
      <div className="cap-card-img">
       
         <Image src={Cardone} alt="" />
      </div>
      <h3 className="cap-title">Network Engineering as a Service (NEaaS)</h3>
      <div className="cap-card-hover">
        <h3 className="cap-title-b">Network Engineering as a Service (NEaaS)</h3>
        <p>
        Flexible access to certified engineers for end-to-end network support.
        </p>
        <ul>
          <li>Multi-vendor expertise: Cisco, Juniper, Fortinet, Palo Alto, Arista</li>
          <li>On-demand L1, L2, L3 engineers</li>
          <li>WAN, LAN, SD-WAN, wireless, and data center support</li>
        </ul>
      </div>
    </div>
    {/* Card 2 */}
    <div className="cap-card">
      <div className="cap-card-img">
       <Image src={CardTwo} alt="" />
      </div>
      <h3 className="cap-title">Cloud & Edge Network Modernization</h3>
      <div className="cap-card-hover">
        <h3 className="cap-title-b">Cloud & Edge Network Modernization</h3>
        <p>
         Modernizing infrastructure for cloud migration and hybrid readiness.
        </p>
        <ul>
          <li>Network architecture redesign for cloud migration</li>
          <li>VPN, Direct Connect, and ExpressRoute implementations</li>
          <li>Secure connectivity across AWS, Azure, and GCP</li>
          <li>Hybrid and multi-cloud optimization</li>
         
        </ul>
      </div>
    </div>
    {/* Card 3 */}
    <div className="cap-card">
      <div className="cap-card-img">
      <Image src={CardThree} alt="" />
      </div>
      <h3 className="cap-title">Observability Enablement</h3>
      <div className="cap-card-hover">
        <h3 className="cap-title-b">Observability Enablement</h3>
        <p>
       Delivering real-time insights to ensure reliability and performance.
        </p>
        <ul>
          <li>Full-stack observability across leading APM and monitoring tools</li>
          <li>Metrics, Events, Logs, Traces (MELT) orchestration</li>
          <li>Dashboarding and alerting via real-time analytics</li>
          <li>Network insight through telemetry, SNMP traps, and flow analysis</li>
        </ul>
      </div>
    </div>
    {/* Card 4 */}
    <div className="cap-card">
      <div className="cap-card-img">
          <Image src={CardTFour} alt="" /> 
      </div>
      <h3 className="cap-title">Strategic Staffing & Resource Augmentation</h3>
      <div className="cap-card-hover">
        <h3 className="cap-title-b">Strategic Staffing & Resource Augmentation</h3>
        <p>Flexible staffing solutions to extend client capabilities.</p>
        <ul>
          <li>Contract, contract-to-hire, or full-time resources</li>
          <li>Dedicated agile pods for project execution</li>
          <li>
            U.S. onshore + offshore hybrid delivery models
          </li>
          <li>ITIL-compliant workflows</li>
        </ul>
      </div>
    </div>

    {/* Card 5 */}
    <div className="cap-card">
      <div className="cap-card-img">
          <Image src={CardTFour} alt="" /> 
      </div>
      <h3 className="cap-title">Managed NOC Services</h3>
      <div className="cap-card-hover">
        <h3 className="cap-title-b">Managed NOC Services</h3>
        <p>Comprehensive, global support from a centralized NOC.</p>
        <ul>
          <li>24×7 operations with worldwide coverage</li>
          <li>Tiered support: L1 (alerts), L2 (diagnostics), L3 (resolution & escalation)</li>
          <li>
            SLA-driven incident and problem management
          </li>
          <li>ITIL-compliant workflows</li>
        </ul>
      </div>
    </div>
    {/* Card 6 */}
    <div className="cap-card">
      <div className="cap-card-img">
          <Image src={CardTFour} alt="" /> 
      </div>
      <h3 className="cap-title">Compliance & Security Hardening</h3>
      <div className="cap-card-hover">
        <h3 className="cap-title-b">Compliance & Security Hardening</h3>
        <p>Ensuring networks are secure, compliant, and resilient.</p>
        <ul>
          <li>Network audits and vulnerability assessments</li>
          <li>Secure baseline configurations</li>
          <li>
            Continuous monitoring and compliance reporting (NIST, SOC2, ISO)
          </li>
          
        </ul>
      </div>
    </div>

    {/* Card 7 */}
    <div className="cap-card">
      <div className="cap-card-img">
          <Image src={CardTFour} alt="" /> 
      </div>
      <h3 className="cap-title">Project-Based Services</h3>
      <div className="cap-card-hover">
        <h3 className="cap-title-b">Project-Based Services</h3>
        <p>Specialized services to manage transitions and upgrades.</p>
        <ul>
          <li>New site deployments, upgrades, and migrations</li>
          <li>Equipment refresh & lifecycle management</li>
          <li>
            Network documentation and runbooks
          </li>
          <li>Decommissioning and clean-up projects</li>
          
        </ul>
      </div>
    </div>
   
   
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
