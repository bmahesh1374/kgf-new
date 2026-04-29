import React from "react";

function AdminAddEvent() {
  return (
    <>
      <section className="kgf-admin-add-event-container">
        <div className="kgf-admin-add-event-title">
          <h3>Add Event</h3>
        </div>
        <div className="kgf-admin-add-event-grid-container">
          <div className="kgf-memb-form-content">
            <label className="kgf-memb-form-label">
              Event Title<span className="kgf-required">*</span>
            </label>
            <input
              type="text"
              className="kgf-memb-form-control"
              placeholder="Event Title"
              required
            />
          </div>

          <div className="kgf-memb-marital-form">
            <label className="kgf-memb-form-label">
              Event Mode <span className="kgf-required">*</span>
            </label>
            <div className="kgf-memb-radio-group kgf-memb-marital-radio">
              <label>
                <input type="radio" name="maritalStatus" value="Married" />
                In-Person
              </label>
              <label>
                <input type="radio" name="maritalStatus" value="Unmarried" />
                Virtual
              </label>
              <label>
                <input type="radio" name="maritalStatus" value="Divorce" />
                Hybrid
              </label>
            </div>
          </div>

           <div className="kgf-memb-form-content">
                  <label className="kgf-memb-form-label">
                    Organizer Name (Mr/Ms/Mrs)<span className="kgf-required">*</span>
                  </label>
                  <input
                    type="text"
                    className="kgf-memb-form-control"
                    placeholder="Organizer Name"
                    required
                  />
                </div>

                 <div className="kgf-memb-form-content">
                  <label className="kgf-memb-form-label">
                    Speaker Name (Mr/Ms/Mrs)<span className="kgf-required">*</span>
                  </label>
                  <input
                    type="text"
                    className="kgf-memb-form-control"
                    placeholder="Speaker Name"
                    required
                  />
                </div>

                <div className="kgf-memb-form-content">
                  <label className="kgf-memb-form-label">
                    Speaker Image<span className="kgf-required">*</span>
                  </label>
                  <input
                    type="file"
                    className="kgf-memb-form-control"
                    placeholder="Attach Photo"
                    style={{border:"2px solid black" }}
                  />
                </div>
                    
                <div className="dob">
                    <div className="kgf-memb-form-content">
                  <label className="kgf-memb-form-label">
                    Date of Birth<span className="kgf-required">*</span>
                  </label>

                  <input
                    type="date"
                    className="kgf-memb-form-control"
                    placeholder="Date-Month-Year"
                    required
                  />
                </div>

                <div className="kgf-memb-form-content">
                  <label className="kgf-memb-form-label">
                    Date of Birth<span className="kgf-required">*</span>
                  </label>

                  <input
                    type="date"
                    className="kgf-memb-form-control"
                    placeholder="Date-Month-Year"
                    required
                  />
                </div>
                </div>
        </div>
      </section>
    </>
  );
}

export default AdminAddEvent;
