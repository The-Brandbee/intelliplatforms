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
            
  <div className="faq-main-secton-heading">
   <h1>Our Commitment to Security</h1>
   <p>At Intelli Platforms, the security of the data entrusted to us by our clients, partners, and candidates is a top priority. We understand that data is a critical asset, and we are dedicated to implementing and maintaining robust security measures to protect its confidentiality, integrity, and availability. This statement outlines our approach to data security across our technology project services and staff augmentation solutions.</p>
  </div>
    

         </div>
              
            </div>
            <div className="faq-main-secton-bottom">
        <div className="container">
             <div className="faq-main-secton-bottom-middle">
                <h4>Security Measures</h4>
 



<p>We employ a multi-layered security strategy that includes administrative, technical, and physical safeguards designed to protect against unauthorized access, use, disclosure, alteration, or destruction of information.</p>
<ul>
<li><strong>Technical Safeguards:</strong></li>
<ul>
<li><strong>Access Control:</strong> We enforce strict access controls, ensuring that access to sensitive data and systems is granted on a "need-to-know" and "least privilege" basis.</li>
<li><strong>Encryption:</strong> Data is encrypted both in transit (using protocols like TLS) and at rest (using industry-standard encryption algorithms) to protect it from interception or unauthorized viewing.</li>
<li><strong>Network Security:</strong> We utilize firewalls, intrusion detection systems (IDS), and other network security tools to monitor and protect our network from external threats.</li>
<li><strong>Vulnerability Management:</strong> We conduct regular security assessments and vulnerability scanning to proactively identify and remediate potential security weaknesses in our systems.</li>
</ul>
<li><strong>Administrative Safeguards:</strong></li>
<ul>
<li><strong>Security Policies:</strong> We maintain a comprehensive set of internal security policies and procedures that all employees and contractors are required to follow.</li>
<li><strong>Employee Training:</strong> All personnel undergo regular security awareness training to ensure they understand their role in protecting data and are aware of current threats, such as phishing and social engineering.</li>
<li><strong>Background Checks:</strong> We conduct thorough background checks on all employees and consultants in accordance with applicable laws and regulations.</li>
</ul>
<li><strong>Physical Safeguards:</strong></li>
<ul>
<li>We utilize secure data centers that have robust physical security controls, including 24/7 monitoring, biometric access controls, and environmental protections.</li>
<li>Access to our physical offices and sensitive areas is restricted and monitored.</li>
</ul>
</ul>

<h4>Client Data &amp; Project Security</h4>
<p>For our project-based work, we ensure that client data is logically segregated and protected throughout the project lifecycle. We work closely with our clients to understand their specific security and compliance requirements and incorporate them into our development and operational processes. All confidential information and intellectual property shared with us are protected under strict Non-Disclosure Agreements (NDAs).</p>

<h4>Personnel &amp; Staff Augmentation Security</h4>
<p>For our staff augmentation services, we recognize our responsibility in placing trusted professionals within our clients' organizations. Our recruitment process includes vetting candidates for their technical skills and professional integrity. All augmented staff are bound by confidentiality obligations to protect the sensitive information of the clients they serve.</p>

<h4>Incident Response</h4>
<p>In the event of a security incident, we have a documented Incident Response Plan designed to promptly contain, investigate, and remediate the issue. Our plan includes clear procedures for notifying affected parties and regulatory bodies as required by law.</p>

<h4>Disclaimer</h4>
<p>While Intelli Platforms takes extensive measures to secure your data, no method of transmission over the Internet or method of electronic storage is 100% secure. Therefore, while we strive to use commercially acceptable means to protect your information, we cannot guarantee its absolute security.</p>

<h4>Contact Us</h4>
<p>If you have any questions or concerns about our data security practices, please contact us at:</p>

<h4>Intelli Platforms</h4>
<p>196 PrincetonHightstown Rd Bldg 1B Ste#5<br/>
West Windsor Twp, West Windsor Township, NJ 08550, USA<br/>   
Email: <a href="mailto:legal@intelliplatforms.com">legal@intelliplatforms.com</a></p>




             </div>

    

         </div>
         </div>
        </section>

        <Footer />                
      </main>          
    </div>
  );
}
