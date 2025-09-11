import { useEffect } from 'react';
import Image from "next/image";

const HubSpotForm = () => {
  useEffect(() => {
    // You can add the HubSpot form embed script here if it's JavaScript-based
    const script = document.createElement('script');
    script.src = "https://js.hsforms.net/forms/v2.js"; // This is HubSpot's form embed script
    script.async = true;
    script.onload = () => {
      if (window.hbspt) {
        window.hbspt.forms.create({
          portalId: "243837955",
          formId: "c3e1e1f8-f604-4a00-a1c3-645f61eccd74",
          target: "#hubspot-form",
        });
      } 
    };
    document.body.appendChild(script);
  }, []);

  return (
   
        <div>
        
          
            <div id="hubspot-form" className="contact-us-page-frame" />  
         </div> 
   
  );
};

export default HubSpotForm;
