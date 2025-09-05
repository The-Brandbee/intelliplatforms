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
import Teamone from "../img/Group 277@2x.png";  
import TeamTwo from "../img/Group 282.png";  
import TeamThree from "../img/Group 281.png";  
import TeamFour from "../img/Group 279.png";  
import TeamFive from "../img/Khushal.png";  
import TeamSix from "../img/Group 284.png";  
import STANDFOR from "../img/shutterstock_2281049609.png";  
import boyNT from "../img/inteli_second_large_slept.png";  
import boyN from "../img/shutterstock_1419431318@2x.png";  
import Banner from "../img/about-us-banner.png";  
import CustomerOnneTfoy from "../img/built-new-43.png";
export default function Home() {
  return (
    <div className="about-us-main-page">     
            
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
           ENGINEERING RESILIENT 
          </h1>
          <h1 className="intelli_seconf_banner_second_head">
           DIGITAL FUTURES
          </h1>
          <p className="intelli_seconf_banner_first_para">
          Global expertise in network engineering, cloud operations, and observability services.
          </p>
        </div>
        <div className="home-banner-middle-middle-botto-heading">
          <h3 className="intelli_second_banner_last_head">
            ABOUT <span>INTELLI <br/>PLATFORMS</span>
          </h3>
          <p className="intelli_second_banner_last_para">
          Intelli Platforms is a global managed IT services provider with over nine years of de excellence. With 200+ certified engineers across the U.S., India, and Costa Rica, we help enterprises modernize their infrastructure, optimize cloud operations, and unlock observability at scale. Our proprietary Accelerator Toolbox and industry expertise ensure solutions that are cost-effective, scalable, and built for the future.
          </p>
        </div>
      </div>
    </div>
  </section>
  
  <section className="what-defines-our-culture inteli_second_border_cut_sec">
    <div className="container">
      <div className="defines-po-img">
        <Image src={bordercut} alt="" />
      </div>
      <div className="what_we_bring_the_table_sec">
        <div className="what_we_bring_the_table_container">
          <div className="what_we_bring_the_table_row">
            <div className="what_we_bring_the_table_half_column">
              <div className="what_we_bring_the_table_box">
                <h3>
                  WHAT WE BRING TO <br />
                  <span>THE TABLE</span>
                </h3>
                <p>
  <b style={{ color: "#012638", fontFamily: "HelveticaNeueBold" }}>
    Our promise: </b> straightforward, strategic solutions that make technology work for your
  business.
</p>
              </div>
            </div>
            <div className="what_we_bring_30_col">
              <div className="deep_expriene_boxes">
                <h6>
                  Deep experience in networking, observability, and
                  infrastructure design
                </h6>
              </div>
            </div>
            <div className="what_we_bring_30_col">
              <div className="wghat_we_brinf_height_img_box">
                 <Image src={boyN} alt="" />
              </div>
            </div>
          </div>
          <div className="what_we_bring_the_table_row2">
            <div className="what_we_bring_the_table_second_30_col">
              <div className="deep_expriene_boxes">
                <h6>
                  Clear guidance on technology selection and vendor alignment
                </h6>
              </div>
            </div>
            <div className="what_we_bring_the_table_second_40_col">
              <div className="deep_expriene_boxes_imgs">
               <Image src={boyNT} alt="" />
              </div>
            </div>
            <div className="what_we_bring_the_table_second_30_col">
              <div className="deep_expriene_boxes">
                <h6>
                  A client-first approach foucsed on ROI, Efficiency, and scale
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  </section>


<div className="middle-background">
  {/* what we stand for sec */}
  <section className="intelli_what_we_stand_for_sec">
    <div className="container">
      <div className="intelli_what_we_stand_for_row">
        <div className="intelli_what_we_stand_for_left_column">
          <div className="intelli_what_we_stand_for_left_img_box">
             <Image src={STANDFOR} alt="" />
          </div>
        </div>
        <div className="intelli_what_we_stand_for_right_column">
          <div className="intelli_what_we_stand_for_right_column_main">
            <div className="intelli_what_we_stand_for_right_column_box1">
              <div className="intelli_what_we_stand_for_right_head_box">
                <h2>
                  <span>WHAT</span> WE STAND FOR
                </h2>
              </div>
              <div className="intelli_what_we_stand_for_right_cont_box">
                <p>
                  We’re more than a service provider; we’re a strategic partner.
                  Our work is anchored in a strong set of values that guide
                  everything we do:
                </p>
              </div>
            </div>
            <div className="intelli_what_we_stand_for_right_column_box2">
              <div className="project_based_servies_colums">
                <div className="project_based_servies_box">
                  <h6>Project-Based Services</h6>
                  <p>
                    Applying emerging tech to real-world business challenges
                  </p>
                </div>
              </div>
              <div className="project_based_servies_colums">
                <div className="project_based_servies_box">
                  <h6>Excellence</h6>
                  <p>Delivering high-impact outcomes with precision</p>
                </div>
              </div>
              <div className="project_based_servies_colums">
                <div className="project_based_servies_box">
                  <h6>Engagement</h6>
                  <p>Building trusted, collaborative relationships</p>
                </div>
              </div>
            </div>
            <div className="intelli_what_we_stand_for_right_column_box3">
              <div className="project_based_servies_colums">
                <div className="project_based_servies_box">
                  <h6>Respect</h6>
                  <p>Fostering inclusion, transparency, and integrity</p>
                </div>
              </div>
              <div className="project_based_servies_colums">
                <div className="project_based_servies_box">
                  <h6>Social Responsibility</h6>
                  <p>Making a meaningful impact on communities</p>
                </div>
              </div>
            </div>
            <div className="intelli_what_we_stand_for_right_column_box4">
              <div className="our_sucess_columns">
                <p>
                  Our success is powered by Customer Centricity, Employee
                  Resilience, and Operational Excellence, pillars that shape our
                  delivery philosophy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section className="intelli_leader_team_section">
  <div className="container">
    <div className="row intelli_leader_head_row">
      <div className="intelli_leader_head_col">
        <h2>
          LEADERSHIP <span>TEAM</span>{" "}
        </h2>
        <p>
          Our leadership team combines vision, industry insight, and execution
          experience to deliver enterprise-grade results at scale.
        </p>
      </div>
    </div>
    <div className="intelli_leader_team_row">
      {/* Team Member 1 (Upper) */}
      <div className="intelli_leader_team_col intelli_leader_team_upper">
        <Image src={Teamone} alt="" />
        <div className="intelli_leader_team_info">
          <p className="intelli_leader_team_name">Rahul Bajaj</p>
          <p className="intelli_leader_team_designation">Chief Advisor</p>
        </div>
      </div>
      {/* Team Member 2 (Bottom) */}
      <div className="intelli_leader_team_col intelli_leader_team_bottom">
        <Image src={TeamTwo} alt="" />
        <div className="intelli_leader_team_info">
          <p className="intelli_leader_team_name">Venkata Dhaniyala</p>
          <p className="intelli_leader_team_designation">Chief Advisor</p>
        </div>
      </div>
      {/* Team Member 3 (Upper) */}
      <div className="intelli_leader_team_col intelli_leader_team_upper">
       <Image src={TeamThree} alt="" />
        <div className="intelli_leader_team_info">
          <p className="intelli_leader_team_name">Ross Mistretta</p>
          <p className="intelli_leader_team_designation">
            Chief Technology &amp; Delivery Officer
          </p>
        </div>
      </div>
      {/* Team Member 4 (Bottom) */}
      <div className="intelli_leader_team_col intelli_leader_team_bottom">
        <Image src={TeamFour} alt="" />
        <div className="intelli_leader_team_info">
          <p className="intelli_leader_team_name">Anirban Ghosh</p>
          <p className="intelli_leader_team_designation">
            Partner, Global Head of Growth and Strategy
          </p>
        </div>
      </div>
      {/* Team Member 5 (Upper) */}
      <div className="intelli_leader_team_col intelli_leader_team_upper">
        <Image src={TeamFive} alt="" />
        <div className="intelli_leader_team_info">
          <p className="intelli_leader_team_name">Kushal Bothra</p>
          <p className="intelli_leader_team_designation">
            Solutions Architect, Observability Business Unit
          </p>
        </div>
      </div>
      {/* Team Member 6 (Bottom) */}
      <div className="intelli_leader_team_col intelli_leader_team_bottom">
         <Image src={TeamSix} alt="" />
        <div className="intelli_leader_team_info">
          <p className="intelli_leader_team_name">Deeptanshu J. Bansal</p>
          <p className="intelli_leader_team_designation">
            Chief Marketing Officer
          </p>
        </div>
      </div>
    </div>
  </div>
</section>
</div>

<section className="foot-top-sectto">
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
