import React from "react";
import NavbarAfter from "../components/NavbarAfter"; // Sesuaikan path
import Footer from "../components/Footer"; // Sesuaikan path
import HistoryCard from "../components/HistoryCard"; // Sesuaikan path

const HistoryPage = () => {
  const rentalProviders = [
    {
      companyName: "Grania Bali Villas",
      ratingStar: 5,
      reviewValue: 130,
      totalPrice: "IDR 1,812,880",
      image: "/assets/images/villa1.png", // Pastikan path ini benar
      address: " Jalan Dewi Saraswati III / 35, 80361 Seminyak, Indonesia",
      roomDaysInfo: "2 rooms 2 days", // Info Room & Days
      checkInDate: "Wed, 13 Nov, 2024",
      checkOutDate: "Sun, 17 Nov, 2024",
    },
    {
      companyName: "Nusa Dua Beach Hotel",
      ratingStar: 4,
      reviewValue: 200,
      totalPrice: "IDR 1,779,000",
      image: "/assets/images/villa2.png",
      address: " Jalan Dewi Saraswati III / 35, 80361 Seminyak, Indonesia",
      roomDaysInfo: "2 rooms 2 days"
    },
    {
      companyName: "Eden Hotel Kuta Bali",
      ratingStar: 5,
      reviewValue: 150,
      totalPrice: "IDR 2,180,890",
      image: "/assets/images/villa3.png", // Pastikan path ini benar
      address: " Jalan Dewi Saraswati III / 35, 80361 Seminyak, Indonesia",
      roomDaysInfo: "2 rooms 2 days"
    },
  ];

  return (
    <div>
      {/* Navbar */}
      <NavbarAfter />

      {/* Konten Utama */}
      <div style={{ padding: "120px", maxWidth: "1900px", margin: "0 auto" }}>
        <h1 style={styles.breadcrumb}>
          <span style={styles.breadcrumbLink}>Home  / </span>  History
        </h1>
        {rentalProviders.map((provider, index) => (
          <HistoryCard
            key={index}
            companyName={provider.companyName}
            ratingStar={provider.ratingStar}
            reviewValue={provider.reviewValue}
            totalPrice={provider.totalPrice}
            image={provider.image}
            address={provider.address}
            roomDaysInfo={provider.roomDaysInfo}
            checkInDate={provider.checkInDate}
            checkOutDate={provider.checkOutDate}
          />
        ))}

        {/* Tombol Back to Home di bagian bawah */}
        <div style={{ textAlign: "center", marginTop: "20px" }}>
          <button
            style={styles.backButton}
            onClick={() => (window.location.href = "/home")}
          >
            Back to Home
          </button>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

const styles = {
  breadcrumb: {
    fontSize: "20px", // Ukuran font
    fontWeight: "bold", // Teks tebal
    color: "#007BFF", // Warna abu-abu
    marginBottom: "20px", // Jarak bawah
    fontFamily: "'Arial', sans-serif", // Font
    textAlign: "left",
  },
  breadcrumbLink: {
    color: "#6F6F6F", // Warna biru untuk "Home"
    cursor: "pointer", // Tunjukkan sebagai link
  },
  backButton: {
    backgroundColor: "#007BFF",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    padding: "10px 20px",
    fontSize: "16px",
    fontWeight: "bold",
    cursor: "pointer",
    marginTop: "20px",
    textAlign: "center",
  },
};

export default HistoryPage;




