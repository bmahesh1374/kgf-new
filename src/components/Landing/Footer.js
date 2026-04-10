import React from "react";
import Footerphone from "../../assets/footerphone.png";
import { IoCallSharp } from "react-icons/io5";
import { MdMarkEmailRead } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import Logo from "../../assets/Logo.png";

import playstore from "../../assets/playstore.png";
import appstore from "../../assets/applestore.png";
import "../Styles/Footer.css";

import pic1 from "../../assets/linkedin.png";
import pic2 from "../../assets/facebook.png";
import pic3 from "../../assets/twitter.png";
import pic4 from "../../assets/instagram.png";
import pic5 from "../../assets/youtube.png";

function Footer(){
  return(
    <>
    <div className="footer-section" id="contact">
      <div className="container">
        
        <div className="row align-items-center">
           <div className="col-lg-4 text-center mb-4">
            <div className="phone-frame">
              <img
                src={Footerphone}
                className="footer-phone"
                alt="Footer Phone"
              />
            </div>
          </div>

          <div className="col-lg-4 text-center text-md-start mb-4">
            <img src={Logo} className="footer-logo" alt="Logo" />
            
            <h3 className="footer-title">Download KGF App</h3>
            <p className="footer-sub">
              Now available on Playstore & App store
            </p>

            <div className="store-buttons mt-5">
              <img src={playstore} className="footer-store" alt="Play Store" />
              <img src={appstore} className="footer-store" alt="App Store" />
            </div>
          </div>

        
  
          <div className="col-lg-4 text-center text-md-start contact-column">
            <h4 className="contact-title">CONTACT US</h4>

            <p className="contact-item">
              <IoCallSharp className="me-2" />
              +91 90555 17555
            </p>

            <p className="contact-item">
              <MdMarkEmailRead className="me-2" />
              info@kammaglobal.com
            </p>

            <p className="contact-item">
              <IoLocationSharp className="me-2" />
              Jetti Mansion, Plot No 831/A, Road No 41,
              Jubilee Hills, Hyderabad 500033,
              Telangana, India
            </p>

            <div className="social-icons mt-5">
              <img src={pic1} alt="LinkedIn" />
              <img src={pic2} alt="Facebook" />
              <img src={pic3} alt="Twitter" />
              <img src={pic4} alt="Instagram" />
              <img src={pic5} alt="YouTube" />
            </div>
          </div>

        </div>
      </div>
    </div>
    
    </>
  )
}
export default Footer;