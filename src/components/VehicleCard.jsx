import { Link } from "react-router-dom";
import React from 'react';


const VehicleCard = ({
  id,
  name,
  transmission,
  image,
  luggageValue,
  peopleValue,
  withDriver,
  fromPrice,
}) => {
  return (
    <div style={styles.container}>
      <div style={styles.sectionImage} className="section-image">
        <img style={styles.vehicleImage} src={image} alt={name} />
      </div>
      <div style={styles.sectionDetail} className="section-detail">
        <div style={styles.detailVehicle} className="detail-vehicle">
          <h1 style={styles.vehicleName}>{name}</h1>
          <h2 style={styles.transmission}>{transmission}</h2>
          <div style={styles.capacity}>
            <span style={styles.singleCapacity}>
              <img
                style={styles.capacityIcon}
                src="/assets/images/Suitcase.png"
                alt="luggage"
              />
              <p style={styles.capacityValue}>{luggageValue} Luggage</p>
            </span>
            <span style={styles.singleCapacity}>
              <img
                style={styles.capacityIcon}
                src="/assets/images/People.png"
                alt="people"
              />
              <p style={styles.capacityValue}>{peopleValue} People</p>
            </span>
          </div>
          <div style={styles.driverDetail}>
            <p style={styles.driver}>
              {withDriver ? "With Driver" : "Without Driver"}
            </p>
            <a href="#" style={styles.provider}>1 Provider Available</a>
          </div>
        </div>
        <div style={styles.priceSection} className="price">
          <h1 style={styles.price}>
            From
            <br />
            <span style={styles.priceValue}>{fromPrice}</span>/day
          </h1>
          <Link to={`/transportation/${id}`} style={styles.continueButton} href="/">
            Continue
          </Link>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    width: "75%",
    height: "170px",
    flexDirection: "row",
    padding: "20px",
    borderRadius: "6px",
    boxShadow: "0px 2px 4px 2px rgba(0,0,0,0.27)",
    margin: "25px auto 25px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },
  sectionImage: {
    width: "20%",
  },
  vehicleImage: {
    width: "150px",
  },
  sectionDetail: {
    padding: "20px",
    width: "80%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },
  detailVehicle: {
    width: "50%",
  },
  vehicleName: {
    fontSize: "20px",
    fontWeight: "bold",
    color: "black",
  },
  transmission: {
    fontSize: "12px",
    fontWeight: "400",
  },
  capacity: {
    display: "flex",
  },
  singleCapacity: {
    display: "flex",
    margin: "0 10px 0 0",
  },
  capacityIcon: {
    width: "15px",
    height: "15px",
    margin: "0 5px 0 0",
  },
  capacityValue: {
    fontSize: "12px",
    fontWeight: "500",
    color: "#6F6F6F",
  },
  driverDetail: {
    display: "flex",
  },
  driver: {
    fontSize: "12px",
  },
  provider: {
    fontSize: "12px",
    color: "#0F67B1",
    margin: "0 15px"
  },
  priceSection: {
    width: "50%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
  price: {
    fontSize: "12px",
    textAlign: "right"
  },
  priceValue: {
    fontSize: "16px",
    color: "#E83F3A",
  },
  continueButton: {
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
  },
};

export default VehicleCard;
