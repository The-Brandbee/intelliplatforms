import React from "react";
import "react-multi-carousel/lib/styles.css"; 
import ENTERPRISESR from "../img/Acceleration-Image@2x.png";   
import ENTERPRISESRTwo from "../img/shutterstock_1791523073@2x.png"; 
import ENTERPRISESRThree from "../img/Image-1@2x.png"; 
import ENTERPRISESRFour from "../img/shutterstock_1743349121@2x.png"; 
import ENTERPRISESRFive from "../img/authentic-small-youthful-marketing-agency@2x.png"; 
import ENTERPRISESRSix from "../img/shutterstock_2364131573@2x.png"; 

import OptimizerSix from "../img/Group 373.svg";  
import OptimizerFive from "../img/Group 371.svg";  
import OptimizerFour from "../img/Group 370.svg";  
import OptimizerTen from "../img/Group 381.svg";  
import OptimizerThree from "../img/Group 333.svg";  
import OptimizerTwo from "../img/Group 330.svg";  
import OptimizerOne from "../img/Group 327.svg";
import OptimizerNine from "../img/Group 379.svg"; 
import MONITORINGTL from "../img/DEEP-2.png";  
import OptimizerEight from "../img/Group 377.svg";
import OptimizerSeven from "../img/Group 375.svg";

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
        <div className="marn-middle">
          
          <div className="marn-middle-mn">
             <h5>2,000+</h5>
             <p>customer engagements</p>
          </div>
         <div className="marn-middle-mn">
             <h5>40+</h5>
             <p>years of collective industry experience</p>
          </div>
           <div className="marn-middle-mn">
             <h5>2,000+</h5>
             <p>customer engagements</p>
          </div>
           <div className="marn-middle-mn">
             <h5>2,000+</h5>
             <p>customer engagements</p>
          </div>

        </div>
      </Marquee>
    </>
  );
}
