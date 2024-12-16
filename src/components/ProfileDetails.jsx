import React, { useState, useEffect } from "react";
import { updateProfile } from '../api/apiInstance.js';

const Profiledetails = ({ profile, isEditing, setIsEditing, setProfile }) => {
  const [updatedProfile, setUpdatedProfile] = useState(profile || {});
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  useEffect(() => {
    if (profile) {
      setUpdatedProfile(profile);
    }
  }, [profile]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));
  };

  const handleSaveChanges = async () => {
    // const token = localStorage.getItem('authToken');  // Ambil token dari localStorage
    try {
      if (newPassword && newPassword !== confirmPassword) {
        setErrorMessage('Passwords do not match');
        return;
      }

      const profileToUpdate = {
        ...updatedProfile,
        password: newPassword || undefined,  // Update password hanya jika ada
      };

      const response = await updateProfile(profileToUpdate);
      setProfile(response.data);  
      setSuccessMessage('Profile updated successfully!');
      setErrorMessage('');
      setIsEditing(false);
    } catch (error) {
      setErrorMessage('Failed to update profile');
      setSuccessMessage('');
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
              value={updatedProfile.name}
              onChange={handleInputChange}
            />
          </div>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Date Of Birth:</label>
            <input 
              name="tanggal_lahir"
              style={styles.input} 
              type="date" 
              value={updatedProfile.tanggal_lahir}
              onChange={handleInputChange}
            />
          </div>
          {/* Other fields here */}
          <div style={styles.buttonGroup}>
            <button style={styles.saveButton} onClick={handleSaveChanges}>Save Changes</button>
            <button style={styles.cancelButton} onClick={() => setIsEditing(false)}>Cancel</button>
          </div>
        </form>
      ) : (
        <div>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Name:</label>
            <p style={styles.viewText}>{updatedProfile.name}</p>
          </div>
          {/* Display other fields here */}
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
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "20px",
    color: "#333",
    textAlign: "center",
  },
  heading2: {
    fontSize: "24px",
    fontWeight: "bold",
    marginTop: "40px",
    color: "#333",
    textAlign: "center",
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
