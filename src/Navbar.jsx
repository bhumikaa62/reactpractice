import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isJobsDropdownOpen, setIsJobsDropdownOpen] = useState(false);

  const toggleJobsDropdown = () => {
    setIsJobsDropdownOpen(!isJobsDropdownOpen);
  };

  return (
    <nav className="navbar fixed-top">
      <div className="logo">
        <Link to="/" className="logo-link">JobBoard</Link>
      </div>

      <div className="nav-links">
        <div className="nav-item">
          <Link to="/" className="nav-link">Home</Link>
        </div>

        {/* Jobs Dropdown */}
        <div className="nav-item dropdown" onClick={toggleJobsDropdown}>
          <span className="nav-link">Jobs ▼</span>
          {isJobsDropdownOpen && (
            <div className="dropdown-menu">
              <Link to="/jobs/joblist" className="dropdown-item">Job List</Link>
              <Link to="/jobs/jobdetail" className="dropdown-item">Job Detail</Link>
            </div>
          )}
        </div>

        {/* Post Job: Link to Employer Login (if not logged in) */}
        <div className="nav-item">
          <Link to="/employerlogin" className="nav-link">Post a Job</Link>  {/* Direct to Employer Login */}
        </div>

        <div className="nav-item">
          <Link to="/login" className="nav-link">Login</Link>
        </div>

        <div className="nav-item">
          <Link to="/contact" className="nav-link">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
