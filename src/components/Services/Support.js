import React from "react";
import "../Styles/Services.css";

function Support() {
  return (
    <section className="support-section" id="support">
      <div className="support-container">
        <h3 className="support-title">Support</h3>

        <div className="support-grid">

          <div className="support-card" id="rowgap">
            <h5>Medical</h5>
            <p>
              KMS provides health camp provides free diagnosis, medicines and food.
              KMS is planning to tie up with hospitals for providing concession in hospital bills.
            </p>
          </div>

          <div className="support-card" id="rowgap">
            <h5>Social Service</h5>
            <p>
              KMS Social services includes the benefits and facilities such as
              education, food, health care and job training.
            </p>
          </div>

          <div className="support-card">
            <h5>Counseling</h5>
            <p>
              KMS provides counseling to members and their families by identifying
              needs and supporting them through an integrated system of care partners.
            </p>
          </div>

          <div className="support-card">
            <h5>Legal</h5>
            <p>
              KMS provides free Legal Advice support to its members.
              Legal Assistance will be provided based on the request from the members.
            </p>
          </div>

          <div className="support-card" id="rowgap">
            <h5>NRI Integration</h5>
            <p>
              Through membership registration in the website,
              NRIs can be identified and integrated.
            </p>
          </div>

          <div className="support-card" id="rowgap">
            <h5>Ceremonies & Rituals</h5>
            <p>
              KMS provides assistance based on requests from members
              for conducting ceremonies and performing rituals.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Support;
