import React from 'react';
import { useNavigate } from 'react-router-dom';

const ItineraryContent = () => {
  const navigate = useNavigate();

  const styles = {
    textContainer: {
      display: 'flex',
      backgroundColor: '#C0DFF8',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'flex-start',
      maxWidth: '80%', // Adjust for responsiveness
      padding: '40px',
      fontFamily: 'Montserrat, sans-serif',
      zIndex: 1,
      color: 'black',
      fontSize: '16px', // Make font size responsive
    },
    textfront: {
      fontSize: '2.5rem', // Use rem for better responsiveness
      fontWeight: 600,
      color: 'black',
      textAlign: 'left',
      marginBottom: '10px',
    },
    textp: {
      fontSize: '1.25rem', // Use rem for better responsiveness
      fontWeight: 400,
      color: 'black',
      textAlign: 'left',
      marginBottom: '20px',
    },
    button: {
      padding: '12px 24px',
      fontSize: '1.5rem',
      backgroundColor: '#0F67B1',
      color: '#fff',
      border: 'none',
      borderRadius: '10px',
      cursor: 'pointer',
      fontWeight: 'bold',
      transition: 'background-color 0.3s',
    },
    buttonHover: {
      backgroundColor: '#0b4e80', // Darker shade for hover effect
    },
    
  };

  const handleButtonClick = () => {
    navigate('/itinerarycreator');
  };

  return (
    <div style={styles.textContainer}>
      <h1 style={styles.textfront}>Ready to make your vacation more planned?</h1>
      <p style={styles.textp}>
        Plan your dream vacation! Arrange an itinerary now and enjoy a hassle-free trip!
      </p>
      <button
        style={styles.button}
        onClick={handleButtonClick}
        onMouseOver={(e) => e.target.style.backgroundColor = styles.buttonHover.backgroundColor}
        onMouseOut={(e) => e.target.style.backgroundColor = styles.button.backgroundColor}
      >
        Create Your Itinerary!
      </button>
    </div>
  );
};

export default ItineraryContent;

// @media (max-width: 768px) {
//   .textContainer {
//     max-width: 90%;
//     padding: 20px;
//   }
//   .textfront {
//     font-size: 1.8rem;
//   }
//   .textp {
//     font-size: 1rem;
//   }
//   .button {
//     font-size: 1.2rem;
//     padding: 10px 20px;
//   }
// }
