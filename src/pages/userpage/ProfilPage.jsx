import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; 
import SideBar from "../../components/Sidebar";
import Profiledetails from "../../components/ProfileDetails";
import NavbarAfter from "../../components/NavbarAfter";
import Footer from "../../components/Footer";
import { useUser } from "../../contexts/useAuth";
import apiInstance from "../../api/apiInstance.js";

const ProfilePage = () => {
  const [profile, setProfile] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const navigate = useNavigate();
  const { user, isAuthenticated }=useUser();

  useEffect(() => {
    if(!isAuthenticated){
      navigate('/login');
      return;
    }

    const fetchProfile = async () => {
      const token = localStorage.getItem('authToken');
      if (!token) {
        navigate('/login');
        return;
      }
      try {
        const response = await apiInstance.get('/profile/profile');
        setProfile(response.data);
      }catch(error){
        console.error("Error fetching user's profile",error);
      }
    }

    if(isAuthenticated){
      fetchProfile();
    }
  }, [isAuthenticated, navigate]);

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/login"); 
  };

  const handleEditClick = () => {
    setIsEditing(prev => !prev);  // Toggle the editing state
  };

  return (
    <div style={styles.pageContainer}>
      {/* Navbar di atas */}
      <NavbarAfter />
      {/* Sidebar dan ProfileDetails di bawah Navbar */}
      <div style={styles.mainContent}>
        <SideBar style={styles.sidebar} />
        <div style={styles.content}>
          <Profiledetails 
            profile={profile} 
            isEditing={isEditing}
            setIsEditing={setIsEditing}
            setProfile={setProfile}
          />
          <button style={styles.logoutButton} onClick={handleLogout}>Logout</button>
          {/* Edit Profile Button */}
          <button 
            style={isEditing ? styles.cancelButton : styles.editButton} 
            onClick={handleEditClick}
          >
            {isEditing ? "Cancel Edit" : "Edit Profile"}
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
