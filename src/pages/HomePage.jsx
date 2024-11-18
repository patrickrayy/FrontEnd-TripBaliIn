import React from 'react';
import Slideshow from '../components/Slideshow';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ExploreImage from '../components/ExploreImages';
import PopularCategories from '../components/PopularCategories';
import RecommendationCard from '../components/RecCard';
import ReviewCard from '../components/ReviewCard';

const HomePage = () => {
  const recommendations = [
    {
      id: 1,
      image: '/assets/images/homeimg.png',
      title: 'Banyumania Twin Waterfall',
      duration: 'Duration 165 minute',
      facility: 'Transport Facility',
      price: 'IDR 816.000',
      viewers: '512',
      rating: 4,
    },
    {
      id: 2,
      image: '/assets/images/homeimg-1.png',
      title: 'Pantai Kelingking Nusa Penida',
      duration: 'Duration 160 minute',
      facility: 'Transport Facility',
      price: 'IDR 398.000',
      viewers: '892',
      rating: 5,
    },
    {
      id: 3,
      image: '/assets/images/homeimg-2.png',
      title: 'Pura Luhur Lempuyang',
      duration: 'Duration 150 minute',
      facility: 'Transport Facility',
      price: 'IDR 312.900',
      viewers: '722',
      rating: 5,
    },
    {
      id: 4,
      image: '/assets/images/homeimg-3.png',
      title: 'Tanah Lot',
      duration: 'Duration 90 minute',
      facility: 'Transport Facility',
      price: 'FREE',
      viewers: '432',
      rating: 4,
    },
    // {
    //   id: 5,
    //   image: '/assets/images/homeimg-4.jpg',
    //   title: 'Tirta Gangga',
    //   duration: 'Duration 50 minute',
    //   facility: 'Transport Facility',
    //   price: 'IDR 572.000',
    //   viewers: '509',
    //   rating: 5,
    // },
  ];

  const reviews = [
    {
        photo : '/assets/images/emily.png',
        name: 'Emily Smith',
        rating: 5,
        message: 'Good trip. The team of ON TRIP tours and travel was very supportive and maintained prompt communication with us . ',
    },
    {
        photo : '/assets/images/lord.png',
        name: 'Lord Martin',
        rating: 5,
        message: 'Good trip. The team of ON TRIP tours and travel was very supportive and maintained prompt communication with us . ',
    },
  ];

  const styles = {
    container: {
      maxWidth: '1200px',
      width: '100%',
      textAlign: 'center',
      fontFamily: 'Arial, sans-serif',
      padding: '20px 20px',
      margin: 'auto',
    },
    sectionSpacing: {
      marginBottom: '50px',
    },
    title: {
      fontFamily: 'Montserrat, sans-serif',
      fontSize: '40px',
      fontWeight: 'bold',
      marginBottom: '50px',
    },
    recommendationContainer: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '20px',
    //   justifyContent: 'center',
    },
    viewButtonContainer:{
        display: 'flex',
        justifyContent: 'center',
        marginTop: '60px',
    },
    viewButton: {
        backgroundColor: '#0F67B1',
        color: '#fff',
        width: '216px',
        height: '58px',
        fontFamily: 'Montserrat, sans-serif',
        fontSize: '20px',
        fontWeight: '550',
        border: 'none',
        borderRadius: '10px',
        cursor: 'pointer',
      },

    titleReview: {
        marginTop: '150px',
        fontSize: '48px',
        fontFamily: 'Montserrat',
        fontWeight: '550'
    },

    quotes: {
        marginTop: '55px',
        fontSize: '32px',
        fontFamily: 'Montserrat',
        fontStyle: 'italic',
    },

    reviewContainer: {
        marginTop: '70px',
        display: 'flex',
        gap: '101px',
        marginBottom: '50px',
    }
    
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
      {/* Navbar */}
      <Navbar />

      {/* Slideshow */}
      <div style={styles.sectionSpacing}>
        <Slideshow />
      </div>

      {/* Popular Categories Section */}
      <div style={{ ...styles.container, ...styles.sectionSpacing }}>
        <PopularCategories />
      </div>

      {/* Explore Bali Section */}
      <div style={{ ...styles.container, ...styles.sectionSpacing }}>
        <h2 style={styles.title}>Most Popular Destinations In Bali</h2>
        <ExploreImage images={images} />
      </div>

      {/* Recommendations Section */}
      <div style={styles.container}>
        <h2 style={styles.title}>Most Popular Destinations In Bali</h2>
        <div style={styles.recommendationContainer}>
          {recommendations.map((item) => (
            <RecommendationCard key={item.id} item={item} />
          ))}
        </div>
        <div style={styles.viewButtonContainer}>
            <button style={styles.viewButton}>View All</button>
        </div>
      </div>

      {/* Reviews Section */}
      <div style={styles.container}>
        <h2 style={styles.titleReview}>What Travelers Are Saying</h2>
        <p style={styles.quotes}>“I am a traveler and ON TRIP Travels helps me a lot in finding interesting tourist destinations and of course the price offers is very worth it”.</p>
        <div style={styles.reviewContainer}>
            {reviews.map((review, index) => (
                <ReviewCard key={index} reviewer={review} />
            ))}
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default HomePage;
