import React, { useRef } from "react";
import RecommendationList from "../components/RecList";

const ScrollableCard = ({ title, recommendations }) => {
  const containerRef = useRef(null);

  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: -200,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: 200,
        behavior: "smooth",
      });
    }
  };

  const styles = {
    recommendationWrapper: {
      position: "relative",
      marginBottom: "45px",
    },
    recommendationContainer: {
      display: "flex",
      gap: "20px",
      overflow: "hidden",
      // padding: "20px 0",
      paddingLeft: "10px", 
      paddingRight: "10px", 
    },
    button: {
      position: "absolute",
      top: "50%",
      transform: "translateY(-50%)",
      backgroundColor: "#0F67B1",
      border: "none",
      borderRadius: "50%",
      width: "40px",
      height: "40px",
      cursor: "pointer",
      zIndex: 1,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    leftButton: {
      left: "-25px",
    },
    rightButton: {
      right: "-25px",
    },
    title: {
      fontFamily: "Montserrat, sans-serif",
      fontWeight: 650,
      fontSize: "24px",
      marginBottom: "-60px",
      textAlign: "left",
      marginTop: "55px",
      marginLeft: "90px",
    },
    imageButton: {
      width: "15px",
      height: "15px",
    },
    leftimageButton: {
      width: "15px",
      height: "15px",
      transform: "rotate(180deg)",
    },
  };

  return (
    <div style={styles.recommendationWrapper}>
      <h2 style={styles.title}>{title}</h2>
      <button
        style={{ ...styles.button, ...styles.leftButton }}
        onClick={scrollLeft}
      >
        <img
          src="/assets/images/arrow.png"
          alt="Left Arrow"
          style={styles.leftimageButton}
        />
      </button>
      <div ref={containerRef} style={styles.recommendationContainer}>
        <RecommendationList recommendations={recommendations} />
      </div>
      <button
        style={{ ...styles.button, ...styles.rightButton }}
        onClick={scrollRight}
      >
        <img
          src="/assets/images/arrow.png"
          alt="Right Arrow"
          style={styles.imageButton}
        />
      </button>
    </div>
  );
};

export default ScrollableCard;
