import React, { useRef } from "react";

const HotelCard = ({ title, location, price, image }) => {
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
    container: {
      display: "flex",
      overflow: "hidden",
      margin: "20px 0", // Fixed margin syntax
      padding: "10px",
      justifyContent: "center", // Ensure it's centered
    },
    card: {
      width: "288px",
      height: "324px",
      borderRadius: "10px",
      overflow: "hidden",
      boxShadow: "10px 10px 10px rgba(0, 0, 0, 0.1)",
      fontFamily: "Montserrat, sans-serif",
      margin: "20px",
      cursor: "pointer",
      transition: "transform 0.3s ease-in-out", // Smooth hover effect
    },
    cardHover: {
      transform: "scale(1.05)", // Hover effect for the card
    },
    image: {
      width: "100%",
      height: "200px",
      padding: "10px",
      borderRadius: "10px",
      objectFit: "cover", // Ensure the image maintains aspect ratio
    },
    location: {
      fontSize: "12px",
      fontFamily: "Montserrat, sans-serif",
      textAlign: "left",
    },
    content: {
      padding: "15px",
      backgroundColor: "#fff",
    },
    title: {
      fontSize: "20px",
      fontWeight: "700",
      marginBottom: "10px",
      color: "#333",
      textAlign: "left",
    },
    price: {
      fontSize: "18px",
      fontWeight: "700",
      color: "#E53935",
      marginBottom: "10px",
      textAlign: "left",
    },
  };

  return (
    <div style={styles.container} ref={containerRef}>
      <div style={{ ...styles.card, ...styles.cardHover }}>
        <img src={image} alt={title} style={styles.image} />
        <div style={styles.content}>
          <h3 style={styles.title}>{title}</h3>
          <p style={styles.location}>{location}</p>
          <p style={styles.price}>IDR {price} / Night</p>
        </div>
      </div>
      {/* Scroll buttons */}
      <button onClick={scrollLeft} style={buttonStyles}>{"<"}</button>
      <button onClick={scrollRight} style={buttonStyles}>{">"}</button>
    </div>
  );
};

const buttonStyles = {
  backgroundColor: "#0F67B1",
  color: "white",
  border: "none",
  padding: "10px 15px",
  borderRadius: "50%",
  cursor: "pointer",
  position: "absolute",
  top: "50%",
  transform: "translateY(-50%)",
};

export default HotelCard;
