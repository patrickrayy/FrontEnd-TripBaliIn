import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // Import Link
import axios from 'axios';

const SideBar = () => {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem("authToken");
      if (!token) return;
      try{
        const response = await axios.get("http://localhost:5000/api/profile/profile", { headers: {Authorization: `Bearer ${token}`},
        });
        setProfile(response.data);
      }catch(error){
        console.error("Error fetching profile", error);
      }
    };

    fetchProfile();
  }, []);

  return (
    <div style={styles.sidebar}>
      <div style={styles.profile}>
        <img
          src="/assets/images/profileimg.png" 
          alt="Profile"
          style={styles.profileImage}
        />
        <h3 style={styles.name}>{profile ? profile.name : 'Loading...'}</h3>
        <p style={styles.info}>
          {profile ? (
            <>
              <span>📍 {profile.location} </span> | <span>🎂 {profile.tanggal_lahir} </span>
            </>
          ) : ( 
            'Loading...'
          )}
        </p>
      </div>
      <div style={styles.menu}>
        <button style={styles.activeButton}>Profile Informations</button>
        {/* Gunakan Link untuk routing */}
        <Link to="/history" style={{ textDecoration: "none" }}>
          <button style={styles.button}>History Booking</button>
        </Link>
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
    top: "50px",
    fontFamily: "Montserrat, sans-serif"
  },
  profile: {
    textAlign: "center",
    marginBottom: "20px",
    top: "150px",
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
    textAlign: 'left',
    color: '#000',
    width: "100%",
    padding: "10px",
    margin: "5px 0",
    backgroundColor: "#fff",
    border: "1px solid #ddd",
    borderRadius: "5px",
    cursor: "pointer",
  },
  activeButton: {
    textAlign: 'left',
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
