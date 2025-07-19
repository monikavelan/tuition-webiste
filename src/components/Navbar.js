import React, { useState } from 'react';
import '../styles/navbar.css';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import logoIcon from '../assets/video-tutorials.png';
import { FaTimes, FaBars } from 'react-icons/fa';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavLinkClick = () => {
    setIsMobileMenuOpen(false);
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
        <h2>ONLINE TUITION</h2>
      </div>

      <div
        className="hamburger"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        role="button"
        aria-label="Toggle navigation menu"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            setIsMobileMenuOpen(!isMobileMenuOpen);
          }
        }}
      >
        {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
      </div>
      <ul className={`nav-links ${isMobileMenuOpen ? 'mobile-open' : ''}`}>

        <li><NavLink to="/" onClick={handleNavLinkClick}>Home</NavLink></li>
        {isLoggedIn && (
          <>
            <li><NavLink to={getDashboardLink()} onClick={handleNavLinkClick}>Dashboard</NavLink></li>
            <li><NavLink to="/explore-more" onClick={handleNavLinkClick}>Explore More</NavLink></li>
          </>
        )}

        {!isLoggedIn && (
          <li><NavLink to="/login" onClick={handleNavLinkClick}>Login</NavLink></li>
        )}

        {!isLoggedIn && (
          <li
            className="register-dropdown"
          >
            <span
              className="register-link"
            >
              Register
            </span>

            {isMobileMenuOpen ? (
              <ul className="dropdown-menu">
                <li><NavLink to="/admin-register" onClick={handleNavLinkClick}>Admin</NavLink></li>
                <li><NavLink to="/register/teacher" onClick={handleNavLinkClick}>Teacher</NavLink></li>
                <li><NavLink to="/register/student" onClick={handleNavLinkClick}>Student</NavLink></li>
              </ul>
            ) : (
              <ul className="dropdown-menu">
                <li><NavLink to="/admin-register" onClick={handleNavLinkClick}>Admin</NavLink></li>
                <li><NavLink to="/register/teacher" onClick={handleNavLinkClick}>Teacher</NavLink></li>
                <li><NavLink to="/register/student" onClick={handleNavLinkClick}>Student</NavLink></li>
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