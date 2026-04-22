import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Styles/Services.css";
import { SlCalender } from "react-icons/sl";
import { FaClock } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";
 
import globalImg from "../../assets/global-img.png";
import event1Image from "../../assets/Events1.png";
import event2Image from "../../assets/Events3.png";
 
const GlobalNetwork = () => {
  return (
    <>
      <section className="knowledge-wrapper" id="global">
        <div className="services-name">
          <h3>Services</h3>
        </div>
<<<<<<< HEAD

        <div className="container knowledge-section">

=======
 
        <div className="container knowledge-section">
 
>>>>>>> 0c25dbc9af36a864e54cefba446b7f789231076e
          {/* TOP CONTENT */}
          <div className="row align-items-center g-4">
            <div className="col-lg-6 col-12 text-center mb-4 mb-lg-0">
              <div className="globalimg">
                <img src={globalImg} alt="Global Network" className="img-fluid" />
              </div>
            </div>
<<<<<<< HEAD

            <div className="col-lg-6 col-12 text-center text-lg-start">
              <h3 className="knowledge-title">GLOBAL NETWORKING</h3>

=======
 
            <div className="col-lg-6 col-12 text-center text-lg-start">
              <h3 className="knowledge-title">GLOBAL NETWORKING</h3>
 
>>>>>>> 0c25dbc9af36a864e54cefba446b7f789231076e
              <p className="knowledge-description">
                We provide global networking solutions that help businesses
                connect, collaborate, and scale across borders. With secure
                infrastructure and 24/7 support, we help you establish a
                reliable network that grows with your business and ensures
                uninterrupted operations.
              </p>
            </div>
          </div>
<<<<<<< HEAD

          {/* EVENT CARDS */}
          <div className="service-events-row">

=======
 
          {/* EVENT CARDS */}
          <div className="service-events-row">
 
>>>>>>> 0c25dbc9af36a864e54cefba446b7f789231076e
            {/* CARD 1 */}
            <div className="service-card">
              <div className="service-left">
                <img src={event1Image} alt="Event" />
                <h6>Sri Jetti Kusum Kumar</h6>
                <p className="prof">Founder of KGF</p>
              </div>
<<<<<<< HEAD

              <div className="service-content">
                <h3>KGF Global Event</h3>

                <p className="service-org">
                  Organized by Sri JETTI KUSUM KUMAR
                </p>

                <p className="service-invite">
                  You Are Invited!
                </p>

                <p>
                  <SlCalender /> Aug 20 - Aug 21
                </p>

                <p>
                  <FaClock /> 10PM - 1AM
                </p>

=======
 
              <div className="service-content">
                <h3>KGF Global Event</h3>
 
                <p className="service-org">
                  Organized by Sri JETTI KUSUM KUMAR
                </p>
 
                <p className="service-invite">
                  You Are Invited!
                </p>
 
                <p>
                  <SlCalender /> Aug 20 - Aug 21
                </p>
 
                <p>
                  <FaClock /> 10PM - 1AM
                </p>
 
>>>>>>> 0c25dbc9af36a864e54cefba446b7f789231076e
                <p>
                  <IoLocationOutline /> Venkata Function Hall,
                  Hyderabad-500029
                </p>
<<<<<<< HEAD

=======
 
>>>>>>> 0c25dbc9af36a864e54cefba446b7f789231076e
                <button className="service-btn">
                  REGISTER NOW
                </button>
              </div>
            </div>
<<<<<<< HEAD

=======
 
>>>>>>> 0c25dbc9af36a864e54cefba446b7f789231076e
            {/* CARD 2 */}
            <div className="service-card">
              <div className="service-left">
                <img src={event2Image} alt="Event" />
                <h6>M. Venkaiah Naidu</h6>
                <p className="prof">Former Vice President of India</p>
              </div>
<<<<<<< HEAD

              <div className="service-content">
                <h3>KGF Global Event</h3>

                <p className="service-org">
                  Organized by Sri JETTI KUSUM KUMAR
                </p>

                <p className="service-invite">
                  Event Completed
                </p>

                <p>
                  <SlCalender /> Aug 20 - Aug 21
                </p>

                <p>
                  <FaClock /> 10PM - 1AM
                </p>

=======
 
              <div className="service-content">
                <h3>KGF Global Event</h3>
 
                <p className="service-org">
                  Organized by Sri JETTI KUSUM KUMAR
                </p>
 
                <p className="service-invite">
                  Event Completed
                </p>
 
                <p>
                  <SlCalender /> Aug 20 - Aug 21
                </p>
 
                <p>
                  <FaClock /> 10PM - 1AM
                </p>
 
>>>>>>> 0c25dbc9af36a864e54cefba446b7f789231076e
                <p>
                  <IoLocationOutline /> Venkata Function Hall,
                  Hyderabad-500029
                </p>
<<<<<<< HEAD

=======
 
>>>>>>> 0c25dbc9af36a864e54cefba446b7f789231076e
                <button className="service-btn-complete">
                  COMPLETED
                </button>
              </div>
            </div>
<<<<<<< HEAD

=======
 
>>>>>>> 0c25dbc9af36a864e54cefba446b7f789231076e
          </div>
        </div>
      </section>
    </>
  );
};
<<<<<<< HEAD

export default GlobalNetwork;
=======
 
export default GlobalNetwork;
 
>>>>>>> 0c25dbc9af36a864e54cefba446b7f789231076e
