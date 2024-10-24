import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home.js';
import About from './components/About.js';
import Contacts from './components/Contacts.js';
import Services from './components/Services.js';
import Login from './components/Login.js';
import AddListing from './components/AddListing';
import ViewListings from './components/ViewListings';
import Header from './components/Header.js';
import Profile from './components/Profile.js';
import { AuthProvider } from './AuthProvider.js';
import './App.css';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          {/* Navigation Bar */}
          {/* <nav className="navbar">
          <ul className="nav-links">
            <li><Link to="/">Sākums</Link></li>
            <li><Link to="/about">Par mums</Link></li>
            <li><Link to="/contacts">Kontakti</Link></li>
            <li><Link to="/services">Piedāvā savu pakalpojumu</Link></li>
            <li><Link to="/login">Ienākt</Link></li>
          </ul>
        </nav> */}
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/services" element={<Services />} />
            <Route path="/login" element={<Login />} />
            <Route path="/AddListing" element={<AddListing />} />
            <Route path="/ViewListings" element={<ViewListings />} />
            <Route path="/Profile" element={<Profile />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;
