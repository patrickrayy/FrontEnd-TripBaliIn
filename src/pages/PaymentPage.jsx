import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import NavbarAfter from "../components/NavbarAfter";

const PaymentPage = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  const { villa, days, totalPrice } = state || {};

  if (!villa) {
    return <div>Payment details not found</div>;
  }

  // Fungsi untuk menangani tombol "Cancel"
  const handleCancel = () => {
    navigate("/accommodation", { state: { villa } }); // Kembali ke halaman detail villa
  };

  const handlePayNow = () => {
    navigate("/payment-completed"); // Navigasi ke halaman Payment Completed
  };

  return (
    <div style={{ padding: "40px",fontFamily: "Montserrat, sans-serif", maxWidth: "800px", margin: "0 auto",marginTop:"70px",marginLeft: "calc((100vw - 800px) / 2 - 20px)",  }}>
      <NavbarAfter />
      <h1 style={{ textAlign: "center", marginBottom: "20px" }}>Payment</h1>
      <p style={{ textAlign: "center", marginBottom: "30px", color: "#888" }}>
        Kindly follow the instructions below
      </p>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          border: "1px solid #ddd",
          borderRadius: "8px",
          padding: "20px",
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
        }}
      >
        {/* Informasi Booking */}
        <div style={{ width: "45%" }}>
          <p>Transfer TripBaliin:</p>
          <p>
            {days} Days at {villa.title},<br />
            {villa.location}
          </p>
          <p>
            Total: <strong style={{ color: "red" }}>IDR {totalPrice.toLocaleString()}</strong>
          </p>
          <p>
            Initial Payment: <strong style={{ color: "red" }}>IDR {(totalPrice / 2).toLocaleString()}</strong>
          </p>
        </div>

        {/* Form Pembayaran */}
        <div style={{ width: "50%",fontFamily: "Montserrat, sans-serif", }}>
          <input type="text" placeholder="Payment card number" style={inputStyle} />
          <select style={inputStyle}>
            <option value="">Select Bank</option>
            <option value="bank1">Master Card</option>
            <option value="bank2">Visa</option>
            <option value="bank1">Bri</option>
            <option value="bank2">BankDki</option>
            <option value="bank1">Bca</option>
            <option value="bank2">Mandiri</option>
            <option value="bank2">Bni</option>
          </select>
          <input type="text" placeholder="Validation date" style={inputStyle} />
          <input type="text" placeholder="Beside the card (CVV)" style={inputStyle} />
        </div>
      </div>

      {/* Tombol Pay Now dan Cancel */}
      <div style={{ textAlign: "center", marginTop: "30px", display: "flex", flexDirection: "column", alignItems: "center", gap: "10px",fontFamily: "Montserrat, sans-serif", }}>
  <button onClick={handlePayNow} style={payNowStyle}>Pay Now</button>
  <button onClick={handleCancel} style={cancelStyle}>Cancel</button>
      </div>
    </div>
  );
};

// Style untuk input form
const inputStyle = {
  width: "100%",
  padding: "10px",
  marginBottom: "15px",
  borderRadius: "5px",
  border: "1px solid #ccc",
};

// Style untuk tombol Pay Now dan Cancel
const buttonStyle = {
  backgroundColor: "#0F67B1",
  color: "white",
  border: "none",
  borderRadius: "5px",
  padding: "10px 20px",
  fontSize: "16px",
  cursor: "pointer",
  fontFamily: "Montserrat, sans-serif",
};

const payNowStyle = { ...buttonStyle, width: "150px", marginRight: "10px" };
const cancelStyle = { ...buttonStyle, backgroundColor: "#ccc", color: "#333", width: "150px" };

export default PaymentPage;