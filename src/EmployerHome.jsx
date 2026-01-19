import React from 'react';
import { Link } from 'react-router-dom'; // Link import for routing
import './EmployerHome.css'; // Import the CSS file for styling

const EmployerHome = () => {
  return (
    <div className="employer-home">
      <div className="dashboard-header">
        <h2>Welcome to Your Dashboard</h2>
        <p>Manage your job listings, company profile, and more!</p>
      </div>
      
      <div className="dashboard-links">
        <div className="link-card">
          <Link to="/postjob" className="dashboard-link">
            <div className="icon">
              <i className="fas fa-briefcase"></i>
            </div>
            <h3>Post a Job</h3>
            <p>Start posting your job openings.</p>
          </Link>
        </div>
        
        <div className="link-card">
          <Link to="/companyprofile" className="dashboard-link">
            <div className="icon">
              <i className="fas fa-building"></i>
            </div>
            <h3>Company Profile</h3>
            <p>Update your company details and logo.</p>
          </Link>
        </div>
        
        <div className="link-card">
          <Link to="/searchcandidates" className="dashboard-link">
            <div className="icon">
              <i className="fas fa-search"></i>
            </div>
            <h3>Search Candidates</h3>
            <p>Find potential candidates for your open positions.</p>
          </Link>
        </div>
      </div>

      <div className="logout-container">
        <button
          onClick={() => {
            localStorage.removeItem('employerLoggedIn'); // Clear the login flag
            window.location.href = '/'; // Redirect to the home page
          }}
          className="logout-btn"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default EmployerHome;
