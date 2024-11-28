import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = ({ isLoggedIn, setIsLoggedIn }) => {
  const [hovered, setHovered] = useState(null);
  const navigate = useNavigate();

  const handleMouseEnter = (index) => setHovered(index);
  const handleMouseLeave = () => setHovered(null);

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('isLoggedIn');
    navigate('/login');
  };

  const loggedOutLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/itinerary', label: 'Itinerary' },
    { path: '/contact', label: 'Contact' },
  ];

  const loggedInLinks = [
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
          {(isLoggedIn ? loggedInLinks : loggedOutLinks).map((link, index) => (
            <Link
              to={link.path}
              style={{
                ...styles.link,
                fontWeight: hovered === index ? 'bold' : 'normal',
                transition: 'font-weight 0.2s ease-in-out', // Smooth transition
              }}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
              key={link.label}
              aria-label={link.label} // Accessibility improvement
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
      <div style={styles.rightContainer}>
        {!isLoggedIn ? (
          <>
            <button
              style={styles.button}
              onClick={() => navigate('/login')}
              aria-label="Login"
            >
              Login
            </button>
            <button
              style={styles.registerButton}
              onClick={() => navigate('/register')}
              aria-label="Register"
            >
              Register
            </button>
          </>
        ) : (
          <>
            <Link to="/profile" aria-label="Profile">
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
          </>
        )}
      </div>
    </nav>
  );
};

const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 20px', // Add padding to the left and right
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
    alignItems: 'center',
    marginLeft: '120px',
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
    marginRight: '120px',
    gap: '10px',
  },
  profileIcon: {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    cursor: 'pointer',
  },
  button: {
    padding: '5px 15px',
    color: 'white',
    backgroundColor: '#0F67B1',
    border: '1px solid white',
    borderRadius: '5px',
    cursor: 'pointer',
    fontFamily: 'Montserrat, sans-serif',
  },
  registerButton: {
    padding: '5px 15px',
    color: '#0F67B1',
    backgroundColor: '#FFFFFF',
    border: '1px solid white',
    borderRadius: '5px',
    cursor: 'pointer',
    fontFamily: 'Montserrat, sans-serif',
    fontWeight: '550',
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

export default Navbar;
