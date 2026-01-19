import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-container" style={styles.container}>
      <h1 style={styles.heading}>About Us</h1>
      <p style={styles.paragraph}>
        We help you find the best jobs and the right talent.
      </p>
      <p style={styles.paragraph}>
        We make it easy to connect job seekers with great opportunities. 
        Our platform is designed to help you grow and succeed.
      </p>
      <ul style={styles.list}>
        <li>Easy job search and hiring</li>
        <li>Find the right talent quickly</li>
        <li>Grow your career with us</li>
      </ul>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    maxWidth: '600px',
    margin: '0 auto',
    textAlign: 'center',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
  heading: {
    color: '#333',
    fontSize: '2rem',
    marginBottom: '15px',
  },
  paragraph: {
    color: '#666',
    fontSize: '1rem',
    lineHeight: '1.5',
    marginBottom: '10px',
  },
  list: {
    listStyleType: 'disc',
    paddingLeft: '20px',
    color: '#444',
  },
};

export default About;
