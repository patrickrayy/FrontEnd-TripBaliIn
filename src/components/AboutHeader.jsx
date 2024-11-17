// src/components/AboutHeader.jsx
import { width } from "@fortawesome/free-brands-svg-icons/fa42Group";
import React from "react";

const AboutHeader = ({ title, backgroundImage }) => {
  const styles = {
    header: {
        width: '1440px',
      textAlign: 'center',
      padding: '40px 0',
      fontFamily: 'Montserrat, sans-serif',
      width: '100%',
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
    },
    title: {
      margin: 0,
      fontSize: '50px',
      fontWeight: '650',
    },
    image: {
      marginTop: '30px',
      width: '100%',
      height: 'auto',
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
