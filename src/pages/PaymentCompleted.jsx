import React from "react";
import { useNavigate } from "react-router-dom";

const PaymentCompleted = () => {
  const navigate = useNavigate();

  const handleBackToHome = () => {
    navigate("/home"); // Kembali ke halaman utama
  };

  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h1 style={{ color: "#0F67B1" }}>Yay! Payment Completed</h1>
      <img
        src="/assets/images/complite.png" // Ganti dengan URL gambar
        alt="Success"
        style={{ width: "300px", margin: "20px auto" }}
      />
      <p style={{ color: "#888" }}>Please check your email. We have sent all the information.</p>
      <button onClick={handleBackToHome} style={buttonStyle}>
        Back To Home
      </button>
    </div>
  );
};

const buttonStyle = {
  backgroundColor: "#0F67B1",
  color: "white",
  border: "none",
  borderRadius: "5px",
  padding: "10px 20px",
  fontSize: "16px",
  cursor: "pointer",
  marginTop: "20px",
};

export default PaymentCompleted;