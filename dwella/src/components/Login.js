import React, { useState } from 'react';
import axios from 'axios';
import '../Login.css';

const Login = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    serviceType: '',
  });
  const [errors, setErrors] = useState(null);

  const handleSignUpSwitch = () => {
    setIsSignUp(!isSignUp);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      setErrors({ password: ['Passwords do not match'] });
      return;
    }

    try {
      const response = await axios.post('http://localhost:8000/api/register', {
        name: formData.fullName,
        email: formData.email,
        password: formData.password,
        password_confirmation: formData.confirmPassword,
        service_type: formData.serviceType,
      });

      console.log('User registered successfully:', response.data);
      // Reset the form or redirect the user to another page after successful registration
      setFormData({
        fullName: '',
        email: '',
        password: '',
        confirmPassword: '',
        serviceType: '',
      });
      setErrors(null);  // Clear errors on success
    } catch (error) {
      if (error.response && error.response.data.errors) {
        setErrors(error.response.data.errors);
      }
      console.error('Registration error:', error);
    }
  };

  return (
    <div className="login-signup-section">
      {!isSignUp ? (
        <div className="login-form">
          <h2>Log In</h2>
          <form>
            <div>
              <label>Email: </label>
              <input type="email" name="email" />
            </div>
            <div>
              <label>Password: </label>
              <input type="password" name="password" />
            </div>
            <button type="submit">Log In</button>
          </form>
          <p>Don't have an account? <button className="switch-button" onClick={handleSignUpSwitch}>Sign Up</button></p>
        </div>
      ) : (
        <div className="signup-form">
          <h2>Sign Up</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <label>Full Name: </label>
              <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} />
            </div>
            <div>
              <label>Email: </label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} />
            </div>
            <div>
              <label>Password: </label>
              <input type="password" name="password" value={formData.password} onChange={handleChange} />
            </div>
            <div>
              <label>Confirm Password: </label>
              <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} />
            </div>
            <div>
              <label>Are you offering a service or using a service?</label>
              <select name="serviceType" value={formData.serviceType} onChange={handleChange}>
                <option value="">Select an option</option>
                <option value="offering">Offering a Service</option>
                <option value="using">Using a Service</option>
              </select>
            </div>
            <button type="submit" onClick={handleSubmit}>Sign Up</button>
          </form>
          {errors && (
            <div className="error-messages">
              {Object.keys(errors).map((field) => (
                <p key={field} className="error">{errors[field][0]}</p>
              ))}
            </div>
          )}
          <p>Already have an account? <button className="switch-button" onClick={handleSignUpSwitch}>Log In</button></p>
        </div>
      )}
    </div>
  );
};

export default Login;
