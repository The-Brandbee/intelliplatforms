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
   <h1>Terms and Conditions</h1>
   <p>
    These Terms and Conditions ("Terms") govern your access to and use of the NewRelicToolbox.com Software as a Service (SaaS) platform (the "Service"), which is owned and operated by Intelli Platforms Inc. ("Intelli Platforms," "we," "us," or "our").
    </p>
    <p>By clicking "I Agree," or by accessing or using the Service, you agree to be bound by these Terms. If you do not agree to these Terms, do not use the Service.</p>
  </div>
    

         </div>
              
            </div>
            <div className="faq-main-secton-bottom">
        <div className="container">
             <div className="faq-main-secton-bottom-middle">
               <h4>1. The Service</h4>
               <p>1.1 Description of Service. The Service provides a suite of individual integrated management tools ("Tools") accessible via the domain newrelictoolbox.com. These Tools are designed to assist in the configuration and management of customer's New Relic tenant’s (instance) monitoring and/or administrative configurations.</p>
               <p>1.2 Customer Data and API Keys. To use the Tools, Customer must provide a valid New Relic API key or token ("API Key"). Customer acknowledges and agrees that by providing an API Key, Customer grants the Service permission to access, modify, and manage Customer's New Relic account configurations solely for the purpose of operating the Tools as requested by the Customer.</p>
               <p>1.3 No Guarantee of Outcome. While the Service is designed to assist in configuration, Intelli Platforms      does not guarantee any specific business, technical, or operational outcome from the use of the Tools.</p>
               <h4>2. Customer Responsibilities and Acknowledgments</h4>
               <p>2.1 Accuracy of Data. The Customer is solely responsible for the accuracy, completeness, and correctness of all data, input, and configuration settings provided to the Service when using the Tools.</p>
               <p>2.2 Responsibility for Configurations. Customer acknowledges and accepts that the Tools execute direct configuration changes to Customer's New Relic environment. Customer is solely responsible for all changes, configurations, and actions taken within their New Relic account as a result of using the Service, including any adverse effects, data loss, or service interruption.</p>
               <p>2.3 Revertible Actions. While the Service strives to ensure that Tools and their configuration changes can be easily reverted or deactivated, Intelli Platforms      does not guarantee that every change is perfectly reversible in all circumstances. It is the Customer's sole responsibility to verify the success of any action and its subsequent reversion within their New Relic account.</p>
               <p>2.4 Security of API Key. The Customer is responsible for maintaining the security and confidentiality of the provided API Key and for all activities that occur under its use.</p>
               <h4>3. Subscription and Payment</h4>
               <p>3.1 Subscription. Access to the Service is provided on a subscription basis for the term specified during the ordering process (the "Subscription Term").</p>
               <p>3.2 Billing and Payments. Customer agrees to pay all fees associated with the Subscription Term ("Subscription Fees") as described on the NewRelicToolbox.com website or in a separate agreement. All payments are due in advance.</p>
               <p>3.3 Auto-Renewal. Unless otherwise specified, the Subscription Term will automatically renew for successive periods equal to the initial Subscription Term unless either party gives the other written notice of non-renewal at least thirty (30) days before the end of the current term.</p>
               <p>3.4 Fee Changes. Intelli Platforms      reserves the right to change the Subscription Fees upon thirty (30) days prior notice, provided that such change will only take effect at the beginning of the next Subscription Term.</p>
               <h4>4. Term and Termination</h4>
               <p>4.1 Term. These Terms begin on the date you first use the Service and continue until all Subscription Terms have expired or until terminated by either party as permitted herein.</p>
               <p>4.2 Termination by Customer. Customer may terminate their Subscription by providing written notice of non-renewal in accordance with Section 3.3. Customer will not be entitled to a refund of any prepaid Subscription Fees upon termination.</p>
               <p>4.3 Termination by Intelli Platforms      We may terminate your access to the Service immediately and without notice if you breach any material provision of these Terms.</p>
               <p>4.4 Effect of Termination. Upon termination, your right to use the Service will immediately cease. We will delete or return Customer Data, including the stored API Key, in accordance with our Privacy Policy and standard operating procedures.</p>
               <p>4.5 Survival: The provisions relating to ownership, restrictions, indemnity, warranties and disclaimers, limitation of liability, and governing law shall survive the termination or expiration of this Agreement.</p>
               <h4>5. Intellectual Property Rights</h4>
               <p>5.1 Ownership. All rights, title, and interest in and to the Service, the Tools, the website, and all related software, technology, documentation, and intellectual property (collectively, the “Intelli IP”) are and shall remain the exclusive property of Intelli Platforms and its licensors.</p>
               <p>5.2 Limited License. Subject to these Terms, Intelli Platforms grants the Customer a limited, non-exclusive, non-transferable, and revocable right to access and use the Service during the applicable Subscription Term. No other rights are granted, whether by implication, estoppel, or otherwise.</p>
               <p>5.3 Restrictions. Customer shall not, and shall not permit any third party to: (i) copy, modify, adapt, translate, or create derivative works based on the Service or any portion thereof; (ii) reverse engineer, decompile, disassemble, or otherwise attempt to derive the source code of the Service; (iii) use the Service to develop or offer a competing product or service; (iv) remove, alter, or obscure any proprietary notices or labels on or within the Service; (v) use the Service in violation of any applicable law or regulation; or (vi) access or use the Service in any manner not expressly permitted under these Terms.</p>
               <h4>6. Confidentiality</h4>
               <p>6.1 Definition. “Confidential Information” means all non-public information disclosed by one party (“Disclosing Party”) to the other (“Receiving Party”), whether oral or written, that is designated as confidential or that should reasonably be understood to be confidential given its nature and the circumstances of disclosure. Confidential Information includes, without limitation, business plans, technology, trade secrets, API keys, data, and customer information.</p>
               <p>6.2 Obligations. The Receiving Party shall (a) protect the Confidential Information of the Disclosing Party using the same degree of care it uses to protect its own confidential information (but no less than reasonable care), (b) not use the Confidential Information except as necessary to perform its obligations or exercise its rights under these Terms, and (c) not disclose the Confidential Information to any third party without prior written consent.</p>
               <p>6.3 Exclusions. Confidential Information does not include information that (i) is or becomes publicly available through no fault of the Receiving Party, (ii) was rightfully known to the Receiving Party prior to disclosure, (iii) is independently developed without use of or reference to the Disclosing Party’s Confidential Information, or (iv) is lawfully received from a third party without restriction.</p>
               <p>6.4 Compelled Disclosure. The Receiving Party may disclose Confidential Information to the extent required by law or court order, provided it gives the Disclosing Party prompt written notice and cooperates in seeking protective measures.</p>
               <p>6.5 Survival. The obligations under this Section shall survive termination of these Terms for three (3) years.</p>
