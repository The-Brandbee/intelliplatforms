import React from "react";
import "react-multi-carousel/lib/styles.css"; 
import ENTERPRISESR from "../img/Acceleration-Image.png";   
import ENTERPRISESRTwo from "../img/authentic-small-youthful-marketing-agency.png"; 
import ENTERPRISESRThree from "../img/Acceleration-Image.png"; 
import ENTERPRISESRFour from "../img/Acceleration-Image-2.png"; 
import Image from "next/image";
import Head from "next/head";
import Marquee from "react-fast-marquee";

export default function TestimonialSlide() {
  return (
   <>
     <Marquee pauseOnHover={false} loop="10"  speed="40" direction="left">
    
             <div className="ENTERPRISES-main-frame-inner ">
                                      <div className="ENTERPRISES-main-frame-inner-middle ">
                                           <div className="ENTERPRISES-left ">
                                                <h4>12%</h4>
                                                <p>YOY Revenue Growth</p>
                                           </div>
                                           <div className="ENTERPRISES-right">
                                                <Image src={ENTERPRISESR} alt="" />
                                           </div>
                                      </div>
                                       <div className="ENTERPRISES-main-frame-inner-middle">
                                           <div className="ENTERPRISES-left">
                                                <h4>750%</h4>
                                                <p>Certified Professionals <br/>Deployed across <br/> Partner Ecosystem</p>
                                           </div>
                                           <div className="ENTERPRISES-right">
                                                <Image src={ENTERPRISESRTwo} alt="" />
                                           </div>
                                      </div>
                                       <div className="ENTERPRISES-main-frame-inner-middle">
                                           <div className="ENTERPRISES-left">
                                                <h4>11%</h4>
                                                <p>Years of Delivery <br/>Excellence</p>
                                           </div>
                                           <div className="ENTERPRISES-right">
                                                <Image src={ENTERPRISESRThree} alt="" />
                                           </div>
                                      </div>
                                       <div className="ENTERPRISES-main-frame-inner-middle">
                                           <div className="ENTERPRISES-left">
                                                <h4>37%</h4>
                                                <p>CAGR for Last <br/>3 Years</p>
                                           </div>
                                           <div className="ENTERPRISES-right">
                                                <Image src={ENTERPRISESRFour} alt="" />
                                           </div>
                                      </div>
                               </div>
      
  </Marquee>
   </>
   
  );
}
