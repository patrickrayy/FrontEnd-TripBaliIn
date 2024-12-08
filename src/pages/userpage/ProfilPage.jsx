import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; 
import SideBar from "../../components/Sidebar";
import Profiledetails from "../../components/ProfileDetails";
import NavbarAfter from "../../components/NavbarAfter";
import Footer from "../../components/Footer";
import axios from 'axios';

const ProfilePage = () => {
  const [profile, setProfile] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
  const fetchProfile = async () =>{
    const token = localStorage.getItem('authToken');
    if (!token) {
      navigate('/login');
      return;
    }

    try{
      const response = await axios.get('http://localhost:5000/api/auth/profile', { headers:{Authorization:'Bearer ${token}'},
    });
    setProfile(response.data);
    } catch (error) {
      console.error(error);
    }
    
  };

  fetchProfile();
}, [navigate]);
  
  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("authToken"); 
    navigate("/login"); 
  };

  return (
    <div style={styles.pageContainer}>
      {/* Navbar di atas */}
      <NavbarAfter />
      {/* Sidebar dan ProfileDetails di bawah Navbar */}
      <div style={styles.mainContent}>
        <SideBar style={styles.sidebar} />
        <div style={styles.content}>
          {/* Komponen Profil */}
          <Profiledetails />
          <button style={styles.logoutButton} onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>
      {/* Footer di bagian bawah */}
      <Footer />
    </div>
  );
};

const styles = {
  pageContainer: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    minHeight: "100vh",
    backgroundColor: "#F8F9FA",
  },
  mainContent: {
    display: "flex",
    flexDirection: "row",
    flex: "1",
    width: "100%",
    marginTop: "102px",
  },
  sidebar: {
    flex: "0 0 250px",
    backgroundColor: "#FFFFFF",
    boxShadow: "2px 0 5px rgba(0, 0, 0, 0.1)",
    height: "calc(100vh - 102px)",
  },
  content: {
    flex: "1",
    padding: "20px",
    backgroundColor: "#FFFFFF",
    overflowY: "auto",
    height: "calc(100vh - 102px)",
  },
  logoutButton: {
    marginTop: "20px", 
    padding: "10px 20px",
    backgroundColor: "#DC3545",
    color: "#FFFFFF",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
  },
};

export default ProfilePage;
