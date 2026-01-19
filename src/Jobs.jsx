



import React from 'react';
import { Link } from 'react-router-dom';
import './Jobs.css';

const jobData = [
  { id: 1, title: 'Web Designer', location: 'New Delhi' },
  { id: 2, title: 'Web Developer', location: 'Mumbai' },
  { id: 3, title: 'iOS Developer', location: 'Bangalore' },
  { id: 4, title: 'Android Developer', location: 'Pune' },
  { id: 5, title: 'PHP Developer', location: 'Chennai' },
  { id: 6, title: 'Data Scientist', location: 'Hyderabad' }
];

const Jobs = () => {
  return (
    <div className="jobs-container">
      <h1>Available Jobs</h1>
      <ul className="jobs-list">
        {jobData.map((job) => (
          <li key={job.id} className="job-item">
            <h2>{job.title}</h2>
            <p>Location: {job.location}</p>
            <Link to={`/job/${job.id}`} className="view-details-btn">
              Explore {job.title} Jobs
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Jobs;
