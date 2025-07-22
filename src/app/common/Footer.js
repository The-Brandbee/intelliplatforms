import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";

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
                    <form>
                      <input type="text" placeholder="Email" className="text-from"/>
                    </form>
                     <Image src={Logo} alt="" />
                </div>
                 <div className="footer-right">
                    <ul>
                      <li>
                        <Link href="#">Contact Us</Link>
                      </li>
                      <li>
                        <Link href="#">Customised Solutions</Link>
                      </li>
                      <li>
                        <Link href="#">Partner</Link>
                      </li>
                      <li>
                        <Link href="#">About Us</Link>
                      </li>
                      <li>
                        <Link href="#">Resources</Link>
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
