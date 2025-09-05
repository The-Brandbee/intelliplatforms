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
import Teamone from "../img/Group 277@2x.png";  
import TeamTwo from "../img/Group 282.png";  
import TeamThree from "../img/Group 281.png";  
import TeamFour from "../img/Group 279.png";  
import TeamFive from "../img/Khushal.png";  
import TeamSix from "../img/Group 284.png"; 
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
      </Marquee>
    </>
  );
}
