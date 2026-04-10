import React from "react";
import { FaLinkedin, FaTwitter, FaFacebook } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Styles/BoardMembers.css";

import img1 from "../../assets/jettikusumkumar.png";
import img2 from "../../assets/muralimohan.png";
import img3 from "../../assets/kishorebabu.png";
import img4 from "../../assets/lokeshkumar.png";

const boardMembers = [
  {
    name: "Jetti Kusum Kumar",
    title1: "National President, KGF",
    title2: "Founder of KGF",
    image: img1,
    linkedin: "#",
    twitter: "#",
    facebook: "#",
  },
  {
    name: "Maganti Murali Mohan",
    title1: "National President, KGF",
    title2: "Founder of KGF",
    image: img2,
    linkedin: "#",
    twitter: "#",
    facebook: "#",
  },
  {
    name: "KISHORE BABU",
    title1: "National President, KGF",
    title2: "Founder of KGF",
    image: img3,
    linkedin: "#",
    twitter: "#",
    facebook: "#",
  },
  {
    name: "LOKESH KUMAR",
    title1: "National President, KGF",
    title2: "Founder of KGF",
    image: img4,
    linkedin: "#",
    twitter: "#",
    facebook: "#",
  },
];

const BoardMembers = () => {
  return (
    <div className="board-section container" id="board-members">
      <h4 className="board-title mb-5 text-center ms-5">OUR BOARD MEMBERS</h4>

      <div className="row justify-content-center g-4">
        {boardMembers.map((member, index) => (
          <div key={index} className="col-12 col-md-6 col-lg-6">
            <div className="card board-card d-flex flex-row align-items-center h-100 mx-auto">
              <div className="board-icons">
                <a href={member.linkedin} target="_blank" rel="noreferrer">
                  <FaLinkedin style={{ color: "#0A66C2" }} />
                </a>
                <a href={member.twitter} target="_blank" rel="noreferrer">
                  <FaTwitter style={{ color: "#1D9BF0" }} />
                </a>
                <a href={member.facebook} target="_blank" rel="noreferrer">
                  <FaFacebook style={{ color: "#1877F2" }} />
                </a>
              </div>

              <img
                src={member.image}
                alt={member.name}
                className="board-image me-3"
              />

              <div className="board-content">
                <div className="board-text">
                  <h5 className="board-name mb-1">{member.name}</h5>
                  <p className="board-title1 mb-1">{member.title1}</p>
                  <p className="board-title2">{member.title2}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BoardMembers;
