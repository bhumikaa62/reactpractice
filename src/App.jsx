
import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'; // Import Navigate for redirection
import Navbar from './Navbar';
import Home from './Home';
import Jobs from './Jobs';
import JobList from './JobList';
import JobDetail from './JobDetail';
import PostJob from './PostJob';
import EmployerLogin from './EmployerLogin';
import EmployerHome from './EmployerHome';
import EmployerProfile from './EmployerProfile'; // Add Employer Profile
import SearchCandidates from './SearchCandidates'; // Add Search Candidates
import Contact from './Contact';
import About from './About';
import Login from './Login'; // Corrected the import for Login

const App = () => {
  // Check if employer is logged in by checking localStorage
  const isEmployerLoggedIn = localStorage.getItem('employerLoggedIn') === 'true';

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/jobs/joblist" element={<JobList />} />
        <Route path="/jobs/jobdetail" element={<JobDetail />} />

        {/* Employer Login Route */}
        <Route path="/employerlogin" element={<EmployerLogin />} />
        
        {/* Employer Home Route: Redirect to EmployerLogin if not logged in */}
        <Route
          path="/employerhome"
          element={isEmployerLoggedIn ? <EmployerHome /> : <Navigate to="/employerlogin" />}
        />
        
        <Route path="/postjob" element={<PostJob />} />
        <Route path="/login" element={<Login />} /> {/* Corrected Login component */}
        
        <Route path="/companyprofile" element={<EmployerProfile />} /> {/* Company Profile */}
        <Route path="/searchcandidates" element={<SearchCandidates />} /> {/* Search Candidates */}
        
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
