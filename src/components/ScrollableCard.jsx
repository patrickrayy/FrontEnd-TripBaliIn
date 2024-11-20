import React, { useRef } from "react";
import RecommendationList from "../components/RecList";

const ScrollableCard = ({ title, recommendations }) => {
  const containerRef = useRef(null);

  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: -300,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: 300,
        behavior: "smooth",
      });
    }
  };

  const styles = {
    recommendationWrapper: {
      position: "relative",
      marginBottom: "50px",
    },
    recommendationContainer: {
      display: "flex",
      gap: "20px",
      overflow: "hidden",
      padding: "20px 0",
    },
    button: {
      position: "absolute",
      top: "50%",
      transform: "translateY(-50%)",
      backgroundColor: "#0F67B1",
      color: "#fff",
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
      left: "-15px",
    },
    rightButton: {
      right: "-15px",
    },
    title: {
      fontFamily: "Montserrat, sans-serif",
      fontWeight: 650,
      fontSize: "24px",
      marginBottom: "-60px",
      textAlign: "Left",
      marginTop: "55px",
      marginLeft: "90px",
    },
  };

  return (
    <div style={styles.recommendationWrapper}>
      <h2 style={styles.title}>{title}</h2>
      <button
        style={{ ...styles.button, ...styles.leftButton }}
        onClick={scrollLeft}
      >
        {"<"}
      </button>
      <div ref={containerRef} style={styles.recommendationContainer}>
        <RecommendationList recommendations={recommendations} />
      </div>
      <button
        style={{ ...styles.button, ...styles.rightButton }}
        onClick={scrollRight}
      >
        {">"}
      </button>
    </div>
  );
};

export default ScrollableCard;
