import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import './EmployerLogin.css';  // Import the CSS file

const EmployerLogin = () => {
  const [isRegistering, setIsRegistering] = useState(false);
  const [employerName, setEmployerName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  // For login
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const navigate = useNavigate();  // Initialize useNavigate

  const handleRegistration = (e) => {
    e.preventDefault();
    // Register employer logic
    console.log("Employer Registered", { employerName, email, phone, password });
    setIsRegistering(false); // Switch to login form
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // Check if login is successful (you can replace this with actual validation)
    console.log("Employer Logged in", { loginEmail, loginPassword });

    // Set employer logged in flag in localStorage
    localStorage.setItem('employerLoggedIn', 'true'); // Ensure login status is saved

    // After successful login, navigate to the EmployerHome page
    navigate("/employerhome");  // Redirect to EmployerHome page after login
  };

  return (
    <div className={`login-container ${isRegistering ? 'registering' : ''}`}>
      <div className="form-wrapper">
        <h2>{isRegistering ? "Employer Registration" : "Employer Login"}</h2>

        {isRegistering ? (
          <form onSubmit={handleRegistration}>
            <div>
              <label>Employer Name</label>
              <input
                type="text"
                placeholder="Enter employer name"
                value={employerName}
                onChange={(e) => setEmployerName(e.target.value)}
                required/>
            </div>

            <div>
              <label>Email</label>
              <input
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required/>
            </div>

            <div>
              <label>Phone</label>
              <input
                type="text"
                placeholder="Enter phone number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required/>
            </div>

            <div>
              <label>Password</label>
              <input
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required/>
            </div>

            <button type="submit">Register</button>
          </form>
        ) : (
          <form onSubmit={handleLogin}>
            <div>
              <label>Email</label>
              <input
                type="email"
                placeholder="Enter email"
                value={loginEmail}
                onChange={(e) => setLoginEmail(e.target.value)}
                required/>
            </div>

            <div>
              <label>Password</label>
              <input
                type="password"
                placeholder="Enter password"
                value={loginPassword}
                onChange={(e) => setLoginPassword(e.target.value)}
                required/>
            </div>

            <button type="submit">Login</button>
          </form>
        )}

        <button onClick={() => setIsRegistering(!isRegistering)}>
          {isRegistering ? "Already have an account? Login" : "Don't have an account? Register"}
        </button>
      </div>
    </div>
  );
};

export default EmployerLogin;
