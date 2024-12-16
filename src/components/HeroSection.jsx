import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const HeroSection = ({ onSearch }) => {
  const handleInputChange = (event) => {
    const query = event.target.value;
    if (onSearch) onSearch(query); // Call the search function from parent
  };

  return (
    <div style={styles.heroSection}>
      <div style={styles.textContainer}>
        <h1 style={styles.texbig}>In Bali, holidays become more meaningful!</h1>
        <p style={styles.textp}>
          Find the best tourist attractions here, we will help you on your adventure!
        </p>
        <div style={styles.searchBar}>
          <input
            type="text"
            placeholder="Search destination, location, & price"
            style={styles.searchInput}
            onChange={handleInputChange} // Call when input changes
          />
          <button style={styles.searchButton}>
            <FontAwesomeIcon icon={faSearch} /> Search
          </button>
        </div>
      </div>
      <img src="/assets/images/1.png" alt="Bali" style={styles.heroImage} />
    </div>
  );
};

const styles = {
  heroSection: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '0px',
    backgroundColor: '#E6F0FA',
    borderRadius: '15px',
    margin: '60px',
    marginLeft: '250px',
    height: '566px',
    width: '1220px',
    position: 'relative',
    borderTopLeftRadius: '10px', 
    borderTopRightRadius: '10px',
    borderBottomLeftRadius: '0',  
    borderBottomRightRadius: '0',
    top: '70px',
    marginBottom: '130px',
    fontFamily: 'Montserrat, sans-serif',
    fontWeight: 600,
  },
  textContainer: {
    maxWidth: '50%',
    zIndex: 1, 
    fontFamily: 'Montserrat, sans-serif',
    fontWeight: 500,
    color: 'black',
    padding: '40px',
    fontSize: '100px',  
  },
  texbig: {
    fontSize: '3.5rem',
    fontFamily: 'Montserrat, sans-serif',
    fontWeight: 500,
    color: 'black',
    textAlign: 'left',
  },
  textp: {
    fontSize: '1.25rem',
    fontFamily: 'Montserrat, sans-serif',
    fontWeight: 100,
    color: '#797A7B',
    textAlign: 'left',
  },
  searchBar: {
    backgroundColor: 'white',
    position: 'absolute',
    top: '100%',
    left: '10%',
    width: '80%',
    height: '72px',
    transform: 'translateY(-50%)',
    display: 'flex',
    alignItems: 'center',
    borderRadius: '280px', 
    boxShadow: '0px 8px 10px rgba(0, 0, 0, 0.2)',
    fontFamily: 'Montserrat, sans-serif',
    overflow: 'hidden',
    border: 'none',
  },
  searchInput: {
    flex: 1,                         
    padding: '32px',
    backgroundColor: 'white',
    fontSize: '18px',
    border: 'none',
    outline: 'none',
    color: '#000000',
    fontFamily: 'Open Sans, sans-serif',
    transition: 'all 0.3s',
  },
  searchButton: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '10px 20px',
    backgroundColor: '#0F67B1',
    color: 'white',
    borderRadius: '280px',           
    cursor: 'pointer',
    fontSize: '16px',
    border: 'none',
    fontFamily: 'Open Sans, sans-serif',
    height: '100%',
    width: '176px',
    gap: '8px',
  },
  heroImage: {
    position: 'flex',
    width: '50vw',
    height: '100%',
    borderRadius: '15px',
    objectFit: 'cover',
    borderTopLeftRadius: '0px',  
    borderTopRightRadius: '25px',
    borderBottomLeftRadius: '0',  
    borderBottomRightRadius: '0',
    top: 0,
    right: 0,
    translateX: '50%',
  },

  // Responsive design for smaller screens
  '@media (max-width: 1024px)': {
    heroSection: {
      flexDirection: 'column',
      marginLeft: '50px',
      marginRight: '50px',
    },
    textContainer: {
      maxWidth: '100%',
      fontSize: '50px',
    },
    texbig: {
      fontSize: '2rem',
    },
    searchBar: {
      top: '120%',
      left: '10%',
      width: '80%',
    },
    heroImage: {
      width: '100%',
      height: '300px',
    },
  },

  '@media (max-width: 768px)': {
    heroSection: {
      marginLeft: '20px',
      marginRight: '20px',
    },
    searchButton: {
      fontSize: '14px',
      width: '150px',
      padding: '8px 16px',
    },
    searchInput: {
      padding: '20px',
      fontSize: '16px',
    },
    texbig: {
      fontSize: '1.5rem',
    },
  },
};

export default HeroSection;
