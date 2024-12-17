import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const RentalProviderCard = ({
  companyName,
  ratingStar,
  reviewValue,
  totalPrice,
  perDayPrice,
}) => {
  return (
    <div style={styles.container}>
      {/* Company Identity */}
      <div style={styles.header}>
        <div style={styles.companyInfo}>
          <h1 style={styles.companyName}>{companyName}</h1>
          <div style={styles.rating}>
            {Array.from({ length: 5 }, (_, index) => (
              <FontAwesomeIcon
                key={index}
                icon={faStar}
                style={{
                  color: index < ratingStar ? "#FFD700" : "#D3D3D3",
                  marginRight: "5px",
                }}
              />
            ))}
          </div>
          <p style={styles.reviewValue}>{reviewValue} Reviews</p>
        </div>
      </div>

      {/* Section: Details */}
      <div style={styles.detailsContainer}>
        {/* Benefits Section */}
        <div style={styles.benefitsSection}>
          <h2 style={styles.sectionTitle}>What travelers like</h2>
          <ul style={styles.benefitsList}>
            <li>Cleanliness</li>
            <li>Easy pick-up and return process</li>
            <li>Friendly staff attitude</li>
          </ul>
        </div>

        {/* Provision Section */}
        <div style={styles.provisionSection}>
          <h2 style={styles.sectionTitle}>Provision</h2>
          <div style={styles.provisionList}>
            <div style={styles.singleProvision}>
              <img src="/assets/images/Clock.png" alt="clock" style={styles.icon} />
              <p>1 day price for 24 hours use</p>
            </div>
            <div style={styles.singleProvision}>
              <img src="/assets/images/Checkmark.png" alt="checkmark" style={styles.icon} />
              <p>Motorcycle insurance</p>
            </div>
            <div style={styles.singleProvision}>
              <img src="/assets/images/Checkmark.png" alt="checkmark" style={styles.icon} />
              <p>Can be refunded</p>
            </div>
          </div>
        </div>

        {/* Pricing Section */}
        <div style={styles.priceSection}>
          <h3 style={styles.totalPrice}>{totalPrice} total</h3>
          <p style={styles.perDayPrice}>{perDayPrice} / day</p>
        </div>
      </div>    
      <div>
          <button style={styles.bookButton}> Book Now </button>
        </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    marginBottom: "20px",
    backgroundColor: "#fff",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "10px",
  },
  companyInfo: {
    textAlign: "left",
  },
  companyName: {
    fontSize: "20px",
    fontWeight: "bold",
    margin: "0",
  },
  rating: {
    display: "flex",
    alignItems: "center",
    margin: "5px 0",
  },
  reviewValue: {
    fontSize: "12px",
    color: "#555",
  },
  detailsContainer: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "20px",
  },
  benefitsSection: {
    flex: 1,
    marginRight: "20px",
    textAlign: 'left'
  },
  provisionSection: {
    flex: 1,
    marginRight: "20px",
    textAlign: 'left'
  },
  sectionTitle: {
    fontSize: "16px",
    fontWeight: "600",
    marginBottom: "10px",
  },
  benefitsList: {
    padding: "0",
    margin: "0",
    listStyleType: "none",
    lineHeight: "1.8",
  },
  provisionList: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    textAlign: 'left'
  },
  singleProvision: {
    display: "flex",
    alignItems: "center",
    textAlign: 'left'
  },
  icon: {
    width: "20px",
    height: "20px",
    marginRight: "10px",
    marginBottom: '20px'
  },
  priceSection: {
    textAlign: "right",
    fontWeight: "bold",
  },
  totalPrice: {
    fontSize: "18px",
    color: "#E83F3A",
    margin: "0",
  },
  perDayPrice: {
    fontSize: "14px",
    color: "#555",
  },
  bookButton: {
    display: 'flex',
    marginLeft: '435px',
    borderRadius: '10px',
    backgroundColor: '#0F67B1',
    fontFamily: 'Montserrat, sans-serif'
  }
};

export default RentalProviderCard;
