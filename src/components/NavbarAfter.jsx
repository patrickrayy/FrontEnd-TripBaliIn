import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const NavbarAfter = ({ isLoggedIn, setIsLoggedIn }) => {
  const [hovered, setHovered] = useState(null);
  const navigate = useNavigate();

  const handleMouseEnter = (index) => setHovered(index);
  const handleMouseLeave = () => setHovered(null);

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn'); 
    navigate('/login'); 
  };

  const links = [
    { path: '/home', label: 'Home' },
    { path: '/aboutafter', label: 'About' },
    { path: '/IteneraryAfter', label: 'Itinerary' },
    { path: '/contactafter', label: 'Contact' },
  ];

  return (
    <nav style={styles.navbar}>
      <div style={styles.logo}>
        <img src="/assets/images/tripbaliin.png" alt="Logo" style={styles.logoImage} />
      </div>
      <div style={styles.navLinks}>
        <div style={styles.navLinksnav}>
          {links.map((link, index) => (
            <Link
              to={link.path}
              style={{
                ...styles.link,
                fontWeight: hovered === index ? 'bold' : 'normal',
                transition: 'font-weight 0.2s ease-in-out',
              }}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
              key={link.label}
              aria-label={link.label} 
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
      <div style={styles.rightContainer}>
        {/* Profile and Logout Button */}
        <div style={styles.profileContainer}>
          <Link to="/profile" aria-label="Go to Profile">
            <img
              src="/assets/images/profil.png"
              alt="Profile"
              style={styles.profileIcon}
            />
          </Link>
          <button
            style={styles.logoutButton}
            onClick={handleLogout}
            aria-label="Logout"
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
};

const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 20px', 
    backgroundColor: '#0F67B1',
    color: 'white',
    width: '100%',
    height: '102px',
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: 1000,
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', 
  },
  logo: {
    display: 'flex',
    marginLeft: '100px'
  },
  logoImage: {
    width: '130px',
  },
  navLinks: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center', 
  },
  navLinksnav: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    fontFamily: 'Montserrat, sans-serif',
    fontSize: '20px',
  },
  link: {
    color: 'white',
    textDecoration: 'none',
    fontSize: '1em',
    padding: '10px',
    borderRadius: '5px',
    transition: 'background-color 0.3s ease',
  },
  rightContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  },
  profileContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  },
  profileIcon: {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    cursor: 'pointer',
    marginRight:''
  },
  logoutButton: {
    padding: '5px 15px',
    color: '#0F67B1',
    backgroundColor: '#FFFFFF',
    border: '1px solid white',
    borderRadius: '5px',
    cursor: 'pointer',
    fontFamily: 'Montserrat, sans-serif',
    fontWeight: '550',
  },
};

export default NavbarAfter;
