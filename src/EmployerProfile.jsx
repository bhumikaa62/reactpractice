import React, { useState } from 'react';
import './EmployerProfile.css';

const EmployerProfile = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    companyDescription: '',
    contactEmail: '',
    contactPhone: '',
    companyLogo: null,
    companyWebsite: '',
    companyAddress: '',
    linkedinUrl: '',
    twitterUrl: '',
    facebookUrl: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      companyLogo: e.target.files[0],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic here
    console.log(formData);
  };

  return (
    <div className="form-container">
      <h2>Company Profile Name</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="companyName">companyName:</label>
          <input
            type="text"
            id="companyName"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="companyDescription">companyDescription</label>
          <textarea
            id="companyDescription"
            name="companyDescription"
            value={formData.companyDescription}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="contactEmail">contact Email</label>
          <input
            type="email"
            id="contactEmail"
            name="contactEmail"
            value={formData.contactEmail}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="contactPhone">contact Phone</label>
          <input
            type="text"
            id="contactPhone"
            name="contactPhone"
            value={formData.contactPhone}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="companyLogo">comapany Logo</label>
          <input
            type="file"
            id="companyLogo"
            name="companyLogo"
            onChange={handleFileChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="companyWebsite">companyWebsite:</label>
          <input
            type="url"
            id="companyWebsite"
            name="companyWebsite"
            value={formData.companyWebsite}
            onChange={handleChange}
            required/>
        </div>
        <div className="form-group">
          <label htmlFor="companyAddress">companyAddress</label>
          <input
            type="text"
            id="companyAddress"
            name="companyAddress"
            value={formData.companyAddress}
            onChange={handleChange}
            required/>
        </div>
        <div className="form-group">
          <label htmlFor="linkedinUrl">LinkedIn URL:</label>
          <input
            type="url"
            id="linkedinUrl"
            name="linkedinUrl"
            value={formData.linkedinUrl}
            onChange={handleChange}
            required/>
        </div>
        <div className="form-group">
          <label htmlFor="twitterUrl">Twitter URL:</label>
          <input
            type="url"
            id="twitterUrl"
            name="twitterUrl"
            value={formData.twitterUrl}
            onChange={handleChange}
            required/>
        </div>
        <div className="form-group">
          <label htmlFor="facebookUrl">Facebook URL:</label>
          <input
            type="url"
            id="facebookUrl"
            name="facebookUrl"
            value={formData.facebookUrl}
            onChange={handleChange}
            required/>
        </div>
        <button type="submit" className="submit-btn">
          Submit </button>
      </form>
    </div>
  );
};

export default EmployerProfile;
