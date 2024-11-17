import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [hovered, setHovered] = useState(null);

  const handleMouseEnter = (index) => setHovered(index);
  const handleMouseLeave = () => setHovered(null);

  const links = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/itinerary', label: 'Itinerary' },
    { path: '/contact', label: 'Contact' },
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
              }}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
              key={link.label}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
      <div style={styles.buttonContainer}>
        <button style={styles.button}>Login</button>
        <button style={styles.registerButton}>Register</button>
      </div>
    </nav>
  );
};

const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0',
    backgroundColor: '#0F67B1',
    color: 'white',
    width: '100%',
    height: '102px',
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: 1000,
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
    transition: 'font-weight 0.3s ease',
  },
  buttonContainer: {
    display: 'flex',
    alignItems: 'center',
    marginRight: '120px',
    gap: '10px',
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
};

export default Navbar;
