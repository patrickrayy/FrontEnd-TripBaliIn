import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ItineraryContent from '../components/ItineraryContent';
import ExploreImage from '../components/ExploreImages';

const ItineraryPage = () => {
  const styles = {
    itenerarySection: {
      display: 'flex',
      flexDirection: 'row', // Ensures the image and content are side-by-side
      justifyContent: 'space-between',
      padding: '0px',
      backgroundColor: '#E6F0FA',
      borderRadius: '10px',
      margin: '90px',
      height: '566px',
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
    heroImage: {
      width: '50%',
      height: '100%',
      objectFit: 'cover',
      borderTopLeftRadius: '10px',
      borderBottomLeftRadius: '10px',
      borderTopRightRadius: '0px',
      borderBottomRightRadius: '0px',
    },
    container: {
      maxWidth: '1200px',
      width: '100%',
      textAlign: 'center',
      fontFamily: 'Arial, sans-serif',
      padding: '20px 20px',
      margin: 'auto',
    },
    title: {
      fontFamily: 'Montserrat, sans-serif',
      fontSize: '32px',
      fontWeight: 'bold',
      marginBottom: '10px',
    },
    description: {
      fontFamily: 'Montserrat, sans-serif',
      fontSize: '16px',
      color: '#666',
      marginBottom: '40px',
    },
  };

  const images = {
    large: '/assets/images/exbali-1.png',
    medium1: '/assets/images/exbali-2.png',
    medium2: '/assets/images/exbali-3.png',
    small1: '/assets/images/exbali-4.png',
    small2: '/assets/images/exbali-5.png',
    small3: '/assets/images/exbali-6.png',
  };

  return (
    <>
      <Navbar />
      <div>
        {/* Hero Section */}
        <div style={styles.itenerarySection}>
          <img
            src="/assets/images/itinerary-1.png"
            alt="Itinerary"
            style={styles.heroImage}
          />
          <ItineraryContent />
        </div>

        {/* Explore Bali Section */}
        <div style={styles.container}>
          <h2 style={styles.title}>Explore Bali</h2>
          <p style={styles.description}>
            Discover the hidden beauty of Bali waiting to be explored! From white sandy beaches to calming green rice fields
          </p>
          <ExploreImage images={images} />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ItineraryPage;
