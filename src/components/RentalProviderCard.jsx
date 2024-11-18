import { faStar, height, width } from "@fortawesome/free-solid-svg-icons/faStar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from 'react';

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
      <div style={styles.detailSection}
      className="detail-section">
        <div style={styles.description} className="description">
          <div style={styles.benefits} className="benefits">
              <p>Cleanless</p>
              <p>Easy on-site pick-up and return process</p>
              <p>Staff attitude is serving</p>
          </div>
          <div style={styles.provision} className="provision">
            <span style={styles.singleProvision}>
              <img style={styles.imageProvision} src="/asset/image/Clock.png" alt="clock" />
              <p>1 day price for 24 hours use</p>
            </span>
            <span style={styles.singleProvision}>
              <img style={styles.imageProvision} src="/asset/image/Checkmark.png" alt="checkmark" />
              <p>Motorcycle insurance</p>
            </span>
            <span style={styles.singleProvision}>
              <img style={styles.imageProvision} src="/asset/image/Checkmark.png" alt="checkmark" />
              <p>Can be refunded</p>
            </span>
          </div>
        </div>
        <div style={styles.price} className="price">
          <h1 style={styles.prices}>
            <span style={styles.totalPrice} >{totalPrice}</span> total
            <br />
            {perDayPrice}/day
          </h1>
          <button style={styles.chooseButton}>Choose</button>
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
  },
  rating: {
    margin: "-8px 0 0 0",
  },
  reviewValue: {
    fontSize: "12px",
    fontWeight: "400",
  },
  titleHeader: {
    fontSize: "17px",
    fontWeight: "bold",
    margin: "30px 0 10px 0"
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
  chooseButton: {
    backgroundColor: "#0F67B1",
    width: "150px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "10px",
    height: "33px",
    marginTop: "20px",
    fontSize: "14px",
    color: "white",
    textDecoration: "none",
  }
};

export default RentalProviderCard;
