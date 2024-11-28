import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom"; // Import useNavigate
import NavbarAfter from "../components/NavbarAfter";

const BookingPage = () => {
  const { state } = useLocation();
  const navigate = useNavigate(); // Gunakan useNavigate
  const villa = state?.villa;

  // State untuk durasi dan tanggal
  const [days, setDays] = useState(1);
  const [selectedDate, setSelectedDate] = useState("");

  if (!villa) {
    return <div>Villa not found</div>;
  }

  // Fungsi untuk menambah atau mengurangi jumlah hari
  const handleDaysChange = (increment) => {
    setDays((prevDays) => Math.max(1, prevDays + increment));
  };

  // Hitung total harga berdasarkan jumlah hari
  const totalPrice = villa.price * days;

  // Navigasi ke halaman pembayaran
  const handleBooking = () => {
    navigate("/payment", { state: { villa, days, selectedDate, totalPrice } }); // Kirim data ke halaman pembayaran
  };

  // Navigasi ke halaman detail villa saat Cancel
  const handleCancel = () => {
    navigate("/accommodation", { state: { villa } }); // Sesuaikan route dengan halaman detail villa Anda
  };

  return (
    <div style={{ padding: "160px", maxWidth: "1200px", margin: "0 auto" }}>
      <NavbarAfter />
      <h1 style={{ textAlign: "center", marginLeft: "150px", marginBottom: "4px",fontFamily: "Montserrat, sans-serif"}}>Booking Information</h1>
      <p style={{ textAlign: "center", marginLeft: "150px", marginBottom: "30px",fontFamily: "Montserrat, sans-serif"}}>Please fill up the blank fields below</p>

      {/* Konten Booking */}
      <div style={{ display: "flex", justifyContent: "center", border: "1px solid #ddd", borderRadius: "8px", padding: "20px", boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", width: "1000px", margin: "0 auto",fontFamily: "Montserrat, sans-serif" }}>
        <img src={villa.image} alt={villa.title} style={{ width: "45%", borderRadius: "8px" }} />
        <div style={{ width: "50%", paddingLeft: "20px" }}>
          <h2>{villa.title}</h2>
          <p>{villa.location}</p>

          {/* Kontrol Durasi */}
          <div style={{ display: "flex", alignItems: "center", marginTop: "10px" }}>
            <button onClick={() => handleDaysChange(-1)} style={buttonStyle}>-</button>
            <span style={{ margin: "0 10px", fontSize: "18px" }}>{days} {days > 1 ? "Days" : "Day"}</span>
            <button onClick={() => handleDaysChange(1)} style={buttonStyle}>+</button>
          </div>

          {/* Pilihan Tanggal */}
          <div style={{ marginTop: "20px" }}>
            <label style={{ display: "block", marginBottom: "5px",fontFamily: "Montserrat, sans-serif",}}>Pick a Date:</label>
            <input
              type="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              style={{ padding: "10px", width: "100%", borderRadius: "5px", border: "1px solid #ccc" }}
            />
          </div>

          {/* Total Harga */}
          <div style={{ marginTop: "20px", fontSize: "18px" }}>
            You will pay <strong style={{ color: "red" }}>IDR {totalPrice.toLocaleString()}</strong> for {days} {days > 1 ? "Days" : "Day"}
          </div>
        </div>
      </div>

      {/* Tombol Booking dan Cancel */}
      <div
  style={{
    textAlign: "center",
    marginLeft: "140px",
    marginTop: "30px",
    fontFamily: "Montserrat, sans-serif",
  }}
>
  <button
    onClick={handleBooking}
    style={{ ...bookNowStyle, marginLeft: "300px", display: "block", marginBottom: "10px",fontFamily: "Montserrat, sans-serif", }}
  >
    Book Now
  </button>
  <button
    onClick={handleCancel}
    style={{ ...cancelStyle, display: "block", marginLeft: "300px", fontFamily: "Montserrat, sans-serif", }}
  >
    Cancel
  </button>
</div>
    </div>
  );
};

// Style untuk tombol
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

// Style untuk tombol Book Now dan Cancel
const bookNowStyle = { ...buttonStyle, width: "150px", marginRight: "10px" };
const cancelStyle = { ...buttonStyle, backgroundColor: "#ccc", color: "#333", width: "150px" };

export default BookingPage;