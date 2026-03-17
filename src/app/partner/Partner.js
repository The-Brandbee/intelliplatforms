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
import Banner from "../img/part-banner.png";  
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

import LogoSix from "../img/nexthink.png";
import LogoSeven from "../img/evoleven.png"; 

import LogoEight from "../img/down-glow-line.svg";
import LogoNine from "../img/mydecisive.png"; 



import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
  } from 'react-accessible-accordion';
  
  // Demo styles, see 'Styles' section below for some notes on use.
  import 'react-accessible-accordion/dist/fancy-example.css';

export default function Partner() {
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
  <section className="home-banner intelli_buit_sec_new partner">
    <div className="container">
      <div className="home-banner-middle">
        <Image src={Banner} alt="" />
       
        <div className="home-banner-middle-middle-botto-heading partner">
          <h3 className="intelli_second_banner_last_head">
        Intelli Platforms Partner / Practices
          </h3>
         <p
  className="intelli_second_banner_last_para"
  style={{ color: '#01C591' }}
>
  Which Partners are we working with right now!
</p>             
        </div>
      </div>
    </div>
  </section>


<section className="intelli_partener_new_main_sec">
  <div className="container">
    {/* Row 1 */}
    <div className="intelli_partener_new_main_row">
      <div className="intelli_partener_new_left_column intelli_partener_new_left_column_bordered">
        <div className="intelli_partener_new_main_box">
          <div className="intelli_partner_main_logo_box">
            <Image src={Logoone} alt="" />
          </div>
          <p>
            New Relic's most important value proposition lies in providing full-stack, end-to-end visibility across an entire software ecosystem within a single, unified platform. Its key capabilities include robust Application Performance Monitoring (APM), log management, and distributed tracing. New Relic’s strength is eliminating tool sprawl and data silos by seamlessly correlating all telemetry data—metrics, events, logs, and traces (MELT)—from the cloud to the application code. This comprehensive view allows customers, especially DevOps and SRE teams, to quickly pinpoint performance bottlenecks and troubleshoot complex issues faster without needing to jump between multiple tools.
          </p>
        </div>
      </div>

      <div className="intelli_partener_new_middle_column">
        <div className="intelli_partener_new_main_img_box">
          <Image src={LogoTwo} alt="" />
        </div>
      </div>

      <div className="intelli_partener_new_right_column intelli_partener_new_right_column_bordered">
        <div className="intelli_partener_new_main_box">
          <div className="intelli_partner_main_logo_box">
            <Image src={LogoThree} alt="" />
          </div>
          <p>
            Dynatrace accentuates its value proposition through AI-powered, automated, and deep causal analysis. Its core capability is the use of its proprietary Davis AI technology, which not only detects anomalies but automatically identifies the precise root cause of problems, even in highly dynamic, cloud-native environments. Unlike solutions that require manual configuration and data correlation, Dynatrace's platform automatically instruments applications, maps dependencies in real-time with its Smartscape technology, and uses deterministic AI to provide high-fidelity, actionable answers. This focus on automation and precision enables customers to move toward autonomous operations, dramatically reducing Mean Time to Resolution (MTTR) and operational toil.
          </p>
        </div>
      </div>
    </div>

    {/* Row 2 */}
    <div className="intelli_partener_new_main_row">
      <div className="intelli_partener_new_left_column intelli_partener_new_left_column_bordered">
        <div className="intelli_partener_new_main_box">
          <div className="intelli_partner_main_logo_box">
          <Image src={LogoFour} alt="" />
          </div>
          <p>
            Splunk offers a powerful value proposition centered on real-time analytics and massive-scale data processing, building upon its legacy in log management. The Splunk Observability Cloud unifies metrics, logs, and traces and excels at providing deep, real-time insights through its streaming analytics and high-volume data ingestion capabilities. Its most important value for customers is the ability to ingest and rapidly analyze virtually any type of machine data from across the entire IT infrastructure. This capability provides a unique, analytics-powered approach to quickly detect, investigate, and resolve issues, making it a critical tool for organizations with complex, data-intensive environments.
          </p>
        </div>
      </div>

      <div className="intelli_partener_new_middle_column">
        <div className="intelli_partener_new_main_img_box">
          <Image src={LogoFive} alt="" />
        </div>
      </div>

      <div className="intelli_partener_new_right_column intelli_partener_new_right_column_bordered">
        <div className="intelli_partener_new_main_box">
          <div className="intelli_partner_main_logo_box">
            <Image src={LogoSix} alt="" />
          </div>
          <p>
            Nexthink's focus is on Digital Employee Experience (DEX), which is its primary value proposition. Unlike other platforms focused on back-end infrastructure or customer-facing applications, Nexthink provides real-time, staff-centric or customer direct visibility into the performance of devices, applications, and networks from the perspective of the end-user. Key capabilities include measuring employee sentiment, automated remediation of local device issues, and defining digital experience scores. This allows customers' IT support and operations teams to proactively address issues that impact employee productivity and happiness, shifting IT from a reactive support model to a proactive, experience-focused function, often in an agentic format.
          </p>
        </div>
      </div>
    </div>

    {/* Row 3 */}
    <div className="intelli_partener_new_main_row">
      <div className="intelli_partener_new_left_column">
        <div className="intelli_partener_new_main_box">
          <div className="intelli_partner_main_logo_box">
            <Image src={LogoSeven} alt="" />
          </div>
          <p>
            Evolven's unique value proposition is its specialty in Change and Configuration Risk Intelligence. Its core capability involves using patented machine learning to automatically detect and analyze all actual changes (configuration, code, workload) from infrastructure to application, comparing them against approved plans, baselines, and consistent environments. This allows customers to rapidly accelerate troubleshooting by pinpointing the exact change that caused an incident—the number one cause of outages—and to enforce change control. Evolven is critical for ensuring environmental consistency, detecting configuration drift, and providing a comprehensive change audit trail for stability and compliance.
          </p>
        </div>
      </div>

      <div className="intelli_partener_new_middle_column">
        <div className="intelli_partener_new_main_img_box">
         <Image src={LogoEight} alt="" />
        </div>
      </div>

      <div className="intelli_partener_new_right_column intelli_partener_new_right_column_no_bdr">
        <div className="intelli_partener_new_main_box">
          <div className="intelli_partner_main_logo_box">
           <Image src={LogoNine} alt="" />
          </div>
          <p>
            mydecisive.ai's primary value proposition centers on giving customers control and cost-efficiency over their observability data, particularly for traces, by leveraging open standards like OpenTelemetry. Its key capability is the Dynamic Trace Triggers and its Smart Telemetry Hub, which captures every span of trace data without expensive, restrictive sampling. It empowers customers to retain all their detailed data in their own cost-effective cloud storage and build real-time business context from the data. This provides customers with full visibility, the ability to eliminate high vendor tracing costs, and the flexibility to analyze and set alerts on specific business anomalies without vendor lock-in.
          </p>
        </div>
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
