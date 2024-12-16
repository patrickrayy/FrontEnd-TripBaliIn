import React, {useRef} from 'react';
import Slideshow from '../../components/Slideshow';
import Footer from '../../components/Footer';
import ExploreImage from '../../components/ExploreImages';
import PopularCategories from '../../components/PopularCategories';
import RecommendationCard from '../../components/RecCard';
import ReviewCard from '../../components/ReviewCard';
import NavbarAfter from '../../components/NavbarAfter';

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
    {
      id: 5,
      image: '/assets/images/homeimg-4.jpg',
      title: 'Tirta Gangga',
      duration: 'Duration 50 minute',
      facility: 'Transport Facility',
      price: 'IDR 572.000',
      viewers: '509',
      rating: 5,
    },
    {
      id: 6,
      image: '/assets/images/homeimg-5.jpg', 
      title: 'Sekumpul Waterfall',
      duration: 'Duration 180 minute',
      facility: 'Transport Facility',
      price: 'IDR 720.000',
      viewers: '680',
      rating: 4,
    },
    {
      id: 7,
      image: '/assets/images/homeimg-6.jpg',
      title: 'Ubud Monkey Forest',
      duration: 'Duration 120 minute',
      facility: 'Transport Facility',
      price: 'IDR 450.000',
      viewers: '950',
      rating: 5,
    },
    {
      id: 8,
      image: '/assets/images/homeimg-7.jpg', 
      title: 'Bali Swing',
      duration: 'Duration 90 minute',
      facility: 'Transport Facility',
      price: 'IDR 350.000',
      viewers: '700',
      rating: 4,
    },
    {
      id: 9,
      image: '/assets/images/homeimg-8.jpg', 
      title: 'Tegenungan Waterfall',
      duration: 'Duration 75 minute',
      facility: 'Transport Facility',
      price: 'IDR 500.000',
      viewers: '820',
      rating: 4,
    },
    {
      id: 10,
      image: '/assets/images/homeimg-9.jpg', 
      title: 'Lovina Beach',
      duration: 'Duration 240 minute',
      facility: 'Transport Facility',
      price: 'IDR 650.000',
      viewers: '400',
      rating: 3,
    },    
  ];

  const reviews = [
    {
        photo : '/assets/images/emily.png',
        name: 'Tyrone Smith',
        rating: 5,
        message: 'TripBaliIn really helped me manage my travel expenses, thanks TripBaliIn! ',
    },
    {
        photo : '/assets/images/lord.png',
        name: 'Martin Scorsese',
        rating: 5,
        message: 'Good trip. The team of TripBaliIn tours and travel was very supportive and maintained prompt communication with us . ',
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
    recommendationWrapper: {
      position: 'relative',
      maxWidth: '1200px',
      margin: '0 auto',
    },
    h1rec: {
      fontFamily: "Montserrat, sans-serif",
      fontWeight: "700",
      marginBottom: "40px",
      marginTop: "100px",
    },
    recommendationContainer: {
      display: 'flex',
      gap: '20px',
      overflow: 'hidden', 
      padding: '20px',
      position: 'relative',
    },
    cardContainer: {
      display: 'flex',
      gap: '20px',
      transition: 'transform 0.3s ease-in-out',
      transform: 'translateX(0)',
    },
    button: {
      position: 'absolute',
      top: '50%',
      transform: 'translateY(-50%)',
      backgroundColor: '#0F67B1',
      color: '#fff',
      border: 'none',
      borderRadius: '50%',
      width: '60px',
      height: '60px',
      cursor: 'pointer',
      zIndex: 1,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    leftButton: {
      left: '-15px',
    },
    rightButton: {
      right: '-20px',
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
    },
    scrollbutton: {
      transform: 'rotate(180deg)',
      width: '20px',
      height: '20px',
      objectFit: 'contain'
    },
    scrollbuttonright: {
      width: '20px',
      height: '20px',
      objectFit: 'contain'
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

  const containerRef = useRef(null);

  const scrollLeft = () => {
    containerRef.current.scrollBy({
      left: -300, 
      behavior: 'smooth',
    });
  };

  const scrollRight = () => {
    containerRef.current.scrollBy({
      left: 300, 
      behavior: 'smooth',
    });
  };

  return (
    <>
      {/* Navbar */}
      <NavbarAfter />

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
      <div style={styles.recommendationWrapper}>
        <h1 style={styles.h1rec}>Most Popular Destinations in Bali</h1>
      {/* Left Scroll Button */}
      <button
        style={{ ...styles.button, ...styles.leftButton }}
        onClick={scrollLeft}
      >
        <img 
        src="/assets/images/arrow.png"
        alt="Left Arrow" 
        style={styles.scrollbutton}
        />
      </button>
      <div ref={containerRef} style={styles.recommendationContainer}>
        <div style={styles.cardContainer}>
          {recommendations.map((item, index) => (
            <RecommendationCard key={index} item={item} />
          ))}
        </div>
      </div>
      {/* Right Scroll Button */}
      <button
        style={{ ...styles.button, ...styles.rightButton }}
        onClick={scrollRight}
      >
        <img 
        src="/assets/images/arrow.png"
        alt="Right Arrow" 
        style={styles.scrollbuttonright}
        />
      </button>
    </div>

      {/* Reviews Section */}
      <div style={styles.container}>
        <h2 style={styles.titleReview}>What Travelers Are Saying</h2>
        <p style={styles.quotes}>“I am a traveler and TripBaliIn Travels helps me a lot in finding interesting tourist destinations and of course the price offers is very worth it”.</p>
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
