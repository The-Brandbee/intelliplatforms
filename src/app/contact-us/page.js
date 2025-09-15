"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import Header from "../common/Header.js";
import HeaderMobileIn from "../common/HeaderMobile.js";


import Footer from "../common/Footer.js";

import "bootstrap/dist/css/bootstrap.min.css";
import { Montserrat } from "next/font/google";
import Script from "next/script";





export default function Arfactoring() {
  return (
    <div className="inner-page-main">       
             
              
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
       

        <section className="blog-page-inner-section-content">
            <div className="faq-main-secton">
                <div className="container">
            
 <section className="contact-us-page-middle">
  <div className="container">
    <div className="contact-us-page-middle-middle">
      <div className="contact-us-page-middle-middle-left">
        <h4>
         Let's Start the Conversation

        </h4>
        <p>
         Connect with Intelli Platforms to explore solutions, request a consultation, or discuss how we can support your business goals.
        </p>
      </div>
      <div className="contact-us-page-middle-middle-right">
        <h4>Powered By Intelligence Get</h4>
        <p>All fields are required*</p>
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
            name="name"
          />
          <span style={{ color: "red" }} />
        </div>
      </div>
      <div className="col-md-6">
        <div className="form-group">
          <input
            type="text"
            id="phone"
            placeholder="Contact Number *"
            className="big-input form-control"
            name="phone"
          />
          <span style={{ color: "red" }} />
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-md-6">
        <div className="form-group">
          <input
            type="text"
            id="email"
            placeholder="Email Address *"
            className="big-input form-control"
            name="email"
          />
          <span style={{ color: "red" }} />
        </div>
      </div>
      <div className="col-md-6">
        <div className="form-group">
          <input
            type="text"
            id="company"
            placeholder="Company *"
            className="big-input form-control"
            name="company"
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
            placeholder="subject *"
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
            placeholder="Message"
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
      Submit
    </button>
  </form>
</div>

        </div>
        <p className="After-submitting nonenone">
          *After submitting this form, you will be redirected to complete the
          remaining <br />
          steps of your application.
        </p>
      </div>
    </div>
  </div>
</section>

         </div>
              
            </div>
            
        </section>

        <Footer />                
      </main>          
    </div>
  );
}
