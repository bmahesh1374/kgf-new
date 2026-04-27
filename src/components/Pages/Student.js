import React from "react";
import "../Styles/studentjobs.css";
import joblogoimg from "../../assets/ysk-logo.png";
import { FaLocationDot } from "react-icons/fa6";
import { MdWorkHistory } from "react-icons/md";

function Student() {
  const jobs = [1, 2, 3, 4];

  return (
    <section className="student-section">
      <div className="container">
        <h1 className="page-title">Student</h1>

        <div className="jobs-apptra">
          <div className="jobs-stu active-tab">
            <h3>Jobs</h3>
          </div>
          <div className="application-track">
            <h3>Application Tracker</h3>
          </div>
        </div>

        <div className="row mt-3 g-3">
          {jobs.map((item, index) => (
            <div className="col-md-6 col-sm-12" key={index}>
              <div className="student-job-card">
                
                <div className="job-top">
                  <div className="job-left">
                    <h4>Trainer</h4>
                    <p className="salary">₹10,000 - ₹20,000/Month</p>
                    <p className="company">YSK INFOTECH PVT LTD</p>
                  </div>

                  <div className="job-logo">
                    <img src={joblogoimg} alt="logo" />
                  </div>
                </div>

                <div className="job-middle">
                 <p className="skills"><strong>Skills:</strong> Strong Communication Skills</p>

                 

                  <p><strong>Qualification:</strong> Any Degree</p>
                </div>
                 <div className="job-info">
                    <span><FaLocationDot /> Ameerpet Hyderabad</span>
                    <span><MdWorkHistory /> 1-2 years Experience in Trainer</span>
                  </div>

                <div className="job-bottom">
                  <button>View</button>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Student;