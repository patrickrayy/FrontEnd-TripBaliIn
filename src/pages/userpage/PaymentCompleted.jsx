import React from "react";
import { useNavigate } from "react-router-dom";
import NavbarAfter from "../../components/NavbarAfter"; // Import NavbarAfter

const PaymentCompleted = () => {
  const navigate = useNavigate();

  const handleBackToHome = () => {
    navigate("/home"); // Kembali ke halaman utama
  };

  return (
    <div>
      {/* Navbar */}
      <NavbarAfter />

      {/* Konten Utama */}
      <div
        style={{
          textAlign: "center",
          marginLeft: "300px",
          marginTop: "30px",
          padding: "100px",
          fontFamily: "Montserrat, sans-serif",
        }}
      >
        <h1 style={{ color: "black",fontWeight: "bold" }}>Yay! Payment Completed</h1>
        <img
          src="/assets/images/complite.png" // Ganti dengan URL gambar
          alt="Success"
          style={{ width: "300px", margin: "20px auto" }}
        />
        <p style={{ color: "#0F67B1" }}>
          Please check your email. We have sent all the information.
        </p>
        <button onClick={handleBackToHome} style={buttonStyle}>
          Back To Home
        </button>
      </div>
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
  fontFamily: "Montserrat, sans-serif",
};

export default PaymentCompleted;
