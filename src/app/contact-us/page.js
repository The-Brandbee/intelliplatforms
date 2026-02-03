"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import Header from "../common/Header.js";
import HeaderMobileIn from "../common/HeaderMobile.js";
import Marquee from "../common/MarqueeeThree.js"; 
import Footer from "../common/Footer.js";

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
import TouchTwo from "../img/splunk.png";  
import Touch from "../img/new-relic@2x.png";  
import Call from "../img/phone-call_broken.svg";  
import Email from "../img/email.svg";  
import Add from "../img/location.svg";  
import Back from "../img/bx-arrow-back.svg";  
import Banner from "../img/contact-us-banner.png";  
import CustomerOnneTfoy from "../img/built-new-43.png";
export default function Home() {
  return (
    <div className="about-us-main-page contact-us-new-page">     
            
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
           CONTACT US
          </h1>
         
         
        </div>
        <div className="home-banner-middle-middle-botto-heading">
          <h3 className="intelli_second_banner_last_head">
            We are always here to  <span>assist you! </span>
          </h3>
        
        </div>
      </div>
    </div>
  </section>
  
  <section className="blog-page-inner-section-content">
            <div className="faq-main-secton">
                <div className="container">
            
 <section className="contact-us-page-middle">
  <div className="container">
    <div className="contact-us-page-middle-middle">
      <div className="contact-us-page-middle-middle-left">
        <h4 className="contus-heading">
       GET <span>IN TOUCH</span>

        </h4>
      <ul className="contact-info">
  <li>
    <Image src={Add} alt="" />
    <div>
      <h6>Address</h6>
      <p>
        196 Princeton Hightstown Road Building 1B, Suite 5 West<br/>
        Windsor Township NJ 08550
      </p>
    </div>
  </li>

  <li>
    <Image src={Email} alt="" />
    <div>
      <h6>Email Address</h6>
      <p>
        <a href="mailto:hr@inteliplatforms.com">hr@inteliplatforms.com</a>
      </p>
    </div>
  </li>

  <li>
   <Image src={Call} alt="" />
    <div>
      <h6>Call Us</h6>
      <p>
        <a href="tel:+16099179971">+1 609-917-9971</a> /
        <a href="tel:+16099179970">+1 609-917-9970</a>
      </p>
    </div>
  </li>
</ul>

  <h4 className="contus-heading last">
       INDIA  <span>OFFICE</span>

        </h4>
      <ul className="contact-info">
  <li>
    <Image src={Add} alt="" />
    <div>
      <h6>Address</h6>
      <p>
       Plot No 34, Sai Enclave Road No 12, Banjara Hills Hyderabad<br/> 500034, Telangana INDIA
      </p>
    </div>
  </li>


</ul>

      </div>
      <div className="contact-us-page-middle-middle-right">
           <h4 className="contus-heading">CONTACT <span>FORM</span> </h4>      
        <div className="contact-us-page-middle-middle-right-main">
     
      
        <div className="contact-us-page-middle-middle-right-from">
          <div className="contact-us-middle-main-m-right-middle">
  <form
    id="project-contact-form"
    autoComplete="off"
    className="contact-us-page-main-from"
    action="#"
    method="post"
  >
    <div className="form-group">
      <div className="displayMessage" id="displayMessage" />
    </div>
    <div className="row">
      <div className="col-md-6">
        <div className="form-group">
          <input
            type="text"
            id="name"
            placeholder="Name *"
            className="big-input form-control"
            name="Your Name"
          />
          <span style={{ color: "red" }} />
        </div>
      </div>
      <div className="col-md-6">
        <div className="form-group">
          <input
            type="text"
            id="text"
            placeholder="Your Email"
            className="big-input form-control"
            name="Your Email"
          />
          <span style={{ color: "red" }} />
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-md-12">
        <div className="form-group">
          <input
            type="text"
            id="number"
            placeholder="Contact No."
            className="big-input form-control"
            name="Contact No."
          />
          <span style={{ color: "red" }} />
        </div>
      </div>
     
    </div>
    <div className="row">
      <div className="col-md-12">
        <div className="form-group">
          <input
            type="text"
            id="subject"
            placeholder="Purpose of Contact"
            className="big-input form-control"
            name="subject"
          />
          <span style={{ color: "red" }} />
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-md-12">
        <div className="form-group">
          <textarea
            name="comment"
            id="comment"
            placeholder="Your Message"
            rows={6}
            className="big-textarea form-control"
            defaultValue={""}
          />
          <span style={{ color: "red" }} />
        </div>
      </div>
    </div>
    <button
      id="project-contact-us-button"
      type="button"
      className="btn btn-default"
    >
      Send Message <Image src={Back} alt="" />
    </button>
  </form>
</div>

        </div>
       
      </div>
    </div>
    </div>
  </div>
</section>

         </div>
              
            </div>
            
        </section>
        <section className="contact-us-bottom-img-frame">
  <div className="container">
    <div className="contact-us-bottom-img-frame-middle">
      <ul>
        <li>
          <Image src={Touch} alt="" />
          <p><span>Get in touch</span>  <Image src={Email} alt="" /> <a href="mailto:newrelic@intelliplatforms.com">newrelic@intelliplatforms.com</a></p>
        </li>
        <li>
          <Image src={TouchTwo} alt="" />
          <p><span>Get in touch</span>  <Image src={Email} alt="" /> <a href="mailto:splunk@intelliplatforms.com">splunk@intelliplatforms.com</a></p>
        </li>
      </ul>
    </div>
  </div>
        </section>

<section className="foot-top-sectto">

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
