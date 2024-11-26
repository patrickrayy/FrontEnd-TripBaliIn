// import { fontFamily } from "html2canvas/dist/types/css/property-descriptors/font-family";
import React, { useRef } from "react";
import RecommendationList from "../components/RecList";

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
      margin: "20px, 0",
      padding: "10px" 
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
    },
    image: {
      width: "100%",
      height: "200px",
      padding: "10px",
      borderRadius: "10px",
    },
    location: {
      fontSize: "12px",
      fontFamily: "Montserrat, sans-serif",
      textAlign: "left"
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
    <div style={styles.container}>
    <div style={styles.card}>
      <img src={image} alt={title} style={styles.image} />
      <div style={styles.content}>
        <h3 style={styles.title}>{title}</h3>
        <p style={styles.location}>{location}</p>
        <p style={styles.price}>IDR {price} / Night</p>
      </div>
    </div>
    </div>
  );
};

export default HotelCard;
