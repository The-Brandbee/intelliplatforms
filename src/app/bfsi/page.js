"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import Header from "../common/Header.js";
import HeaderMobileIn from "../common/HeaderMobile.js";
import Footer from "../common/Footer.js";
import Maquee from "../common/MarqueeeNew.js"; 
import "bootstrap/dist/css/bootstrap.min.css";
import { Montserrat } from "next/font/google";
import Script from "next/script";
import Map from "../img/map.png";   
import bordercut from "../img/cut.png";  
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
import Iconone from "../img/ACROSS-5.png";  
import IconTwo from "../img/ACROSS-6.png";  
import IconThree from "../img/ACROSS-1.png";  
import IconFour from "../img/ACROSS-2.png";  
import IconFive from "../img/ACROSS-3.png";  
import IconSix from "../img/ACROSS-4.png";  
import Border from "../img/borderdot.png"; 
import STANDFOR from "../img/shutterstock_2281049609.png";  
import Right from "../img/shutterstock_2282746085.png";  
import BUILDINGOne from "../img/shutterstock_1419431318.png";  
import Banner from "../img/bfsi-banner.png";  
import CustomerOnneTfoy from "../img/built-new-43.png";

 

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
  <section className="home-banner intelli_buit_sec_new nb">
    <div className="container">
      <div className="home-banner-middle">
        <Image src={Banner} alt="" />
        <div className="home-banner-middle-middle">
          <h1 className="intelli_seconf_banner_first_head">
         ACCELERATING<br/> SPECIALIST 
          </h1>
          <h1 className="intelli_seconf_banner_second_head">
      BFSI GROWTH
          </h1>
          <p className="intelli_seconf_banner_first_para">
        Driving modernization, resilience, and innovation across asset, investment, and retirement ecosystems.
          </p>
        </div>
        <div className="home-banner-middle-middle-botto-heading TRANSFORMATION new">
          <h3 className="intelli_second_banner_last_head">
        YOUR PARTNER IN FINANCIAL <br/><span>TRANSFORMATION</span>
          </h3>
          <p className="intelli_second_banner_last_para">
          Intelli Platforms partners with global financial institutions to modernize, stabilize, and optimize business models, processes, and technology stacks.
          </p>
          <p className="intelli_second_banner_last_para">With over four decades of collective BFSI experience and deep domain expertise across Asset Management, Investment Management, Retirement Services, Employee Benefits, Brokerage, and Insurance, Intelli takes a boutique, specialty-driven approach to operational and digital transformation.</p>
          <p className="intelli_second_banner_last_para">As the industry moves toward AI, automation, and data-driven engagement, Intelli helps clients embrace next-gen capabilities while preparing for the wealth transfer to Gen Z and millennial investors.</p>
        </div>
      </div>
    </div>
  </section>

