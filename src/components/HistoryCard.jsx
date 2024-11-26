import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const HistoryCard = ({
  companyName,
  ratingStar,
  totalPrice,
  reviewValue,
  image,
  address,
  roomDaysInfo,
  checkinDate,
  checkinTime,
  checkoutDate,
  checkoutTime,
}) => {
  return (
    <div style={styles.container}>
      <img style={styles.image} src={image} alt={companyName} />
      <div style={styles.content}>
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
        <div style={styles.address}>
          <span style={styles.singleProvision}>
            <img
              style={styles.imageProvision}
              src="/assets/images/loc.png"
              alt="loc"
            />
            {address}
          </span>
        </div>
        <div style={styles.reviewValue}>
          {reviewValue && (
            <span style={styles.singleProvision}>
              <img
                style={styles.imageProvision}
                src="/assets/images/ratereview.png"
                alt="icon"
              />
              {" - "}{reviewValue} reviews
            </span>
          )}
        </div>

       {/* Date Section */}
      <div style={styles.dateSection}>
        <div style={styles.checkIn}>
          <div style={styles.checkIn}>
            <p style={styles.label}>Check-in</p>
            <h1 style={styles.date}>{checkinDate}</h1>
            <p style={styles.time}>From {checkinTime}</p>
          </div>
          <div style={styles.checkOut}>
            <p style={styles.label}>Check-out</p>
            <h1 style={styles.date}>{checkoutDate}</h1>
            <p style={styles.time}>Until {checkoutTime}</p>
          </div>
        </div>
      </div>

      </div>
      <div style={styles.priceSection}>
        {roomDaysInfo && <p style={styles.roomDaysInfo}>{roomDaysInfo}</p>}
        <h1 style={styles.price}>{totalPrice}</h1>
        <p style={styles.taxesInfo}>Includes taxes</p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    border: "1px solid #ddd",
    borderRadius: "8px",
    margin: "20px 0",
    padding: "15px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    width: "100%",
    height: "240px",
    position: "relative",
  },
  image: {
    width: "340px",
    height: "210px",
    borderRadius: "8px",
    objectFit: "cover",
    marginRight: "15px",
    objectFit: "cover",
  },
  content: {
    flex: 1,
  },
  companyName: {
    fontSize: "18px",
    fontWeight: "bold",
    margin: "0 0 5px 0",
    textAlign: "left",
  },
  address: {
    fontSize: "14px",
    color: "#6F6F6F",
    marginBottom: "10px",
    textAlign: "left",
  },
  rating: {
    display: "flex",
    alignItems: "center",
    marginBottom: "10px",
  },
  reviewValue: {
    fontSize: "12px",
    color: "#6F6F6F",
    marginLeft: "5px",
    textAlign: "left",
  },
  dateSection: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    height: "5px", // Tetapkan tinggi tetap
    marginTop: "20px",
    alignItems: "flex-start",
    position: "relative",
  },
  checkIn: {
    textAlign: "left",
    flex: 1, // Membagi ruang secara proporsional
    paddingRight: "10px",
  },
  checkOut: {
    textAlign: "left",
    flex: 1, // Membagi ruang secara proporsional
    paddingLeft: "200px",
    marginTop: "-90px",
    justifyContent: "center",
  },
  dateLabel: {
    fontSize: "14px",
    fontWeight: "bold",
    marginBottom: "5px",
    color: "#333",
  },
  date: {
    fontSize: "16px",
    fontWeight: "bold",
    color: "#333",
    marginBottom: "5px",
    marginTop: "-10px",
  },
  time: {
    fontSize: "12px",
    color: "#6F6F6F",
  },
  priceSection: {
    textAlign: "right",
    marginLeft: "20px",
  },
  price: {
    fontSize: "20px",
    fontWeight: "bold",
    color: "#E83F3A",
    position: "absolute", // Agar berada di pojok kanan atas
    top: "40px", // Jarak dari atas
    right: "10px",
  },
  taxesInfo: {
    fontSize: "12px",
    color: "#6F6F6F",
    position: "absolute", // Agar berada di pojok kanan atas
    top: "68px", // Jarak dari atas
    right: "10px",
  },
  roomDaysInfo: {
    fontSize: "14px",
    color: "#6F6F6F",
    marginBottom: "10px",
    textAlign: "right",
    position: "absolute", // Agar berada di pojok kanan atas
    top: "15px", // Jarak dari atas
    right: "10px", // Jarak dari kanan
  },
};

export default HistoryCard;