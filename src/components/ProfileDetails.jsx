import React, { useState, useEffect } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const Profiledetails = () => {
  const [profile, setProfile] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    tanggal_lahir: '',
  });

  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem('authToken');
      if (!token) {
        setErrorMessage('You need to be logged in to view this page.');
        setTimeout(() => navigate('/login'), 2000);  // Redirect after a brief delay
        return;
      }
      try {
        const response = await axios.get('http://localhost:5000/api/profile', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setProfile(response.data);
      } catch (error) {
        console.error(error);
        setErrorMessage('Error fetching data.');
      }
    };

    fetchProfile();
  }, [navigate]);

  const handleSave = async (e) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      setErrorMessage('Passwords do not match');
      return;
    }

    try {
      const token = localStorage.getItem('authToken');
      const response = await axios.put(
        'http://localhost:5000/api/profile',
        {
          ...profile,
          password: newPassword || undefined, 
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setSuccessMessage('Profile updated!');
      setErrorMessage('');
      setProfile(response.data.user);
      setNewPassword('');
      setConfirmPassword('');
    } catch (error) {
      setErrorMessage(error.response?.data?.message || 'Error updating profile');
      setSuccessMessage('');
    }
  };

  const handleCancel = () => {
    setProfile({
      name: '',
      email: '',
      phone: '',
      location: '',
      tanggal_lahir: '',
    });
    setNewPassword('');
    setConfirmPassword('');
    navigate('/profile');
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading1}>Personal Information</h2>
      <form style={styles.form} onSubmit={handleSave}>
        <div style={styles.inputGroup}>
          <label style={styles.label}>Name:</label>
          <input 
            style={styles.input} 
            type="text" 
            value={profile.name}
            onChange={(e) => setProfile({ ...profile, name: e.target.value })}
            placeholder="Enter your name"
          />
        </div>
        <div style={styles.inputGroup}>
          <label style={styles.label}>Date Of Birth:</label>
          <input 
            style={styles.input} 
            type="date" 
            value={profile.tanggal_lahir}
            onChange={(e) => setProfile({ ...profile, tanggal_lahir: e.target.value })}
            placeholder="Enter your date of birth" 
          />
        </div>
        <div style={styles.inputGroup}>
          <label style={styles.label}>Phone:</label>
          <input 
            style={styles.input} 
            type="text" 
            placeholder="Enter your phone number"
            value={profile.phone}
            onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
          />
        </div>
        <div style={styles.inputGroup}>
          <label style={styles.label}>Location:</label>
          <input 
            style={styles.input} 
            type="text"
            value={profile.location}
            onChange={(e) => setProfile({ ...profile, location: e.target.value })}
            placeholder="Enter your location"
          />
        </div>

        <h2 style={styles.heading2}>Security</h2>
        <div style={styles.inputGroup}>
          <label style={styles.label}>Email Address:</label>
          <input 
            style={styles.input} 
            type="email" 
            value={profile.email}
            onChange={(e) => setProfile({ ...profile, email: e.target.value })}
            placeholder="Enter your email address" 
          />
        </div>
        <div style={styles.inputGroup}>
          <label style={styles.label}>Password:</label>
          <input 
            style={styles.input} 
            type="password" 
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            placeholder="Enter your password"
          />
        </div>
        <div style={styles.inputGroup}>
          <label style={styles.label}>Confirm Password:</label>
          <input 
            style={styles.input} 
            type="password" 
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm your password" 
          />
        </div>
        <div style={styles.buttonGroup}>
          <button style={styles.saveButton} type="submit">Save</button>
          <button style={styles.cancelButton} onClick={handleCancel}>Cancel</button>
        </div>
      </form>

      {errorMessage && <div style={styles.error}>{errorMessage}</div>}
      {successMessage && <div style={styles.success}>{successMessage}</div>}
    </div>
  );
};

const styles = {
  container: {
    fontFamily: "Montserrat, sans-serif",
    flex: 1,
    padding: "30px",
    backgroundColor: "#fff",
    margin: "20px",
    borderRadius: "10px",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
    marginLeft: "auto",
    marginRight: "auto",
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
    marginBottom: "20px",
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
    color: "#000",
    fontFamily: "Montserrat, sans-serif",
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
    width: "120px",
    fontWeight: "bold",
  },
  cancelButton: {
    backgroundColor: "#fff",
    color: "#555",
    border: "1px solid #ddd",
    padding: "10px 20px",
    borderRadius: "5px",
    cursor: "pointer",
    width: "120px",
    fontWeight: "bold",
  },
  error: {
    color: "red",
    marginTop: "10px",
  },
  success: {
    color: "green",
    marginTop: "10px",
  },
};

export default Profiledetails;
