import React from "react";

const Profiledetails = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.heading1}>Personal Information</h2>
      <form style={styles.form}>
        <div style={styles.inputGroup}>
          <label style={styles.label}>Name:</label>
          <input style={styles.input} type="text" placeholder="Enter your name" />
        </div>
        <div style={styles.inputGroup}>
          <label style={styles.label}>Date Of Birth:</label>
          <input style={styles.input} type="date" placeholder="Enter your date of birth" />
        </div>
        <div style={styles.inputGroup}>
          <label style={styles.label}>Phone:</label>
          <input style={styles.input} type="text" placeholder="Enter your phone number" />
        </div>
        <div style={styles.inputGroup}>
          <label style={styles.label}>Location:</label>
          <input style={styles.input} type="text" placeholder="Enter your location" />
        </div>

        <h2 style={styles.heading2}>Security</h2>
        <div style={styles.inputGroup}>
          <label style={styles.label}>Email Address:</label>
          <input style={styles.input} type="email" placeholder="Enter your email address" />
        </div>
        <div style={styles.inputGroup}>
          <label style={styles.label}>Password:</label>
          <input style={styles.input} type="password" placeholder="Enter your password" />
        </div>
        <div style={styles.inputGroup}>
          <label style={styles.label}>Confirm Password:</label>
          <input style={styles.input} type="password" placeholder="Confirm your password" />
        </div>
        <div style={styles.buttonGroup}>
          <button style={styles.saveButton}>Save</button>
          <button style={styles.cancelButton}>Cancel</button>
        </div>
      </form>
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
    maxWidth: "800px",
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
  "@media (max-width: 768px)": {
    container: {
      padding: "20px",
      margin: "10px",
    },
    heading1: {
      fontSize: "20px",
    },
    heading2: {
      fontSize: "20px",
    },
    input: {
      fontSize: "12px",
    },
    saveButton: {
      width: "100%",
    },
    cancelButton: {
      width: "100%",
    },
  },
};

export default Profiledetails;
