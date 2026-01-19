import React, { useState } from 'react';
import './JobList.css';

const jobs = [
  { title: 'Software Engineer', location: 'New York, USA', type: 'Full Time', salary: '$123 - $456', date: '01 Jan, 2045' },
  { title: 'Marketing Manager', location: 'New York, USA', type: 'Full Time', salary: '$123 - $456', date: '01 Jan, 2045' },
  { title: 'Product Designer', location: 'New York, USA', type: 'Full Time', salary: '$123 - $456', date: '01 Jan, 2045' },
  { title: 'Creative Director', location: 'New York, USA', type: 'Full Time', salary: '$123 - $456', date: '01 Jan, 2045' },
  { title: 'Wordpress Developer', location: 'New York, USA', type: 'Full Time', salary: '$123 - $456', date: '01 Jan, 2045' },
];

const JobList = () => {
  const [filter, setFilter] = useState('All');

  const filteredJobs = filter === 'All' ? jobs : jobs.filter(job => job.type === filter);

  return (
    <div className="job-list-container">
      <h1 className="heading">Job Listings</h1>

      {/* Filter Buttons */}
      <div className="filters">
        <button onClick={() => setFilter('All')} className={filter === 'All' ? 'active' : ''}>All</button>
        <button onClick={() => setFilter('Full Time')} className={filter === 'Full Time' ? 'active' : ''}>Full Time</button>
        <button onClick={() => setFilter('Part Time')} className={filter === 'Part Time' ? 'active' : ''}>Part Time</button>
      </div>

      {/* Job Cards */}
      <div className="job-cards">
        {filteredJobs.map((job, index) => (
          <div key={index} className="job-card">
            <h2 className="job-title">{job.title}</h2>
            <p className="job-location">{job.location}</p>
            <p className="job-type">{job.type}</p>
            <p className="job-salary">{job.salary}</p>
            <p className="job-date">Date Line: {job.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobList;
