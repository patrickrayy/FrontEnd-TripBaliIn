import React from "react";
import { useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBed, faShower, faUtensils, faWifi, faTv, faBox } from "@fortawesome/free-solid-svg-icons";
import NavbarAfter from "../../components/NavbarAfter";
import Footer from "../../components/Footer";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const VillaDetailsPage = () => {
  const { state } = useLocation();
  const villa = state?.villa;

  if (!villa) {
    return <div>Villa not found</div>;
  };

  const navigate = useNavigate(); // Hook untuk navigasi
  
  const handleBookingClick = () => {
    navigate("/booking", { state: { villa } }); // Kirim data villa ke halaman booking
  };

  return (
    <>
      <NavbarAfter />
      <div style={{ padding: "20px", maxWidth: "1200px", margin: "0 auto", marginTop: "120px", }}>
        {/* Villa Title */}
        <h1 style={{ fontSize: "36px", fontWeight: "700", fontFamily: "Montserrat, sans-serif", color:"#152C5B"}}>{villa.title}</h1>
        <p style={{ fontSize: "18px", color: "#888", fontFamily: "Montserrat, sans-serif",marginBottom:"20px" }}>{villa.location}</p>

        {/* Villa Image */}
        <div>
          <img
            src={villa.image}
            alt={villa.title}
            style={{
              width: "659.92px",
              height: "500px",
              borderRadius: "10px",
              justifyContent:'center',
            }}
          />
        </div>

        {/* Villa Description and Booking Information Container */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "30px",
            flexWrap: "wrap", // Ensures that on small screens, the layout adjusts
            gap: "5px", // Space between the description and booking info
            textAlign: "justify", // Makes text justified
            fontFamily: "'Montserrat', sans-serif",
          }}
        >
          {/* Villa Description (Left Side) */}
          <div style={{ flex: "1", maxWidth: "55%",marginLeft:"60px",marginTop:"40px" }}>
            <h2 style={{ fontSize: "24px", fontWeight: "600" }}>About the place:</h2>
            <p>{villa.description}</p>
          </div>

          {/* Booking Information (Right Side) */}
          <div
            style={{
              flex: "0 0 300px", // Ensures it has a fixed width
              padding: "20px",
              border: "1px solid #ddd",
              borderRadius: "8px",
              backgroundColor: "#f9f9f9",
              boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              fontFamily: "Montserrat, sans-serif",
            }}
          >
           <div
  style={{
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    marginTop: "20px",
  }}
>
  {/* Start Booking */}
  <div
    style={{
      fontSize: "18px", // Smaller font for the "Start Booking"
      fontWeight: "600", // Slightly lighter weight
      color: "#333", // Darker color for the "Start Booking"
      fontFamily: "Montserrat, sans-serif",
    }}
  >
    Start Booking:
  </div>

  {/* Price */}
  <div
    style={{
      fontSize: "20px", // Larger font for the price
      fontWeight: "300", // Bold weight for the price
      color: "red", // Red color for the price to make it stand out
      marginTop: "5px", // Small gap between "Start Booking" and price
      fontFamily: "Montserrat, sans-serif",
    }}
  >
    IDR {villa.price} /per Night
  </div>

  {/* Book Now Button */}
  <button
    onClick={handleBookingClick} // Tambahkan handler ini
    style={{
      padding: "10px 20px",
      backgroundColor: "#0F67B1",
      color: "#fff",
      border: "none",
      borderRadius: "5px",
      fontSize: "16px",
      cursor: "pointer",
      marginTop: "20px",
      width: "100%",
      fontFamily: "Montserrat, sans-serif",
    }}
  >
    Book Now
  </button>
</div>
          </div>
        </div>

        {/* Villa Features */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "40px",
            flexWrap: "wrap",
            fontFamily: "Montserrat, sans-serif",
          }}
        >
          <div style={{ textAlign: "center", width: "15%" }}>
            <FontAwesomeIcon icon={faBed} size="2x" />
            <p>{villa.bedrooms} Bedroom</p>
          </div>
          <div style={{ textAlign: "center", width: "15%" }}>
            <FontAwesomeIcon icon={faShower} size="2x" />
            <p>1 Bathroom</p>
          </div>
          <div style={{ textAlign: "center", width: "15%" }}>
            <FontAwesomeIcon icon={faUtensils} size="2x" />
            <p>1 Dining Room</p>
          </div>
          <div style={{ textAlign: "center", width: "15%" }}>
            <FontAwesomeIcon icon={faWifi} size="2x" />
            <p>Free Wi-Fi</p>
          </div>
          <div style={{ textAlign: "center", width: "15%" }}>
            <FontAwesomeIcon icon={faTv} size="2x" />
            <p>{villa.tvCount || 1} TV</p>
          </div>
          <div style={{ textAlign: "center", width: "15%" }}>
            <FontAwesomeIcon icon={faBox} size="2x" />
            <p>{villa.fridgeCount || 1} Refrigerator</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default VillaDetailsPage;