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
              <Link href="/about-us">About</Link>
               <Link href="#">Solutions
                <ul>
                  <li>
                    <a href="/solutions">Network Engineering and Cloud Operation</a>
                  </li>
                   <li>
                    <a href="#">Our Observability</a> 
                  </li>
                </ul>
               </Link>
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
