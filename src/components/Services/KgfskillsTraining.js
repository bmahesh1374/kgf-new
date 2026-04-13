import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Styles/Services.css";
import { SlCalender } from "react-icons/sl";
import { FaClock } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";

import Globalnetwork from "../../assets/kgfskill.png";
import event1Image from "../../assets/Events3.png";
import event2Image from "../../assets/Events2.png";

const KgfskillsTraining = () => {
  const events = [
    {
      image: event1Image,
      title: "HR EVENT",
      organizer: "K. Siva Krishna",
      speaker: "K. Rajasekhar",
      eventmode: "In Person",
      schedule: "Aug 20 - Aug 23",
      time: "10AM - 4PM",
      location: "Ameerpet",
    },
    {
      image: event2Image,
      title: "HR EVENT",
      organizer: "K. Siva Krishna",
      speaker: "K. Rajasekhar",
      eventmode: "Online",
      schedule: "Jun 20 - Jun 23",
      time: "10AM - 4PM",
      location: "Ameerpet",
    },
  ];

  return (
    <>
      <section className="knowledge-wrapper" id="training">
        <div className="container knowledge-section">
          <div className="row align-items-center g-4">
            <div className="col-lg-6 col-12 text-center mb-4 mb-lg-0">
              <div className="globalimg">
                <img src={Globalnetwork} className="img-fluid" alt="img" />
              </div>
            </div>
            <div className="col-lg-6 col-12 text-center text-lg-start">
              <h3 className="knowledge-title">KGF SKILLS & TRAINING</h3>
              <p className="knowledge-description">
                We provide tailored knowledge-sharing solutions that foster
                collaboration, streamline resources, and help teams innovate.
                Our platforms enable businesses to tap into collective expertise
                and drive productivity and growth.
              </p>
            </div>
          </div>

          <div className="events-row">
            <div className="event-card">
              <div>
                <img src={event1Image} alt="event" />
                <h6>M. Venkaiah Naidu</h6>
                <p className="prof">Former Vice President of India</p>
              </div>

              <div className="event-content">
                <h3>KGF Global Event</h3>
                <p className="event-content-org">
                  Organized by Sri JETTI KUSUM KUMAR
                </p>
                <p className="invite">You Are Invited!</p>
                <p>
                  <SlCalender /> Aug 20 - Aug 21 | <FaClock /> 10pm - 1am
                </p>
                <p>
                  <IoLocationOutline /> Venkata Function Hall, Hyderabad-500029
                </p>
                <button className="completed-btn">COMPLETED</button>
              </div>
            </div>

            <div className="event-card">
              <div>
                <img src={event2Image} alt="event" />
                <h6>Bharatheeyam Satyavani</h6>

              </div>
              <div className="event-content">
                <h3>KGF Global Event</h3>
                <p className="event-content-org">
                  Organized by Sri JETTI KUSUM KUMAR
                </p>
                <p className="invite">You Are Invited!</p>
                <p>
                  <SlCalender /> Aug 20 - Aug 21 | <FaClock /> 10pm - 1am
                </p>
                <p>
                  <IoLocationOutline /> Venkata Function Hall, Hyderabad-500029
                </p>
                <button className="register-btn">REGISTER NOW</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default KgfskillsTraining;
