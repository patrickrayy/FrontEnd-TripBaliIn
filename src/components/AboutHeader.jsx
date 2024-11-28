// src/components/AboutHeader.jsx
import React from "react";

const AboutHeader = ({ title, backgroundImage }) => {
  
  const styles = {
    header: {
      width: '100%',
      textAlign: 'center',
      padding: '0px 0',
      fontFamily: 'Montserrat, sans-serif',
      position: 'relative',
    },
    textContainer: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      zIndex: 1,
      color: '#fff',
      fontFamily: 'Montserrat, sans-serif',
      fontSize: '20px',
      padding: '0 15px', 
    },
    title: {
      margin: 0,
      fontSize: '50px',
      fontWeight: '650',
    },
    image: {
      width: '100%',
      height: 'auto',
    },
    '@media (max-width: 768px)': {
      title: {
        fontSize: '30px', 
      },
    },
  };

  return (
    <div style={styles.header}>
      <div style={styles.textContainer}>
        <h2 style={styles.title}>{title}</h2>
      </div>
      <img src={backgroundImage} alt="Header Background" style={styles.image} />
    </div>
  );
};

export default AboutHeader;
