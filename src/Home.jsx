import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

const images = [
  "final1.jpg", 
  "final2.jpg"
];

const Home = () => {
  const [searchKeyword, setSearchKeyword] = useState("");
  const [location, setLocation] = useState("");
  const [category, setCategory] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  const locations = [
    "New York", "San Francisco", "Los Angeles", "Chicago", "Houston",
    "Indore", "Ujjain", "Bangalore", "Pune", "Mumbai"
  ];

  const categories = [
    "Web Designer", "Web Developer", "iOS Developer", "Android Developer",
    "PHP Developer", "Data Scientist"
  ];

  const companies = [
    { name: "TechCorp", location: "New York", link: "https://www.techcorp.com" },
    { name: "DesignPro", location: "San Francisco", link: "https://www.designpro.com" },
    { name: "AppWorks", location: "Los Angeles", link: "https://www.appworks.com" },
    { name: "IndoreTech", location: "Indore", link: "https://www.indoretech.com" },
    { name: "UjjainSoft", location: "Ujjain", link: "https://www.ujjainsoft.com" },
    { name: "BangaloreIT", location: "Bangalore", link: "https://www.bangaloreit.com" },
    { name: "PuneDev", location: "Pune", link: "https://www.punedev.com" },
    { name: "MumbaiTech", location: "Mumbai", link: "https://www.mumbaitech.com" }
  ];

  const handleSearch = () => {
    if (searchKeyword && location && category) {
      navigate(`/jobs?keyword=${searchKeyword}&location=${location}&category=${category}`);
    } else {
      alert("Please fill in all the search fields.");
    }
  };

  // Slideshow Logic
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval); // Clean up interval on component unmount
  }, []);

  return (
    <div className="home-page">
      {/* Hero Section with Background Image */}
      <header className="hero-section" style={{ backgroundImage: `url(${images[currentIndex]})` }}>
        <div className="hero-text">
          <h1>Find Your Dream Job Today!</h1>
          <p>Explore thousands of job opportunities around the world.</p>
        </div>
        <div className="search-bar">
          
          <select value={location} onChange={(e) => setLocation(e.target.value)}>
            <option value="">Select Location</option>
            {locations.map((loc, index) => (
              <option key={index} value={loc}>{loc}</option>
            ))}
          </select>
          <select value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="">Select Category</option>
            {categories.map((cat, index) => (
              <option key={index} value={cat}>{cat}</option>
            ))}
          </select>
          <button onClick={handleSearch}>Search</button>
        </div>
      </header>

      {/* Remaining Sections */}
      <section className="categories-section">
        <h2>Explore Jobs by Category</h2>
        <div className="category-cards">
          {categories.map((category, index) => (
            <div key={index} className="category-card">
              <h4>{category}</h4>
              <p>{123 + index} Vacancies Available!</p>
            </div>
          ))}
        </div>
      </section>

      {/* Job Listings */}
      <section className="job-listing">
        <h2>Latest Job Listings</h2>
        <div className="job-cards">
          {companies.map((job, index) => (
            <div key={index} className="job-card">
              <h3>{job.name}</h3>
              <p>{job.location} | Full Time | ${123 + index * 10} - ${456 + index * 10}</p>
              <p>Application Deadline: 01 Jan, 2045</p>
              <a href={job.link} target="_blank" rel="noopener noreferrer" className="apply-btn">Apply Now</a>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2025 Your Job Portal</p>
      </footer>
    </div>
  );
};

export default Home;
