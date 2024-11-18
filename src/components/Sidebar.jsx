import React from "react";

const SideBar = () => {
  return (
    <div style={styles.sidebar}>
      <div style={styles.profile}>
        <img
          src="/assets/images/1.png" // Ganti dengan path gambar profil Anda
          alt="Profile"
          style={styles.profileImage}
        />
        <h3 style={styles.name}>Alif Yasiz</h3>
        <p style={styles.info}>
          <span>📍 Jakarta </span> | <span>🎂 20th December</span>
        </p>
      </div>
      <div style={styles.menu}>
        <button style={styles.activeButton}>Profile Informations</button>
        <button style={styles.button}>History Booking</button>
      </div>
    </div>
  );
};

const styles = {
  sidebar: {
    width: "300px",
    backgroundColor: "#fff",
    padding: "20px",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    top:"50px"
  },
  profile: {
    textAlign: "center",
    marginBottom: "20px",
    top:"150px"
  },
  profileImage: {
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    objectFit: "cover",
  },
  name: {
    fontSize: "18px",
    fontWeight: "bold",
    margin: "10px 0",
  },
  info: {
    fontSize: "14px",
    color: "#555",
  },
  menu: {
    width: "100%",
  },
  button: {
    width: "100%",
    padding: "10px",
    margin: "5px 0",
    backgroundColor: "#fff",
    border: "1px solid #ddd",
    borderRadius: "5px",
    cursor: "pointer",
  },
  activeButton: {
    width: "100%",
    padding: "10px",
    margin: "5px 0",
    backgroundColor: "#0F67B1",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default SideBar;