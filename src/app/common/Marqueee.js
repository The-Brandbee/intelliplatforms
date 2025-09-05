import React from "react";
import "react-multi-carousel/lib/styles.css"; 
import ENTERPRISESR from "../img/Acceleration-Image@2x.png";   
import ENTERPRISESRTwo from "../img/shutterstock_1791523073@2x.png"; 
import ENTERPRISESRThree from "../img/Image-1@2x.png"; 
import ENTERPRISESRFour from "../img/shutterstock_1743349121@2x.png"; 
import ENTERPRISESRFive from "../img/authentic-small-youthful-marketing-agency@2x.png"; 
import ENTERPRISESRSix from "../img/shutterstock_2364131573@2x.png"; 
import Image from "next/image";
import Head from "next/head";
import Marquee from "react-fast-marquee";

export default function TestimonialSlide() {
  return (
   <>
    <Marquee
  pauseOnHover={true}
  onMouseEnter={() => console.log("mouseenter")}
  onMouseLeave={() => console.log("mouseleave")}
  loop={10}
  speed={40}
>

    
             <div className="ENTERPRISES-main-frame-inner ">
                                      <div className="ENTERPRISES-main-frame-inner-middle ">
                                           <div className="ENTERPRISES-left ">
                                                <h4>12%</h4>
                                                <p>YOY Revenue <br/>Growth</p>
                                           </div>
                                           <div className="ENTERPRISES-right">
                                                <Image src={ENTERPRISESR} alt="" />
                                           </div>
                                      </div>
                                    
                                       <div className="ENTERPRISES-main-frame-inner-middle">
                                           <div className="ENTERPRISES-left">
                                                <h4>11+</h4>
                                                <p>Years of Delivery <br/>Excellence</p>
                                           </div>
                                           <div className="ENTERPRISES-right">
                                                <Image src={ENTERPRISESRThree} alt="" />
                                           </div>
                                      </div>
                                       <div className="ENTERPRISES-main-frame-inner-middle">
                                           <div className="ENTERPRISES-left">
                                                <h4 className="Talent-hubs">Industry<br/> focus</h4>
                                                <p>BFSI, Healthcare, Life Sciences, Technology</p>
                                           </div>
                                           <div className="ENTERPRISES-right">
                                                <Image src={ENTERPRISESRFour} alt="" />
                                           </div>
                                      </div>
                                          <div className="ENTERPRISES-main-frame-inner-middle">
                                           <div className="ENTERPRISES-left">
                                                <h4>750+</h4>
                                                <p>Certified Professionals Deployed Across Partner Ecosystems</p>
                                           </div>
                                           <div className="ENTERPRISES-right">
                                                <Image src={ENTERPRISESRFive} alt="" />
                                           </div>
                                      </div>
                                          <div className="ENTERPRISES-main-frame-inner-middle">
                                           <div className="ENTERPRISES-left">
                                                <h4 className="Talent-hubs">Talent <br/>hubs</h4>
                                                <p>United States, India, Costa Rica</p>
                                           </div>
                                           <div className="ENTERPRISES-right">
                                                <Image src={ENTERPRISESRSix} alt="" />
                                           </div>
                                      </div>
                               </div>
      
  </Marquee>
   </>
   
  );
}