<h4>7. Customer Data and Privacy</h4>
<p>7.1 Ownership. Customer retains all rights, title, and interest in and to any data, content, or configurations provided or generated by Customer through the Service (“Customer Data”). Intelli Platforms does not claim ownership of Customer Data.</p>
<p>7.2 Use of Data. Intelli Platforms may process, store, and transmit Customer Data solely to provide and improve the Service. Intelli Platforms may also use aggregated and anonymized data for analytics, benchmarking, and enhancement of the Service, provided that such data cannot identify the Customer or its users.</p>
<p>7.3 Privacy. Processing of Customer Data shall be conducted in accordance with Intelli Platforms’ Privacy Policy and all applicable data protection laws.</p>
<h4>8. Indemnification</h4>
<p>8.1 By Customer. Customer shall indemnify, defend, and hold harmless Intelli Platforms, its officers, directors, employees, and affiliates from and against any claims, damages, liabilities, or expenses (including reasonable attorneys’ fees) arising out of or related to (i) Customer’s use or misuse of the Service, (ii) configuration changes or actions executed through the Tools using Customer’s API Key, or (iii) Customer’s violation of applicable laws or third-party rights.</p>
<p>8.2 Procedure. Intelli Platforms shall promptly notify Customer of any claim subject to indemnification, provide reasonable cooperation at Customer’s expense, and allow Customer sole control over the defense and settlement of the claim, provided such settlement releases Intelli Platforms of all liability.</p>
<h4>9. Service Availability</h4>
<p>9.1 Service Levels. Intelli Platforms shall use commercially reasonable efforts to make the Service available on a continuous basis, excluding scheduled maintenance or events beyond its reasonable control.</p>
<p>9.2 Maintenance Notices. Intelli Platforms will provide notice of any planned maintenance or downtime that may materially affect availability.</p>
<h4>10. Compliance</h4>
<p>10.1 Compliance. Each party shall comply with all applicable laws, rules, and regulations in connection with its activities under these Terms.</p>
<h4>11. Dispute Resolution and Venue</h4>
<p>11.1 Governing Law and Venue. These Terms shall be governed by and construed in accordance with the laws of the State of New Jersey, without regard to its conflict of law principles.</p>
<p>11.2 Dispute Resolution. Any dispute arising out of or relating to these Terms shall be resolved through good-faith negotiation between the parties. If the dispute cannot be resolved within thirty (30) days, it shall be submitted to binding arbitration under the rules of the American Arbitration Association, to be conducted in Middlesex County, New Jersey.</p>
<p>11.3 Injunctive Relief. Either party may seek temporary or permanent injunctive relief in a court of competent jurisdiction in the State of New Jersey to protect its intellectual property or Confidential Information.</p>
<h4>12. Force Majeure</h4>
<p>Neither party shall be liable for any failure or delay in performing its obligations under these Terms (except for payment obligations) due to causes beyond its reasonable control, including but not limited to natural disasters, acts of government, war, terrorism, labor disputes, internet outages, or failure of third-party hosting providers. The affected party shall promptly notify the other and use reasonable efforts to resume performance.</p>
<h4>13. Assignment</h4>
<p>Customer may not assign, delegate, or transfer these Terms, in whole or in part, without Intelli Platforms’ prior written consent. Intelli Platforms may assign or transfer these Terms without restriction, including in connection with a merger, acquisition, or sale of assets. Any attempted assignment in violation of this Section shall be void.</p>
<h4>14. Publicity</h4>
<p>Customer agrees that Intelli Platforms may reference Customer’s name, trade name, and logo as a user of the Service in its marketing materials and on its website. Customer may revoke such consent at any time by written notice to Intelli Platforms.</p>
<h4>15. Disclaimers and Limitation of Liability</h4>
<p>15.1 Disclaimer of Warranties. THE SERVICE IS PROVIDED “AS AVAILABLE” and "AS IS," WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. INTELLI PLATFORMS DOES NOT WARRANT THAT THE SERVICE WILL BE UNINTERRUPTED, ERROR-FREE, OR COMPLETELY SECURE.</p> 
<p>15.2 Limitation of Liability. TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL INTELLI PLATFORMS OR ITS SUPPLIERS BE LIABLE FOR ANY INDIRECT, PUNITIVE, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR EXEMPLARY DAMAGES, INCLUDING WITHOUT LIMITATION DAMAGES FOR LOSS OF PROFITS, GOODWILL, USE, DATA, OR OTHER INTANGIBLE LOSSES, THAT RESULT FROM THE USE OF, OR INABILITY TO USE, THE SERVICE, INCLUDING ANY DAMAGE, DATA LOSS, OR SERVICE INTERRUPTION CAUSED TO CUSTOMER'S NEW RELIC ACCOUNT, EVEN IF INTELLI PLATFORMS      HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.</p>
<p>15.3 Cap on Liability. IN NO EVENT SHALL INTELLI PLATFORMS’ TOTAL AGGREGATE LIABILITY UNDER THESE TERMS EXCEED THE TOTAL SUBSCRIPTION FEES PAID BY THE CUSTOMER TO INTELLI PLATFORMS DURING THE TWELVE (12) MONTHS IMMEDIATELY PRECEDING THE EVENT GIVING RISE TO THE CLAIM.</p>           
<h4>16. General Provisions</h4>
<p>16.1 Severability. If any provision of this Agreement shall be adjudged by any court of competent jurisdiction to be unenforceable or invalid, that provision shall be limited to the minimum extent necessary so that this Agreement shall otherwise remain in effect .</p>
<p>16.2 Entire Agreement. These Terms constitute the entire agreement between you and Intelli Platforms      concerning your use of the Service.</p>
<p>16.3 Changes to Terms. We reserve the right to modify these Terms at any time. We will provide notice of any material changes by posting the updated Terms on the website. Your continued use of the Service after such changes constitutes your acceptance of the new Terms.</p>
<p>16.4 Notices. Any notice required or permitted under these Terms shall be in writing and shall be deemed given upon receipt if sent by certified or registered mail, return receipt requested.</p>
    
 </div>
         </div>
         </div>
        </section>

        <Footer />                
      </main>          
    </div>
  );
}
