import React from "react";
import { Link } from "react-router-dom"; 
import { useAuth } from "../contexts/AuthContext"; 

const SideBar = () => {
  const { user } = useAuth(); 

  return (
    <div style={styles.sidebar}>
      <div style={styles.profile}>
        <img
          src="/assets/images/profileimg.png"
          alt="Profile"
          style={styles.profileImage}
        />
        <h3 style={styles.name}>{user ? user.name : "Loading..."}</h3>
        <p style={styles.info}>
          {user ? (
            <>
              <span>📍 {user.location || "No location"} </span> |{" "}
              <span>🎂 {user.tanggal_lahir || "No birthdate"} </span>
            </>
          ) : (
            "Loading..."
          )}
        </p>
      </div>
      <div style={styles.menu}>
        <button style={styles.activeButton}>Profile Informations</button>
        <Link to="/history" style={{ textDecoration: "none" }}>
          <button style={styles.button}>History Booking</button>
        </Link>
      </div>
    </div>
  );
};

const styles = {
  sidebar: {
    width: "250px",
    backgroundColor: "#f7f7f7",
    padding: "20px",
    borderRight: "1px solid #ddd",
    minHeight: "100vh",
    fontFamily: 'Montserrat, sans-serif'
  },
  profile: {
    textAlign: "center",
    marginBottom: "30px",
  },
  profileImage: {
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    marginBottom: "10px",
  },
  name: {
    fontSize: "18px",
    fontWeight: "bold",
    marginBottom: "5px",
  },
  info: {
    fontSize: "14px",
    color: "#666",
  },
  menu: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  activeButton: {
    padding: "10px",
    backgroundColor: "#0F67B1",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "14px",
  },
  button: {
    padding: "10px",
    width : "211px",
    backgroundColor: "#fff",
    color: "#333",
    border: "1px solid #ddd",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "14px",
  },
};

export default SideBar;
