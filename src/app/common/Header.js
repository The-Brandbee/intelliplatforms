import Head from "next/head";
import { useState } from 'react';
import Image from "next/image";
import Link from "next/link";
import Logo from "../img/logo.png";
import HeaderMobileIn from "../common/HeaderMobile.js";      

function IndexPage() {
    // State to track whether the content is visible
    const [isVisible, setIsVisible] = useState(false);

    // Function to toggle visibility
    const toggleVisibility = () => {
      setIsVisible((prev) => !prev);
    };
  
  
  return (
   
    <div className="header-top-frame_main-desktop">
       <div className="container">
      <div className="header-top-frame">
        <div className="header-left">
          <Link href="/">
                 <Image src={Logo} alt="" />
                 </Link>
        </div>
          <HeaderMobileIn />
        <div className="header-right">
            <ul>
              {/*  <Link href="#">Resources</Link>
              <Link href="#">Customised Solutions</Link>
              <Link href="#">Partner</Link> */}
              <li>
              <Link href="/about-us">About</Link>
              </li>
              <li>
              <Link href="/partners">Partners</Link>
              </li>
               <li className="relative group">
  <Link href="#">
    Solutions
  </Link>
  <ul className="absolute hidden group-hover:block">
     <li>
      <Link href="/bfsi">
       BFSI
      </Link>
    </li>
      <li>
      <Link href="/network-engineering-and-cloud-computing">
        Network Platforms 
      </Link>
    </li>
    <li>
      <a href="/observability">
        Observability
      </a>
    </li>
  </ul>
</li>
 <li>
              <Link href="/events">Events</Link>
              </li>
              <li>
              <Link href="/careers">Careers</Link>
              </li>
              <li>
              <Link href="/contact-us">Contact Us</Link>
              </li>
            </ul>
           {/* <div className="header-login-frame">
                <Link href="#">Login</Link>
            </div>*/}
        </div>
    </div>
    </div>
    </div>    
  );
}

export default IndexPage;
