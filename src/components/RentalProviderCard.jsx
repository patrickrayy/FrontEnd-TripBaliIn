import React from "react";
import { Link } from "react-router-dom";
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
      <div className="company-identity">
        <h1 style={styles.companyName}>{companyName}</h1>
        <div style={styles.rating}>
          {Array.from({ length: 5 }, (_, index) => (
            <FontAwesomeIcon
              key={index}
              icon={faStar}
              style={{
                color: index < ratingStar ? "#FFD700" : "#D3D3D3",
              }}
            />
          ))}
        </div>
        <h2 style={styles.reviewValue}>{reviewValue} Reviews</h2>
      </div>

      <h1 style={styles.titleHeader}>Which travelers like</h1>

      <div style={styles.detailSection} className="detail-section">
        {/* Deskripsi */}
        <div style={styles.description} className="description">
          <div style={styles.benefits} className="benefits">
            <p>Cleanliness</p>
            <p>Easy on-site pick-up and return process</p>
            <p>Staff attitude is serving</p>
          </div>

          <div style={styles.provision} className="provision">
            <span style={styles.singleProvision}>
              <img
                style={styles.imageProvision}
                src="/assets/images/Clock.png"
                alt="clock"
              />
              <p>1 day price for 24 hours use</p>
            </span>
            <span style={styles.singleProvision}>
              <img
                style={styles.imageProvision}
                src="/assets/images/Checkmark.png"
                alt="checkmark"
              />
              <p>Motorcycle insurance</p>
            </span>
            <span style={styles.singleProvision}>
              <img
                style={styles.imageProvision}
                src="/assets/images/Checkmark.png"
                alt="checkmark"
              />
              <p>Can be refunded</p>
            </span>
          </div>
        </div>

        {/* Harga */}
        <div style={styles.price} className="price">
          <h1 style={styles.prices}>
            <span style={styles.totalPrice}>{totalPrice}</span> total
            <br />
            {perDayPrice}/day
          </h1>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    margin: "20px 0 0 0",
    padding: "25px",
    borderRadius: "6px",
    boxShadow: "0px 2px 4px 2px rgba(0,0,0,0.27)",
  },
  companyName: {
    fontSize: "20px",
    fontWeight: "bold",
    textAlign: "left",
  },
  rating: {
    margin: "-8px 0 0 0",
    textAlign: "left",
  },
  reviewValue: {
    fontSize: "12px",
    fontWeight: "400",
    textAlign: "left",
  },
  titleHeader: {
    fontSize: "17px",
    fontWeight: "bold",
    margin: "30px 0 10px 0",
    textAlign: "left",
  },
  detailSection: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  description: {
    width: "50%",
    display: "flex",
    textAlign: "left",
  },
  benefits: {
    lineHeight: "10px",
    width: "50%"
  },
  provision: {
    lineHeight: "10px",
    width: "50%"
  },
  singleProvision: {
    display: "flex"
  },
  imageProvision: {
    height: "15px",
    width: "15px",
    margin: "0 30px"
  },
  totalPrice: {
    fontSize: "16px",
    fontWeight: "bold",
    color: "#E83F3A"
  },
  price: {
    textAlign: "right"
  },
  prices: {
    fontSize: "12px",
    fontWeight: "400"
  },
};

export default RentalProviderCard;