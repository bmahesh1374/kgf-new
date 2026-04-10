import React from "react";
import "./MemberBenefits.css";
import {
    FaHospital,
    FaGraduationCap,
    FaUserTie,
    FaChalkboardTeacher,
    FaGlobe,
    FaUsers,
    FaTicketAlt,
    FaTint,
    FaSeedling,
    FaHome,
} from "react-icons/fa";

function MemberBenefits() {
    return (
        <section className="member-section" id="member-benefits">
            <h2 className="member-title">
                <span>Membership Benefits</span>
            </h2>
            <div className="container">
                <div className="row g-4">

                    {/* LEFT COLUMN */}
                    <div className="col-lg-6 g-4">
                        <div className="benefit-card purple icon-right">
                            <span className="benifit-text">Hospital Bill Discount</span>
                            <div className="benefit-icon">
                                <FaHospital />
                            </div>
                        </div>

                        <div className="benefit-card pink icon-right">
                            <span>College Fee Discount</span>
                            <div className="benefit-icon">
                                <FaGraduationCap />
                            </div>
                        </div>

                        <div className="benefit-card green icon-right">
                            <span>Job Referral</span>
                            <div className="benefit-icon">
                                <FaUserTie />
                            </div>
                        </div>

                        <div className="benefit-card blue icon-right">
                            <span>Career Counselling</span>
                            <div className="benefit-icon">
                                <FaChalkboardTeacher />
                            </div>
                        </div>

                        <div className="benefit-card teal icon-right">
                            <span>Abroad Education & Job Referral</span>
                            <div className="benefit-icon">
                                <FaGlobe />
                            </div>
                        </div>

                    </div>

                    {/* RIGHT COLUMN */}
                    <div className="col-lg-6">
                        <div className="benefit-card gold icon-left">
                            <div className="benefit-icon">
                                <FaUsers />
                            </div>
                            <span>Community Club Membership</span>
                        </div>

                        <div className="benefit-card lime icon-left">
                            <div className="benefit-icon">
                                <FaTicketAlt />
                            </div>
                            <span>KGF Free Event Pass</span>
                        </div>

                        <div className="benefit-card red icon-left">
                            <div className="benefit-icon">
                                <FaTint />
                            </div>
                            <span>Blood Donors</span>
                        </div>

                        <div className="benefit-card cyan icon-left">
                            <div className="benefit-icon">
                                <FaSeedling />
                            </div>
                            <span>Discount on Agriculture Needs</span>
                        </div>

                        <div className="benefit-card brown icon-left">
                            <div className="benefit-icon">
                                <FaHome />
                            </div>
                            <span>Housing Support</span>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
}

export default MemberBenefits;
