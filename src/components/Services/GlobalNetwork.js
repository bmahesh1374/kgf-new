import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Styles/Services.css";
import { SlCalender } from "react-icons/sl";
import { FaClock } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";

import Globalnetwork from "../../assets/globalnetwork.png";
import event1Image from "../../assets/Events1.png";
import event2Image from "../../assets/Events3.png";



const GlobalNetwork = () => {

  const events = [
    {
      image: event1Image,
      title: "HR EVENT",
      organizer: "K. Siva Krishna",
      speaker: "K. Rajasekhar",
      eventmode:"In Person",
      schedule: "Aug 20 - Aug 23",
      time: "10AM - 4PM",
      location: "Ameerpet",
    },
    {
      image: event2Image,
      title: "HR EVENT",
      organizer: "K. Siva Krishna",
      speaker: "K. Rajasekhar",
      eventmode:"Online",
      schedule: "Jun 20 - Jun 23",
      time: "10AM - 4PM",
      location: "Ameerpet",
    },
  ];

  return (
    <>
      <section className="knowledge-wrapper" id="global">
        <div className="container knowledge-section">
          <div className="row align-items-center g-4">
            <div className="col-lg-6 col-12 text-center mb-4 mb-lg-0">
            <div className="globalimg">
              <img src={Globalnetwork} className="img-fluid"/>
            </div>  
            </div>
            <div className="col-lg-6 col-12 text-center text-lg-start">
              <h3 className="knowledge-title">GLOBAL NETWORKING</h3>
              <p className="knowledge-description">
                We provide global networking solutions that help businesses connect,
                collaborate, and scale across borders. With secure infrastructure and 
                24/7 support, we help you establish a reliable network that grows 
                with your business and ensures uninterrupted operations.
              </p>
            </div>
          </div>

           <div className="events-row">
                    <div className="event-card">
                    <div>
                        <img src={event1Image} alt="event" />
                        <h6>Sri Jetti Kusum Kumar</h6>
                        <p>Founder of KGF</p>
                    </div>
                      
                      <div className="event-content">
                        <h3>KGF Global Event</h3>
                        <p className="invite">You Are Invited!</p>
                        <p><SlCalender /> Aug 20 - Aug 21 | <FaClock/> 10pm - 1am</p>
                        <p><IoLocationOutline /> Venkata Function Hall, Hyderabad</p>
                        <button className="register-btn">REGISTER NOW</button>
                      </div>
                    </div>
          
                    <div className="event-card">
                      <div>
                      <img src={event2Image} alt="event" />
                      <h6>Sri Jetti Kusum Kumar</h6>
                      </div>
                      <div className="event-content">
                        <h3>KGF Global Event</h3>
                        <p className="invite">You Are Invited!</p>
                        <p><SlCalender /> Aug 20 - Aug 21 | <FaClock/> 10pm - 1am</p>
                        <p><IoLocationOutline /> Venkata Function Hall, Hyderabad</p>
                        <button className="register-btn">REGISTER NOW</button>
                      </div>
                    </div>
                  </div>
          </div>
      </section>

    
    </>
  );
};

export default GlobalNetwork;
