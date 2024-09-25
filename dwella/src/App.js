import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home.js';
import About from './components/About.js';
import Contacts from './components/Contacts.js';
import Services from './components/Services.js';
import Login from './components/Login.js';
import AddListing from './components/AddListing';
import ViewListings from './components/ViewListings';
import './App.css';

const App = () => {
  return (
    <Router> 
    <div className="App">
        {/* Navigation Bar */}
        <nav className="navbar">
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contacts">Contacts</Link></li>
            <li><Link to="/services">Provide Your Service</Link></li>
            <li><Link to="/login">Log In</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/services" element={<Services />} />
          <Route path="/login" element={<Login />} />
          <Route path="/AddListing" element={<AddListing />} />
          <Route path="/ViewListings" element={<ViewListings />} />
        </Routes>
      </div>
    </Router>
      
  );
};

export default App;
