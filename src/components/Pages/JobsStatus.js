import React from 'react'
import "../Styles/jobsstatus.css";

function JobsStatus() {
  return (
    <section className='jobs-status'>
    <div className='container'>
   <div className="stu-filters-box">
        <input
          type="text"
          placeholder="Search Job Title"
          className="stu-filter-input"/>

        <select
          className="stu-filter-input">
          <option value="">Status</option>
          <option value="Pending">Pending</option>
          <option value="Shortlisted">Shortlisted</option>
          <option value="Rejected">Rejected</option>
        </select>

        <button className="stu-apply-btn">
          Apply
        </button>

        <button className="stu-delete-btn">
          Delete
        </button>
      </div>


    </div>

    </section>
  )
}

export default JobsStatus