import React from "react";

const VillaCard = ({ title, price, persons, bedrooms, hasPool, image }) => {
  const styles = {
    card: {
      width: "357px",
      height: "364px",
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
    //   objectFit: "cover",
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
    details: {
      display: "flex",
    //   justifyContent: "space-between",
      fontSize: "14px",
      color: "#555",
      marginBottom: "5px",
      gap: "12px", 
    },
    detailText: {
      display: "flex",
      alignItems: "center",
      fontWeight: '550'
    },
    icon: {
      marginRight: "5px",
      width: "20px",
      height: "15px",
      objectFit: "contain",
    },
  };

  return (
    <div style={styles.card}>
      <img src={image} alt={title} style={styles.image} />
      <div style={styles.content}>
        <h3 style={styles.title}>{title}</h3>
        <p style={styles.price}>IDR {price} / Night</p>
        <div style={styles.details}>
          <div style={styles.detailText}>
            <img
              src="/assets/images/Suitcase.png"
              alt="Persons"
              style={styles.icon}
            />
            {persons} Person
          </div>
          <div style={styles.detailText}>
            <img
              src="/assets/images/Bed.png"
              alt="Bedrooms"
              style={styles.icon}
            />
            {bedrooms} Bedroom
          </div>
          <div style={styles.detailText}>
            <img
              src="/assets/images/Swimming.png"
              alt="Pool"
              style={styles.icon}
            />
            {hasPool ? "Yes" : "No"} 
          </div>
        </div>
      </div>
    </div>
  );
};

export default VillaCard;
