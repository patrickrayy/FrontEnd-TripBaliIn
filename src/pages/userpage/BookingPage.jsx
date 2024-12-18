import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import NavbarAfter from "../../components/NavbarAfter";

const BookingPage = () => {
  const { state } = useLocation();
  const navigate = useNavigate(); 
  const villa = state?.villa;

  const [days, setDays] = useState(1);
  const [selectedDate, setSelectedDate] = useState("");

  if (!villa) {
    return <div>Villa not found</div>;
  }

  const handleDaysChange = (increment) => {
    setDays((prevDays) => Math.max(1, prevDays + increment));
  };

  const totalPrice = villa.price * days;

  const handleBooking = () => {
    navigate("/payment", { state: { villa, days, selectedDate, totalPrice } }); 
  };


  const handleCancel = () => {
    navigate("/accommodation", { state: { villa } }); 
  };

  return (
    <div style={{ padding: "160px", maxWidth: "1260px", margin: "0 auto" }}>
      <NavbarAfter />
      <h1 style={{ marginLeft: "-1200px", marginBottom: "4px",fontFamily: "Montserrat, sans-serif", fontWeight: "650", textAlign: "right"}}>Booking Information</h1>
      <p style={{marginLeft: "500px", marginBottom: "30px",fontFamily: "Montserrat, sans-serif"}}>Please fill up the blank fields below</p>

      {/* Konten Booking */}
      <div style={{ display: "flex", justifyContent: "left",textAlign:"left", border: "1px solid #ddd", borderRadius: "8px", padding: "20px", boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", width: "800px",fontWeight:"", marginLeft: "320px",fontFamily: "Montserrat, sans-serif" }}>
        <img src={villa.image} alt={villa.title} style={{ width: "50%", borderRadius: "8px" }} />
        <div style={{ width: "50%", paddingLeft: "20px" }}>
          <h2>{villa.title}</h2>
          <p>{villa.location}</p>

          {/* Kontrol Durasi */}
          <div style={ {display :" flex" , justifyContent: 'left', marginBottom:'-20px', fontSize: '18px', fontWeight:'650'}}>
            <p>Staying for : </p>
          </div>
          <div style={{ display: "flex", alignItems: "center", marginTop: "10px" }}>
            <button onClick={() => handleDaysChange(-1)} style={buttonStyle}>-</button>
            <span style={{ margin: "0 10px", fontSize: "18px" }}>{days} {days > 1 ? "Days" : "Day"}</span>
            <button onClick={() => handleDaysChange(1)} style={buttonStyle}>+</button>
          </div>

          {/* Pilihan Tanggal */}
          <div style={{ marginTop: "20px" }}>
            <label style={{ display: "block", marginBottom: "5px",fontFamily: "Montserrat, sans-serif", textAlign: "left", fontSize: '18px', fontWeight: '650'}}>Pick a Date:</label>
            <input
              type="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              style={{ padding: "10px", width: "100%", borderRadius: "10px", backgroundColor: "#",border: "1px solid #ccc" }}
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
    style={{ ...bookNowStyle, marginLeft: "500px", display: "block", marginBottom: "10px",fontFamily: "Montserrat, sans-serif", borderRadius:"10px"}}
  >
    Book Now
  </button>
  <button
    onClick={handleCancel}
    style={{ ...cancelStyle, display: "block", marginLeft: "500px", fontFamily: "Montserrat, sans-serif", borderRadius:"10px" }}
  >
    Cancel
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
  fontFamily: "Montserrat, sans-serif",
};


const bookNowStyle = { ...buttonStyle, width: "150px", marginRight: "10px" };
const cancelStyle = { ...buttonStyle, backgroundColor: "#ccc", color: "#333", width: "150px" };

export default BookingPage;