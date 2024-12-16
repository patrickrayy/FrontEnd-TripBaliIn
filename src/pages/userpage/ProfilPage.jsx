import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; 
import SideBar from "../../components/Sidebar";
import Profiledetails from "../../components/ProfileDetails";
import NavbarAfter from "../../components/NavbarAfter";
import Footer from "../../components/Footer";
import { useAuth } from "../../contexts/AuthContext";

const ProfilePage = () => {
  const { token, user, logout } = useAuth();
  const [profile, setProfile] = useState(null);
  const navigate = useNavigate();
  

  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, [token, navigate]);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/auth/profile", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const data = await response.json();
        if (data.status === "success") {
          setProfile(data.data);
        } else {
          console.error("Failed to fetch profile");
        }
      } catch (error) {
        console.error("Error fetching user's profile:", error);
      }
    };

    if (token) {
      fetchProfile();
    }
  }, [token]);

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/login");
  };

  return (
    <div style={styles.pageContainer}>
      <NavbarAfter />
      <div style={styles.mainContent}>
        <SideBar style={styles.sidebar} />
        <div style={styles.content}>
          <Profiledetails 
            profile={profile} 
            setProfile={setProfile}
            onLogout={handleLogout}
          />
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
    borderRadius: "10px",
    fontFamily:'Montserrat, sans-serif',
    cursor: "pointer",
    fontSize: "16px",
  },
  editButton: {
    marginTop: "20px",
    marginLeft:'50px',
    fontFamily:'Montserrat, sans-serif',
    padding: "10px 20px",
    backgroundColor: "#0F67B1", 
    color: "#fff",
    border: "none",
    borderRadius: "10px",
    cursor: "pointer",
    fontSize: "16px",
    transition: "background-color 0.3s ease",
  },
  cancelButton: {
    marginTop: "20px",
    padding: "10px 20px",
    backgroundColor: "#e0e0e0", 
    color: "#333",
    border: "1px solid #ddd",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
    transition: "background-color 0.3s ease",
  },
};

export default ProfilePage;
