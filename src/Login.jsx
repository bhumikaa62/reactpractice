import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // useNavigate for navigation
import './login.css'; // Reusing the Home.css for styling

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState(''); // New state for Name
  const [phone, setPhone] = useState(''); // New state for Phone
  const [isLogin, setIsLogin] = useState(true); // Flag to toggle between login and register
  const navigate = useNavigate();

  // Handle Registration (Validate input)
  const handleRegister = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    // Registration logic here (e.g., API call)
    console.log(`Registering with Name: ${name}, Email: ${email}, Phone: ${phone}, Password: ${password}`);
    // Navigate to login after successful registration
    setIsLogin(true);
  };

  // Handle Login (Just a simulation for now)
  const handleLogin = (e) => {
    e.preventDefault();
    // Here you would typically validate the user's credentials
    console.log(`Logging in with Email: ${email} and Password: ${password}`);
    // On successful login, navigate to the Home or Dashboard page
    navigate('/home'); // Redirect to home after successful login
  };

  return (
    <div className="login-registration-page">
      <header className="hero-sect">
        <h1 className="main-heading">
          {isLogin ? 'Welcome Back! Please Login to Continue' : 'Create Your Account to Get Started'}
        </h1>
      </header>

      <div className="form-section">
        {isLogin ? (
          // Login Form
          <form onSubmit={handleLogin} className="auth-form">
            <h2>Login</h2>

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="styled-input"
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                required
                className="styled-input"
              />
            </div>

            <button type="submit" className="auth-btn">Login</button>

            <p className="toggle-link">
              Don't have an account?{' '}
              <span onClick={() => setIsLogin(false)}>Register Here</span>
            </p>
          </form>
        ) : (
          // Registration Form
          <form onSubmit={handleRegister} className="auth-form">
            <h2> candidate Registration</h2>

            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your full name"
                required
                className="styled-input"
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Enter your phone number"
                required
                className="styled-input"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="styled-input"
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                required
                className="styled-input"
              />
            </div>

            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm your password"
                required
                className="styled-input"
              />
            </div>

            <button type="submit" className="auth-btn"> candidate Registration</button>

            <p className="toggle-link">
              Already have an account?{' '}
              <span onClick={() => setIsLogin(true)}>Login Here</span>
            </p>
          </form>
        )}
      </div>
    </div>
  );
};

export default Login;
