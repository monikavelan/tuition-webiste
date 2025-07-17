import React, { useState } from 'react';
import '../styles/navbar.css';
import { Link, useNavigate } from 'react-router-dom';
import logoIcon from '../assets/video-tutorials.png';
import { FaTimes, FaBars } from 'react-icons/fa';

const Navbar = () => {
  const [showRegisterDropdown, setShowRegisterDropdown] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavLinkClick = () => {
    setIsMobileMenuOpen(false);
    setShowRegisterDropdown(false);
  };

  const handleLogout = () => {
    localStorage.removeItem('userRole');
    handleNavLinkClick();
    navigate('/login');
  };

  const getDashboardLink = () => {
    const role = localStorage.getItem('userRole');
    switch (role) {
      case 'admin':
        return '/admin-dashboard';
      case 'teacher':
        return '/teacher-dashboard';
      case 'student':
        return '/student-dashboard';
      default:
        return '/login';
    }
  };

  const isLoggedIn = !!localStorage.getItem('userRole');

  return (
    <nav className="main-navbar">
      <div className="nav-logo">
        <img src={logoIcon} alt="logo" className="logo-img" />
        <h2>Online Tuition</h2>
      </div>

      <div
        className="hamburger"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
      </div>
{/* 
      <ul className={nav-links ${isMobileMenuOpen ? 'mobile-open' : ''}}> */}
      <ul className={`nav-links ${isMobileMenuOpen ? 'mobile-open' : ''}`}>

        <li><Link to="/" onClick={handleNavLinkClick}>Home</Link></li>
        <li><Link to={getDashboardLink()} onClick={handleNavLinkClick}>Dashboard</Link></li>
        <li><Link to="/explore-more" onClick={handleNavLinkClick}>Explore More</Link></li>

        {!isLoggedIn && (
          <li><Link to="/login" onClick={handleNavLinkClick}>Login</Link></li>
        )}

        {!isLoggedIn && (
          <li
            className="register-dropdown"
            onMouseEnter={() => setShowRegisterDropdown(true)}
            onMouseLeave={() => !isMobileMenuOpen && setShowRegisterDropdown(false)}
          >
            <span
              className="register-link"
              onClick={() => setShowRegisterDropdown(!showRegisterDropdown)}
            >
              Register ▾
            </span>

            {(showRegisterDropdown || isMobileMenuOpen) && (
              <ul className="dropdown-menu">
                <li><Link to="/register/student" onClick={handleNavLinkClick}>Student</Link></li>
                <li><Link to="/register/teacher" onClick={handleNavLinkClick}>Teacher</Link></li>
                <li><Link to="/admin-register" onClick={handleNavLinkClick}>Admin</Link></li>
              </ul>
            )}
          </li>
        )}

        {isLoggedIn && (
          <li>
            <span
              onClick={handleLogout}
              style={{ cursor: 'pointer', color: 'white', fontSize: '18px' }}
            >
              Logout
            </span>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;