<section className="si-pagemidle main">
<br/>
<br/>
     <div className="container">


     <div className="faq-section-main-section">
      <div className="faq-section-main-section-heading">
          <h3>SHAPING THE FUTURE OF <span>FINANCIAL SERVICES</span></h3>   
      </div>
        <div className="faq-section-main-section-middle">
                 
            <Accordion preExpanded={['a']}>
            <AccordionItem uuid={'a'} >
                <AccordionItemHeading>
                    <AccordionItemButton>
                    <h3>Asset & Investment Management

                    </h3>
                      
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <div className="phase-main-middle-frame">
                   
        <ul>
          <li>Active ETFs surge, with fixed-income leading inflows </li>
          <li>T+1 settlements demand automation and intraday operations </li>
          <li>Industry consolidation for scale and private markets</li>
          <li>Tokenization pilots moving toward production</li>
        </ul>
                     </div>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem uuid={'b'}>
                <AccordionItemHeading>
                    <AccordionItemButton>
                    <h3>Wealth & Retirement </h3>
                      
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                <div className="phase-main-middle-frame PHASE-2">
                
        <ul>
          <li>SECURE 2.0 introduces auto-enrollment and Roth provisions</li>
          <li>Catch-up contributions extended for ages 60-63</li>
          <li>In-plan annuities and managed payout models on the rise</li>
          <li>Recordkeeper consolidation and platform modernization underway</li>
         
        </ul>
                    </div>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem uuid={'c'}>
                <AccordionItemHeading>
                    <AccordionItemButton>
                    <h3>Banking & Broker-Dealers</h3>
                      
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                <div className="phase-main-middle-frame">
               
        <ul>
          <li>Post-trade compression under T+1 deadlines</li>
          <li>New Reg S-P mandates heighten cybersecurity and privacy focus</li>
          <li>Regulatory recalibration and evolving SEC rule frameworks</li>
          <li>Regulatory recalibration and evolving SEC rule frameworks</li>
          <li>Collateral mobility driven by tokenized MMFs and Treasuries</li>
        </ul>
                    </div>
                </AccordionItemPanel>
            </AccordionItem>
            
              
              
             
        </Accordion>
     
        </div>

   <div className="Asset-Management-frame-main FINANCIAL-ECOSYSTEM">
       <div className="faq-section-main-section-heading">
          <h3>EXPERTISE ACROSS <br/>THE <span>FINANCIAL ECOSYSTEM</span></h3>  
          <ul>
            <li>
                <Image src={Iconone} alt="" />
                <p>Asset Management</p>
             </li>
             <li>
                <Image src={IconTwo} alt="" />
                <p>Investment Management</p>
             </li>
             <li>
                <Image src={IconThree} alt="" />
                <p>Retirement Services</p>
             </li>
             <li>
                <Image src={IconFour} alt="" />
                <p>Employee Benefits</p>
             </li>
             <li>
                <Image src={IconFive} alt="" />
                <p>Brokerage</p>
             </li>
             <li>
                <Image src={IconSix} alt="" />
                <p>Insurance</p>  
             </li>
            </ul> 
      </div>
   </div>

<div className="faq-section-main-section-heading">
          <h3>OUR BFSI CAPABILITIES <span>AT A GLANCE</span></h3>   
      </div>
        <div className="faq-section-main-section-middle">
                 
            <Accordion preExpanded={['a']}>
            <AccordionItem uuid={'a'} >
                <AccordionItemHeading>
                    <AccordionItemButton>
                    <h3>Operational Transformation

                    </h3>
                      
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <div className="phase-main-middle-frame">
                   <p>Modernizing financial operations for agility and resilience.</p>
        <ul>
          <li>Target operating models and IT-OPS efficiency frameworks </li>
          <li>Strategic sourcing and OPS risk assessments</li>
          <li>Shadow contingent NAV design and deployment</li>
         
        </ul>
                     </div>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem uuid={'b'}>
                <AccordionItemHeading>
                    <AccordionItemButton>
                    <h3>System Implementation & Growth Advisory
 </h3>
                      
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                <div className="phase-main-middle-frame PHASE-2">
                <p>Delivering digital-first transformation for complex financial ecosystems.
</p>
        <ul>
          <li>M&A advisory and post-merger integration</li>
          <li>Product and channel management strategies
</li>
          <li>Business analysis and program risk management
</li>
         
        </ul>
                    </div>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem uuid={'c'}>
                <AccordionItemHeading>
                    <AccordionItemButton>
                    <h3>Human Capital & Leadership Enablement</h3>
                      
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                <div className="phase-main-middle-frame">
               <p>Building leadership cultures that sustain transformation.
</p>
        <ul>
          <li>Fractional CXO and SME augmentation</li>
          <li>C-suite and executive leadership development</li>
          
          <li>Strategic talent models for BFSI operations</li>
        </ul>
                    </div>
                </AccordionItemPanel>
            </AccordionItem>

             <AccordionItem uuid={'D'}>
                <AccordionItemHeading>
                    <AccordionItemButton>
                    <h3>Specialty BFSI Advisory & Consulting</h3>
                      
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                <div className="phase-main-middle-frame">
               <p>Deep domain consulting across the full value chain.
</p>
        <ul>
          <li>Front-, middle-, and back-office transformations</li>
          <li>Custody, broker-dealer, and depository expertise
</li>
          <li>Specialized focus on asset, investment, and retirement domains
