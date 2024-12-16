import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");
  const [price, setPrice] = useState("");

  const handleSearch = () => {
    onSearch({ location, date, price });
  };

  return (
    <div style={styles.filters}>
      <div style={styles.filterContainer}>
        {/* Location Filter */}
        <div style={styles.filterOption}>
          <div style={styles.filterIcon}>
            <img src="/assets/images/Location.png" alt="Location Icon" style={styles.iconImg} />
          </div>
          <div style={styles.filterText}>
            <span style={styles.filterLabel}>Location</span>
            <input
              type="text"
              placeholder="Where do you want to go?"
              style={styles.filterInput}
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>
        </div>

        {/* Date Filter */}
        <div style={styles.filterOption}>
          <div style={styles.filterIcon}>
            <img src="/assets/images/Calendar.png" alt="Calendar Icon" style={styles.iconImg} />
          </div>
          <div style={styles.filterText}>
            <span style={styles.filterLabel}>Date</span>
            <input
              type="date"
              style={styles.filterInput}
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
        </div>

        {/* Price Filter */}
        <div style={styles.filterOption}>
          <div style={styles.filterIcon}>
            <img src="/assets/images/Bill.png" alt="Filter Icon" style={styles.iconImg} />
          </div>
          <div style={styles.filterText}>
            <span style={styles.filterLabel}>Price</span>
            <input
              type="number"
              placeholder="Max budget (IDR)"
              style={styles.filterInput}
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
        </div>

        {/* Explore Button */}
        <button style={styles.exploreButton} onClick={handleSearch}>
          <img
            src="/assets/images/LocationOn.png"
            alt="Explore Icon"
            style={styles.exploreIcon}
          />
          Explore Now
        </button>
      </div>
    </div>
  );
};

const styles = {
  filters: {
    position: "absolute",
    top: "90%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#CFE9FF",
    padding: "15px",
    borderRadius: "10px",
    gap: "20px",
    width: "1440px",
    height: "75px",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
    zIndex: 10,
  },
  filterContainer: {
    display: "flex",
    flexDirection: "row",
    gap: "180px",
  },
  filterOption: {
    display: "flex",
    alignItems: "center",
    gap: "30px",
    textAlign: "left",
    color: "#333",
    fontSize: "16px",
  },
  filterIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "40px",
    height: "40px",
  },
  iconImg: {
    width: "100%",
    height: "auto",
  },
  filterText: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },
  filterLabel: {
    fontWeight: "bold",
    fontSize: "18px",
    color: "#333",
    fontFamily: "Montserrat, sans-serif",
  },
  filterInput: {
    marginTop: "5px",
    padding: "8px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    fontSize: "14px",
    width: "200px",
  },
  exploreButton: {
    marginTop: "2px",
    padding: "10px 20px",
    backgroundColor: "#0F67B1",
    border: "none",
    borderRadius: "10px",
    color: "white",
    width: "200px",
    height: "47px",
    fontSize: "20px",
    cursor: "pointer",
    fontFamily: "Montserrat, sans-serif",
  },
  exploreIcon: {
    marginRight: "8px",
  },
};

export default SearchBar;