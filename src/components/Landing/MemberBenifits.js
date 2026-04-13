import React from "react";
import "./MemberBenefits.css";
import hospitalImg from "../../assets/hospitalbillImg.png";
import communityImg from "../../assets/communityImg.png";
import collegeImg from "../../assets/collegefeeimg.png";  
import kgfImg from "../../assets/kgfevent.png";
import jobrefImg from "../../assets/jobrefImg.png";
import bloodImg from "../../assets/bloodImg.png";  
import careerImg from "../../assets/careerImg.png";
import agricultureImg from "../../assets/agricultureImg.png";
import abroadImg from "../../assets/abroadImg.png";
import housingImg from "../../assets/housingImg.png";  

function MemberBenefits() {
    return (
      <section className="member-section" id="member-benefits">
  <h2 className="member-title mb-4">
    <span>Membership Benefits</span>
  </h2>
<div className="container">
    <div className="member-grid">

    <div className="member-card">
      <img src={hospitalImg} alt="Hospital Bill Discount" />
      <p>Hospital Bill Discount</p>
    </div>

    <div className="member-card">
      <img src={communityImg} alt="Community Club Membership" />
      <p>Community Club Membership</p>
    </div>

    <div className="member-card">
      <img src={collegeImg} alt="College Fee Discount" />
      <p>College Fee Discount</p>
    </div>

    <div className="member-card">
      <img src={kgfImg} alt="KGF Free Event Pass" />
      <p>KGF Free Event Pass</p>
    </div>

    <div className="member-card">
      <img src={jobrefImg} alt="Job Referral" />
      <p>Job Referral</p>
    </div>

    <div className="member-card">
      <img src={bloodImg} alt="Blood Donors" />
      <p>Blood Donors</p>
    </div>

    <div className="member-card">
      <img src={careerImg} alt="Career Counselling" />
      <p>Career Counselling</p>
    </div>

    <div className="member-card">
      <img src={agricultureImg} alt="Discount on Agriculture Needs" />
      <p>Discount on Agriculture Needs</p>
    </div>

    <div className="member-card">
      <img src={abroadImg} alt="Abroad Education" />
      <p>Abroad Education</p>
    </div>

    <div className="member-card">
      <img src={housingImg} alt="Housing Support" />
      <p>Housing Support</p>
    </div>

  </div>
</div>
  
</section>
    );
}

export default MemberBenefits;