</li>
        </ul>
                    </div>
                </AccordionItemPanel>
            </AccordionItem>


            <AccordionItem uuid={'E'}>
                <AccordionItemHeading>
                    <AccordionItemButton>
                    <h3>Accelerators & Playbooks</h3>
                      
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                <div className="phase-main-middle-frame">
               <p>Proprietary frameworks to fast-track modernization and compliance.

</p>
        <ul>
          <li>T+1 Playbook: Custodian workflows and post-trade automation
</li>
          <li>SECURE 2.0 Suite: Plan design and analytics
</li>
          <li>ETF Launch & Conversion Kit
</li>
<li>Tokenization Readiness Framework</li>
<li>Reg S-P Data Control Playbook</li>
        </ul>
                    </div>
                </AccordionItemPanel>
            </AccordionItem>
            
              
              
             
        </Accordion>
     <br/>
     <br/>
     <br/>
        </div>

     </div>




</div>
</section>



  <section className="leading-financial-institutions">
    <div className="container">
        <div className="leading-financial-institutions-middle">
            <div className="leading-financial-institutions-left">
                 <div className="leading-financial-institutions-left-l">
                     <div className="leading-financial-institutions-heading">
                         <h3>TRUSTED BY<br/> <span>LEADING FINANCIAL<br/> INSTITUTIONS</span></h3>
                     </div>
                 </div>
                 <div className="leading-financial-institutions-right">
                     <ul className="eading-fin">   
                        <li><span>Asset Servicing:</span> Fund Admins, Transfer Agencies, BPOs</li>
                        <li><span>Asset Managers:</span> Hedge Funds, PE Funds, Mutual Funds, SMA Portfolios
</li>
<li><span>Asset Owners:</span> Pension Funds, Family Offices, Insurance Providers, HNW Clients</li>
                     </ul>
                 </div>
            </div>
        </div>
        <div className="border-imhg">
            <Image src={Border} alt="" /> 
        </div>
        <div className="leading-financial-institutions-middle">
            <div className="leading-financial-institutions-left">
                 <div className="leading-financial-institutions-left-l">
                     <div className="leading-financial-institutions-heading">
                         <h3>SOME OF OUR <br/><span>BFSI COLLABORATIONS</span></h3>
                         <h5>Clients Include: Northern Trust, Rockefeller, <br/>Broadridge, Citi, SEI, Ascensus, Inspira, PBUCC</h5>
                     </div>
                 </div>
                 <div className="leading-financial-institutions-right">
                     <ul className="eading-fin">   
                        <li><span>Retirement:</span> FIS, Fiserv, Ascensus, SEI, Delta Data
</li> 
                        <li><span>Asset Servicing:</span> Northern Trust, SS&C, Broadridge, DTCC</li>
<li><span>Investment:</span> OMS, PMS, IBOR/ABOR, Data Lakes
 </li>
                     </ul>
                 </div>
            </div>
        </div>
          <div className="border-imhg">
            <Image src={Border} alt="" />
        </div>
    </div>
  </section>



  <section className="financial-infrastructure-frame">
    <div className="container">
        <div className="financial-infrastructure-frame-middle">
            <div className="financial-infrastructure-frame-middle-left">
               <div className="leading-financial-institutions-heading">
                         <h3>BUILDING THE<br/> FUTURE OF <span>FINANCIAL<br/> INFRASTRUCTURE</span></h3>
                         <ul className="eading-fin">   
                        <li>Tokenization, Active ETFs, and T+1 readiness
</li> 
                        <li>Cloud and AI adoption for scalable infrastructure</li>
