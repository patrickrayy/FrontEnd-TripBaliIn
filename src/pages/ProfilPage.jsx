import React from "react";
import SideBar from "../components/Sidebar";
import Profiledetails from "../components/ProfileDetails";
import NavbarAfter from "../components/NavbarAfter";
import Footer from "../components/Footer";

const ProfilePage = () => {
  return (
    <div style={styles.pageContainer}>
      {/* Navbar di atas */}
      <NavbarAfter />

      {/* Sidebar dan ProfileDetails di bawah Navbar */}
      <div style={styles.mainContent}>
        <SideBar style={styles.sidebar} />
        <div style={styles.content}>
          <Profiledetails />
        </div>
      </div>

      {/* Footer di bagian bawah */}
      <Footer />
    </div>
  );
};

const styles = {
  pageContainer: {
    display: "flex",
    flexDirection: "column", // Mengatur elemen dalam kolom
    width: "100%",
    minHeight: "100vh",
    backgroundColor: "#F8F9FA",
  },
  mainContent: {
    display: "flex",
    flexDirection: "row",
    flex: "1", // Mengambil sisa ruang antara Navbar dan Footer
    width: "100%",
    marginTop: "102px", // Memberikan jarak dari Navbar (sesuaikan dengan tinggi Navbar)
  },
  sidebar: {
    flex: "0 0 250px", // Lebar sidebar tetap
    backgroundColor: "#FFFFFF",
    boxShadow: "2px 0 5px rgba(0, 0, 0, 0.1)",
    height: "calc(100vh - 102px)", // Menyesuaikan tinggi berdasarkan Navbar
  },
  content: {
    flex: "1", // Konten mengambil sisa ruang
    padding: "20px",
    backgroundColor: "#FFFFFF",
    overflowY: "auto", // Tambahkan scroll jika konten terlalu tinggi
    height: "calc(100vh - 102px)", // Menyesuaikan tinggi berdasarkan Navbar
  },
};

export default ProfilePage;
