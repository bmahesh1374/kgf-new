import React from 'react'
import meetingImg from "../../assets/Aboutus.png";
import "../Styles/AboutUs.css";
import supportimg from "../../assets/support.png";
import sponserimg from "../../assets/sponser.png";
import networkimg from "../../assets/sponsernetwork.png";

function AboutUs() {
    return (
        <section className="aboutus-section container py-5" id='Aboutus'>
            <div className="row align-items-center g-4">

                {/* LEFT CONTENT */}
                <div className="col-lg-6 aboutus-text">
                    <h6 className="aboutus-subheading">ABOUT US</h6>
                    <p className="aboutus-intro-text">
                        Kamma Global Federation stands as a beacon of unity and a catalyst for empowerment,
                        beckoning all Kammas, Kammardukas, and Chowdarys to step into a shared space of
                        cultural pride, professional excellence, entrepreneurship, and social responsibility.
                    </p>

                    <button className="readmore mt-3">READ MORE</button>
                </div>

                {/* RIGHT IMAGE */}
                <div className="col-lg-6">
                    <div className="card aboutus-card">
                        <img src={meetingImg} alt="About Group" className="img-fluid rounded" />
                    </div>
                </div>

            </div>

            {/* CARDS ROW */}
            <div className="row g-4 mt-5 text-center">

                <div className="col-lg-4 col-md-6">
                    <div className="aboutus-info-card">
                        <h5>OUR MISSION & VISION</h5>
                        <p>
                            Meet Sri Jetti Kusuma Kumar, the visionary leader behind Kamma Global Federation. Hailing from a family of illustrious freedom fighters.
                        </p>
                    </div>
                </div>

                <div className="col-lg-4 col-md-6">
                    <div className="aboutus-info-card" id='middle'>
                        <h5>MEMBERS</h5>
                        <p>
                            Meet Sri Jetti Kusuma Kumar, the visionary leader behind Kamma Global Federation. Hailing from a family of illustrious freedom fighters.
                        </p>
                    </div>
                </div>

                <div className="col-lg-4 col-md-6 mx-auto">
                    <div className="aboutus-info-card">
                        <h5>GROWTH</h5>
                        <p>
                            Meet Sri Jetti Kusuma Kumar, the visionary leader behind Kamma Global Federation. Hailing from a family of illustrious freedom fighters.
                        </p>
                    </div>
                </div>


                <div className="row mt-5 text-center sponsership-section" id="sponsorship">

                    <h2 className="text-center">
                        <span className="sponserheading">WHY SPONSERSHIP KGF</span>
                    </h2>

                    <p className="sponserpara">By sponsoring KGF events and initiatives, you're not just promoting your brand – you're investing in community development and cultural preservation.</p>
                    <div className="col-lg-6 col-md-6 mx-auto">
                        <div className="aboutus-spon-card">

                            <div className="spon-icon">
                                <img src={supportimg} alt="Community Icon" />
                            </div>

                            <p >
                                With support, the community can increase its presence locally, nationally, and internationally.
                            </p>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-6 mx-auto">
                        <div className="aboutus-spon-card">
                            <div className="spon-icon">
                                <img src={sponserimg} alt="Community Icon" />
                            </div>
                            <p>
                                With support, the community can increase its presence locally, nationally, and internationally.
                            </p>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-6 mx-auto">
                        <div className="aboutus-spon-card">
                            <div className="spon-icon">
                                <img src={networkimg} alt="Community Icon" />
                            </div>
                            <p>
                                With support, the community can increase its presence locally, nationally, and internationally.
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </section>

    )
}

export default AboutUs