<li>Front: Product strategy, distribution, client experience
 </li>
 <li> Middle: Portfolio operations, analytics, risk, and compliance</li>
 <li>Back: Fund administration, trade support, and accounting</li>
 <li>Change: Conversions, vendor selection, PMO/Agile transformation</li>
 <li>Controls: InfoSec, privacy, resiliency, and audit readiness</li> 
                     </ul>
               </div>
            </div>
            <div className="financial-infrastructure-frame-middle-right">
               <Image src={Right} alt="" />
            </div>
        </div>
    </div>
  </section>

  <section className="a-force-multiplier">
    <div className="container">
         <div className="defines-po-img">
              <Image src={bordercut} alt="" />
            </div>
        <div className="a-force-multiplier-middle">
            <div className="a-force-multiplier-middle-left">

                     <div className="leading-financial-institutions-heading">
                      <h5>A FORCE MULTIPLIER</h5>            
                         <h3>DRIVING BFSI GROWTH <br/>WITH GSI PARTNERS</h3>
                      </div>              
               <Image src={BUILDINGOne} alt="" />
            </div>
            <div className="a-force-multiplier-middle-right">
                <div className="Our-GSI-Partners">
                     <h4>Our GSI Partners Provide:</h4>
                      <ul className="eading-fin">
                        <li>Engineering scale and global delivery</li>
                      </ul>
                </div>
                 <div className="Our-GSI-Partners">
                     <h4>Intelli Platforms Delivers:</h4>
                      <ul className="eading-fin">
                        <li>Deep BFSI domain expertise </li>
                        <li>Proven experience building large-scale BFSI business units</li>
                        <li>Knowledge of global IT majors and client wallet share</li>
                      </ul>
                </div>
                   <div className="Our-GSI-Partners">
                     <h4>Combined Value Proposition:</h4>
                      <ul className="eading-fin">
                        <li>Faster delivery with lower risk</li>
                        <li>Co-sell into mutual BFSI accounts to expand market share</li>
                        
                      </ul>
                </div>
   <div className="Our-GSI-Partners">
                     <h4>Our Differentiators:</h4>
                      <ul className="eading-fin">
                        <li>Unique accelerators, including Conversions, T+1 Toolkits, and SECURE 2.0 Playbooks</li>
                        <li>2x growth potential through platform plays and SMB wins</li>
                        
                      </ul>
                </div>
            </div>
        </div>
    </div>
  </section>

  <section className="expertise-across-key-platforms">
    <div className="container">
      <div className="expertise-across-key-platforms-middle">
          <div className="leading-financial-institutions-heading">
                      <h3>EXTENDING BFSI EXPERTISE <br/>ACROSS <span>KEY PLATFORMS</span></h3>            
                         
           </div>
           <ul>
            <li>
              <h5>Banking</h5>
              <p>FIS, Fiserv, Finacle, Temenos</p>
            </li>
            <li>
              <h5>Brokerage & Trading</h5>
              <p>SunGard, SEI Wealth Platform, Eagle Pace, Calypso, Fidessa, SmartStream Recon</p>
            </li>
            <li>
              <h5>Buyside</h5>
              <p>Aladdin, Advent Geneva, Advent Partners, SS&C, Delta Data, EDM Stack, Digital Twins</p>
            </li>
            <li>
              <h5>Insurance</h5>
              <p>Duck Creek, Guidewire, DXC Cyberlife, Vantage, WMA</p>
            </li>         
            </ul>     
      </div>
    </div>
  </section>


  <section className="bsi-number-frame">
      <div className="container">
          <div className="bsi-number-frame-middle">
            <ul>
              <li>
                <h5>  2,000+ </h5>
                <h6>customer engagements</h6>
              </li>
              <li>
                <h5>  40+ </h5>
                <h6>years of collective industry experience</h6>
              </li>
              <li>
                <h5>  <span>Access to</span> 100s </h5>
                <h6>of SMEs across core BFSI domains</h6>
              </li>
              <li>
               
                <h6>Proven transformation success across operations and technology</h6>
              </li>
            </ul>
          </div>
      </div>
  </section>


  <section className="last-content-main">
<div className="container">
   <div className="last-content-main-middle">
    <h5>From legacy systems to next-gen platforms, Intelli enables BFSI enterprises to evolve faster, <br/>operate smarter, and grow stronger.</h5>
   </div>
</div>
  </section>
  
<section className="foot-top-sectto">

     <div className="container">
   <div className="footer-top-heading-n-b">
         <h3><span>LET'S REDEFINE</span> THE FUTURE OF FINANCIAL SERVICES</h3>
         <p>Partner with Intelli Platforms to accelerate your transformation, unlock operational excellence, and lead the next era of BFSI innovation.</p>
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
