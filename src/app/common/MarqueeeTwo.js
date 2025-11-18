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
import OptimizerFour from "../img/synthetic-vindicator.png";  
import OptimizerTen from "../img/ingest-opt-transaction-tracker.png";  
import OptimizerThree from "../img/Group 333.svg";  
import OptimizerTwo from "../img/Group 330.svg";  
import OptimizerOne from "../img/Group 327.svg";
import OptimizerNine from "../img/Group 379.svg"; 
import OptimizerTenNN from "../img/ingest-opt-n.png";  
import OptimizerEight from "../img/Group 377.svg";
import OptimizerSeven from "../img/Remediator.png";

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
        <div className="ingest_optomize_row">
          
          <div className="ingest_optomize_columns">
            <div className="ingest_optomize_one_grad_box">
              <h6>Ingest Optimizer Scheduler</h6>
              <div className="ingest_optomize_one_grad_box_inner">
                <div className="ingest_optomize_one_grad_box_colmuns">
                  <p>Recover up to 50% of ingest costs</p>
                </div>
                <div className="ingest_optomize_one_grad_box_colmuns ingest_optomize_one_grad_box_colmuns_img">
                  <Image src={OptimizerTen} alt="Ingest Optimizer Scheduler" />
                </div>
              </div>
            </div>
          </div>

          <div className="ingest_optomize_columns">
            <div className="ingest_optomize_two_grad_box">
              <h6>Synthetics Synthesizer</h6>
              <div className="ingest_optomize_one_grad_box_inner">
                <div className="ingest_optomize_one_grad_box_colmuns">
                  <p>Cornerstone of APM synthetic testing</p>
                </div>
                <div className="ingest_optomize_one_grad_box_colmuns ingest_optomize_one_grad_box_colmuns_img">
                  <Image src={OptimizerTwo} alt="Synthetics Synthesizer" />
                </div>
              </div>
            </div>
          </div>

          <div className="ingest_optomize_columns">
            <div className="ingest_optomize_one_grad_box">
              <h6>Forensic Fingerprint</h6>
              <div className="ingest_optomize_one_grad_box_inner">
                <div className="ingest_optomize_one_grad_box_colmuns">
                  <p>Align external events to performance timelines</p>
                </div>
                <div className="ingest_optomize_one_grad_box_colmuns ingest_optomize_one_grad_box_colmuns_img">
                  <Image src={OptimizerThree} alt="Forensic Fingerprint" />
                </div>
              </div>
            </div>
          </div>

          <div className="ingest_optomize_columns">
            <div className="ingest_optomize_two_grad_box">
              <h6>Synthetics Vindicator</h6>
              <div className="ingest_optomize_one_grad_box_inner">
                <div className="ingest_optomize_one_grad_box_colmuns">
                  <p>Validate synthetic failures to prevent false positives</p>
                </div>
                <div className="ingest_optomize_one_grad_box_colmuns ingest_optomize_one_grad_box_colmuns_img">
                  <Image src={OptimizerFour} alt="Synthetics Vindicator" />
                </div>
              </div>
            </div>
          </div>

          <div className="ingest_optomize_columns">
            <div className="ingest_optomize_one_grad_box">
              <h6>Trace Toggle</h6>
              <div className="ingest_optomize_one_grad_box_inner">
                <div className="ingest_optomize_one_grad_box_colmuns">
                  <p>Toggle distributed tracking on/off to reduce overhead</p>
                </div>
                <div className="ingest_optomize_one_grad_box_colmuns ingest_optomize_one_grad_box_colmuns_img">
                  <Image src={OptimizerFive} alt="Trace Toggle" />
                </div>
              </div>
            </div>
          </div>

          <div className="ingest_optomize_columns">
            <div className="ingest_optomize_two_grad_box">
              <h6>User Optimizer</h6>
              <div className="ingest_optomize_one_grad_box_inner">
                <div className="ingest_optomize_one_grad_box_colmuns">
                  <p>Reallocate underused licenses automatically</p>
                </div>
                <div className="ingest_optomize_one_grad_box_colmuns ingest_optomize_one_grad_box_colmuns_img">
                  <Image src={OptimizerSix} alt="User Optimizer" />
                </div>
              </div>
            </div>
          </div>

          <div className="ingest_optomize_columns">
            <div className="ingest_optomize_one_grad_box">
              <h6>Remediator</h6>
              <div className="ingest_optomize_one_grad_box_inner">
                <div className="ingest_optomize_one_grad_box_colmuns">
                  <p>Automate resolution of recurring issues before escalation</p>
                </div>
                <div className="ingest_optomize_one_grad_box_colmuns ingest_optomize_one_grad_box_colmuns_img">
                  <Image src={OptimizerSeven} alt="Remediator" />
                </div>
              </div>
            </div>
          </div>

          <div className="ingest_optomize_columns">
            <div className="ingest_optomize_two_grad_box">
              <h6>Service Layer Analyzer</h6>
              <div className="ingest_optomize_one_grad_box_inner">
                <div className="ingest_optomize_one_grad_box_colmuns">
                  <p>Isolate and triangulate issues across services</p>
                </div>
                <div className="ingest_optomize_one_grad_box_colmuns ingest_optomize_one_grad_box_colmuns_img">
                  <Image src={OptimizerEight} alt="Service Layer Analyzer" />
                </div>
              </div>
            </div>
          </div>

          <div className="ingest_optomize_columns">
            <div className="ingest_optomize_one_grad_box">
              <h6>Infrastructure Four Free</h6>
              <div className="ingest_optomize_one_grad_box_inner">
                <div className="ingest_optomize_one_grad_box_colmuns">
                  <p>Baseline monitoring at no cost, where vendors charge</p>
                </div>
                <div className="ingest_optomize_one_grad_box_colmuns ingest_optomize_one_grad_box_colmuns_img">
                  <Image src={OptimizerNine} alt="Infrastructure 4 Free" />
                </div>
              </div>
            </div>
          </div>

          <div className="ingest_optomize_columns">
            <div className="ingest_optomize_two_grad_box">
              <h6>Transaction Tracker</h6>
              <div className="ingest_optomize_one_grad_box_inner">
                <div className="ingest_optomize_one_grad_box_colmuns">
                  <p>Detailed ingest analysis for transaction-level insights</p>
                </div>
                <div className="ingest_optomize_one_grad_box_colmuns ingest_optomize_one_grad_box_colmuns_img">
                  <Image src={OptimizerTenNN} alt="Transaction Tracker" />
                </div>
              </div>
            </div>
          </div>

        </div>
      </Marquee>
    </>
  );
}
