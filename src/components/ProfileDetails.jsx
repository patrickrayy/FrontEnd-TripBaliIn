import React, { useState, useEffect } from "react";
import axios from 'axios';

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
    const token = localStorage.getItem('authToken');
    try {
      if (newPassword && newPassword !== confirmPassword) {
        setErrorMessage('Passwords do not match');
        return;
      }

      const profileToUpdate = {
        ...updatedProfile,
        password: newPassword || undefined, 
      };

      const response = await axios.put('http://localhost:5000/api/profile/profile', profileToUpdate, {
        headers: { Authorization: `Bearer ${token}` },
      });

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
          <div style={styles.inputGroup}>
            <label style={styles.label}>Phone:</label>
            <input 
              name="phone"
              style={styles.input} 
              type="text" 
              value={updatedProfile.phone}
              onChange={handleInputChange}
            />
          </div>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Location:</label>
            <input 
              name="location"
              style={styles.input} 
              type="text"
              value={updatedProfile.location}
              onChange={handleInputChange}
            />
          </div>

          <h2 style={styles.heading2}>Security</h2>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Email Address:</label>
            <input 
              name="email"
              style={styles.input} 
              type="email" 
              value={updatedProfile.email}
              onChange={handleInputChange}
            />
          </div>
          <div style={styles.inputGroup}>
            <label style={styles.label}>New Password:</label>
            <input 
              name="newPassword"
              style={styles.input} 
              type="password" 
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
          </div>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Confirm New Password:</label>
            <input 
              name="confirmPassword"
              style={styles.input} 
              type="password" 
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>

          <div style={styles.buttonGroup}>
            <button style={styles.saveButton} onClick={handleSaveChanges}>Save Changes</button>
            <button style={styles.cancelButton} onClick={() => setIsEditing(false)}>Cancel</button>
          </div>
        </form>
      ) : (
        <div>
          <p><strong>Name:</strong> {updatedProfile.name}</p>
          <p><strong>Email:</strong> {updatedProfile.email}</p>
          <p><strong>Phone:</strong> {updatedProfile.phone}</p>
          <p><strong>Location:</strong> {updatedProfile.location}</p>
          <p><strong>Date of Birth:</strong> {updatedProfile.tanggal_lahir}</p>
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
