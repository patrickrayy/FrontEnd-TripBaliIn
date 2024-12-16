import React, { useState } from "react";
import { useAuth } from "../contexts/AuthContext"; // Import useAuth

const Profiledetails = () => {
  const { user, token, updateUser } = useAuth(); // Ambil data user, token, dan fungsi updateUser dari AuthContext
  const [updatedProfile, setUpdatedProfile] = useState(user || {}); // Mulai dengan data user
  const [isEditing, setIsEditing] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));
  };

  const handleSaveChanges = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/profile/profile", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(updatedProfile),
      });

      if (response.ok) {
        const data = await response.json();
        setUpdatedProfile(data);
        updateUser(data); // Perbarui data di AuthContext
        setSuccessMessage("Profile updated successfully!");
        setErrorMessage(null);
        setIsEditing(false);
      } else {
        setErrorMessage("Failed to update profile. Please try again.");
        setSuccessMessage(null);
      }
    } catch (error) {
      setErrorMessage("An error occurred while updating your profile.");
      setSuccessMessage(null);
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading1}>Personal Information</h2>
      {isEditing ? (
        <form style={styles.form}>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Name:</label>
            <input
              name="name"
              style={styles.input}
              type="text"
              value={updatedProfile.name || ""}
              onChange={handleInputChange}
            />
          </div>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Date Of Birth:</label>
            <input
              name="tanggal_lahir"
              style={styles.input}
              type="date"
              value={updatedProfile.tanggal_lahir || ""}
              onChange={handleInputChange}
            />
          </div>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Location:</label>
            <input
              name="location"
              style={styles.input}
              type="text"
              value={updatedProfile.location || ""}
              onChange={handleInputChange}
            />
          </div>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Phone Number:</label>
            <input
              name="phone"
              style={styles.input}
              type="text"
              value={updatedProfile.phone || ""}
              onChange={handleInputChange}
            />
          </div>
          <h2 style={styles.heading2}>Security</h2>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Email:</label>
            <input
              name="email"
              style={styles.input}
              type="email"
              value={updatedProfile.email || ""}
              onChange={handleInputChange}
            />
          </div>
          <div style={styles.buttonGroup}>
            <button style={styles.saveButton} type="button" onClick={handleSaveChanges}>
              Save Changes
            </button>
            <button
              style={styles.cancelButton}
              type="button"
              onClick={() => {
                setIsEditing(false);
                setUpdatedProfile(user); // Reset ke data asli jika dibatalkan
              }}
            >
              Cancel
            </button>
          </div>
        </form>
      ) : (
        <div>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Name:</label>
            <p style={styles.viewText}>{user?.name || "N/A"}</p>
          </div>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Date of Birth:</label>
            <p style={styles.viewText}>{user?.tanggal_lahir || "N/A"}</p>
          </div>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Location:</label>
            <p style={styles.viewText}>{user?.location || "N/A"}</p>
          </div>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Phone Number:</label>
            <p style={styles.viewText}>{user?.phone || "N/A"}</p>
          </div>
          <button
            style={styles.editButton}
            type="button"
            onClick={() => setIsEditing(true)}
          >
            Edit Profile
          </button>
        </div>
      )}
      {errorMessage && <div style={styles.error}>{errorMessage}</div>}
      {successMessage && <div style={styles.success}>{successMessage}</div>}
    </div>
  );
};

const styles = {
  container: {
    fontFamily: "Montserrat, sans-serif",
    padding: "30px",
    backgroundColor: "#fff",
    margin: "20px",
    borderRadius: "10px",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
  },
  heading1: {
    fontSize: "20px",
    fontWeight: "bold",
    marginBottom: "30px",
    color: "#333",
    textAlign: "left",
  },
  heading2: {
    fontSize: "20px",
    fontWeight: "bold",
    marginTop: "20px",
    marginBottom: "25px",
    color: "#333",
    textAlign: "left",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    textAlign: "left",
  },
  inputGroup: {
    marginBottom: "15px",
    textAlign: 'left'
  },
  label: {
    fontSize: "16px",
    color: "#555",
    marginBottom: "5px",

  },
  input: {
    width: "100%",
    padding: "10px",
    border: "1px solid #ddd",
    borderRadius: "5px",
    fontSize: "14px",
    backgroundColor: "#e9e9e9",
  },
  viewText: {
    fontSize: "14px",
    height: '45px',
    color: "#555",
    padding: "10px",
    backgroundColor: "#e9e9e9",
    border: "1px solid #ddd",
    borderRadius: "5px",
  },
  buttonGroup: {
    display: "flex",
    gap: "10px",
    marginTop: "20px",
    justifyContent: "center",
  },
  saveButton: {
    backgroundColor: "#0F67B1",
    color: "#fff",
    border: "none",
    padding: "10px 20px",
    borderRadius: "5px",
    cursor: "pointer",
  },
  cancelButton: {
    backgroundColor: "#fff",
    color: "#555",
    border: "1px solid #ddd",
    padding: "10px 20px",
    borderRadius: "5px",
    cursor: "pointer",
  },
  error: {
    color: "red",
  },
  success: {
    color: "green",
  },
};

export default Profiledetails;
