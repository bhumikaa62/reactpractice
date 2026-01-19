import React from 'react';
import './JobDetail.css';

const JobDetail = () => {
  return (
    <div className="job-detail-container">
      <h1 className="job-title">Marketing Manager</h1>
      <p className="job-location">New York, USA | Full Time | $123 - $456</p>

      {/* Job Summary */}
      <div className="job-summary">
        <h2>Job Summary</h2>
        <p><strong>Published On:</strong> 01 Jan, 2045</p>
        <p><strong>Vacancy:</strong> 123 Positions Available</p>
        <p><strong>Job Type:</strong> Full Time</p>
        <p><strong>Salary:</strong> $123 - $456 per month</p>
        <p><strong>Location:</strong> New York, USA</p>
        <p><strong>Application Deadline:</strong> 01 Jan, 2045</p>
      </div>

      {/* Job Description */}
      <div className="job-description">
        <h2>Job Description</h2>
        <p>
          We are looking for a creative and result-oriented Marketing Manager to lead our marketing team. You'll be responsible for planning, executing, and overseeing marketing campaigns to drive brand awareness and sales growth.
        </p>
      </div>

      {/* Responsibilities */}
      <div className="responsibilities">
        <h2>Responsibilities</h2>
        <ul>
          <li>Develop and implement marketing strategies.</li>
          <li>Manage marketing campaigns from start to finish.</li>
          <li>Analyze market trends and competitors.</li>
          <li>Coordinate with cross-functional teams.</li>
          <li>Monitor and report on the performance of marketing campaigns.</li>
        </ul>
      </div>

      {/* Qualifications */}
      <div className="qualifications">
        <h2>Qualifications</h2>
        <ul>
          <li>Bachelor’s degree in Marketing, Business, or related field.</li>
          <li>Proven experience as a Marketing Manager or similar role.</li>
          <li>Excellent communication and leadership skills.</li>
          <li>Strong analytical and problem-solving abilities.</li>
          <li>Proficiency in marketing software and tools.</li>
        </ul>
      </div>

      {/* Application Form */}
      <div className="apply-form">
        <h2>Apply For This Job</h2>
        <form>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <input type="url" placeholder="Portfolio Website" />
          <input type="file" />
          <textarea placeholder="Write Your Cover Letter Here..." rows="4" required></textarea>
          <button type="submit">Apply Now</button>
        </form>
      </div>

      {/* Company Details */}
      <div className="company-details">
        <h2>About the Company</h2>
        <p>
          Our company is dedicated to creating innovative marketing solutions. We believe in fostering a creative work environment where employees can thrive, grow, and make a real impact in the marketing world.
        </p>
      </div>
    </div>
  );
};

export default JobDetail;
