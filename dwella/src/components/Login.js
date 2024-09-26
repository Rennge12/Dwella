import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../styles/Login.css';

function Login() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [user, setUser] = useState(null);
  const login = (name, service_type) => {
    localStorage.setItem('name', name);
    localStorage.setItem('service_type', service_type);
    setUser({userId: name, service_type})
  }
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
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
      setFormData({
        fullName: '',
        email: '',
        password: '',
        confirmPassword: '',
        serviceType: '',
      });
      window.location.href = '/login';
      setErrors(null);
      const user = response.data.user;
      
    } catch (error) {
      if (error.response && error.response.data.errors) {
        setErrors(error.response.data.errors);
      }
      console.error('Registration error:', error);
    }
  };
  
 
    
  
    const handleLogin = async (e) => {
      e.preventDefault();
      try {
        const response = await axios.post('http://localhost:8000/api/login', { email, password });
        console.log(response.data);
  
        if (response.data.status === 'success') {
          const { userID, service_type } = response.data;
          login(userID, email, service_type);
          if (response.data.serviceType === 'offering') {
            console.log("sie rieksti");
            navigate('/AddListing');
        } else if (response.data.serviceType === 'using') {
          console.log("sie rieks");
            navigate('/ViewListings');
        }
        }
      } catch (error) {
        console.error('Login error:', error);
      }
    };
  

  return (
    <div className="login-signup-section">
      {!isSignUp ? (
        <div className="login-form">
          <h2>Ienākt</h2>
          <form onSubmit={handleLogin}>
            <div>
              <label>E-pasts: </label>
              <input type="text" name="email" value={email}
              onChange={(e) => setEmail(e.target.value)}/>
            </div>
            <div>
              <label>Parole: </label>
              <input type="password" name="password" value={password}
              onChange={(e) => setPassword(e.target.value)}/>
            </div>
            <button type="submit">Ienākt</button>
          </form>
          <p>Nav konta? <button className="switch-button" onClick={handleSignUpSwitch}>Reģistrēties </button></p>
        </div>
      ) : (
        <div className="signup-form">
          <h2>Reģistrēties</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <label>Vārds: </label>
              <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} />
            </div>
            <div>
              <label>E-pasts: </label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} />
            </div>
            <div>
              <label>Parole: </label>
              <input type="password" name="password" value={formData.password} onChange={handleChange} />
            </div>
            <div>
              <label>Parole atkārtoti: </label>
              <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} />
            </div>
            <div>
              <label>Sniegsi vai saņemsi pakalpojumu?</label>
              <select name="serviceType" value={formData.serviceType} onChange={handleChange}>
                <option value="">Izvēlies</option>
                <option value="offering">Sniedzu pakalpojumu</option>
                <option value="using">Saņemšu pakalpojumu</option>
              </select>
            </div>
            <button type="submit" onClick={handleSubmit}>Reģistrēties</button>
          </form>
          {errors && (
            <div className="error-messages">
              {Object.keys(errors).map((field) => (
                <p key={field} className="error">{errors[field][0]}</p>
              ))}
            </div>
          )}
          <p>Jau ir konts? <button className="switch-button" onClick={handleSignUpSwitch}>Ienākt</button></p>
        </div>
      )}
    </div>
  );
};

export default Login;
