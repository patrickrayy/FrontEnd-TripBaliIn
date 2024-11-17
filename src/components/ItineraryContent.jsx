import React from 'react';

const ItineraryContent = () => {
  const styles = {
    textContainer: {
      display: 'flex',
      backgroundColor: '#C0DFF8',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'flex-start',
      maxWidth: '50%',
      zIndex: 1,
      fontFamily: 'Montserrat, sans-serif',
      fontWeight: 500,
      color: 'black',
      padding: '40px',
      fontSize: '50px',
    },
    textfront: {
      fontSize: '60px',
      fontFamily: 'Montserrat, sans-serif',
      fontWeight: 600,
      color: 'black',
      textAlign :'left',
    },
    textp: {
      fontSize: '20px',
      alignItems: 'left',
      fontFamily: 'Montserrat, sans-serif',
      fontWeight: 400,
      color: 'black',
      textAlign :'left',
    },
    button: {
      marginTop: '0px',
      padding: '10px 20px',
      fontSize: '24px',
      backgroundColor: '#0F67B1',
      color: '#fff',
      border: 'none',
      borderRadius: '10px',
      cursor: 'pointer',
      fontWeight: 'bold',
    },
  };

  return (
    <div style={styles.textContainer}>
      <h1 style={styles.textfront}>Ready to make your vacation more planned?</h1>
      <p style={styles.textp}>
        Plan your dream vacation! Arrange an itinerary now and enjoy a hassle-free trip!
      </p>
      <button style={styles.button}>Create Your Itinerary !</button>
    </div>
  );
};

export default ItineraryContent;
