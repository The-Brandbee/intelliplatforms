import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import HubSpotFormpopup from "../common/HubSpotFormpopup.js";

import Logo from "../img/white-logo.png";
function IndexPage() {
  return (
    <footer>
        <div className="container">
          <div className="footer-top-main">
            <div className="footer-top">
                <div className="footer-left">
                    <h3>Sign up for <span>email updates</span></h3>
                    <p>We align with your goals to deliver measurable, business-driven outcomes.</p>
                   
                    <HubSpotFormpopup/>
                      {/* <Image src={Logo} alt="" />*/}
                </div>
                 <div className="footer-right">
                    <Image src={Logo} alt="" />
                   <ul>
                      <li>
                        <Link href="/privacy-policy">Privacy Policy</Link>
                      </li>
                      <li>
                        <Link href="/terms-and-conditions">Terms and Conditions</Link>
                      </li>
                      <li>
                        <Link href="/terms-of-use">Terms of Use</Link>
                      </li>
                      <li>
                        <Link href="/data-security">Data Security</Link>
                      </li>
                      
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
               <p>Intelli Platforms</p>
               <p>All Right Reserved | 2025</p>
            </div>
        </div>
        </div>
    </footer> 
  );
}

export default IndexPage;
