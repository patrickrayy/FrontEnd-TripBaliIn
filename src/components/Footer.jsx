import React from "react";

function Footer() {
  const styles = {
    footer: {
      backgroundColor: "#2575B8",
      color: "#fff",
      padding: "30px",
      width: "100vw",
      height: "auto", // Make the height dynamic to accommodate content
      display: "flex",
      justifyContent: "space-around",
      alignItems: "flex-start",
      flexWrap: "wrap",
      fontFamily: "Montserrat, sans-serif",
    },
    section: {
      flex: "1 1 200px", // Allow sections to shrink and grow
      margin: "0 20px",
      marginTop: "70px",
    },
    title: {
      fontSize: "15px",
      fontWeight: "700",
      marginBottom: "20px",
      textAlign: "left",
    },
    listItem: {
      textAlign: "left",
      fontSize: "15px",
    },
    dropdown: {
      backgroundColor: "#0F67B1",
      width: "210px",
      height: "48px",
      borderColor: "#fff",
      borderRadius: "4px",
      color: "#fff",
      padding: "5px",
      fontSize: "14px",
      marginBottom: "10px",
    },
    dropdownTitle: {
      fontSize: "15px",
      fontWeight: "700",
      marginBottom: "10px",
      textAlign: "left",
      marginLeft: "80px",
    },
    paymentIcons: {
      display: "grid",
      gridTemplateColumns: "repeat(5, 1fr)",
      gap: "5px",
      marginTop: "10px",
    },
    paymentIcon: {
      width: "50px",
      height: "25px",
      objectFit: "contain",
    },
    copyright: {
      backgroundColor: "#0F67B1",
      color: "#fff",
      width: "100vw",
      height: "60px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
      fontFamily: "Montserrat, sans-serif",
      fontSize: "14px",
      fontWeight: "650",
    },
  };

  return (
    <footer>
      <div style={styles.footer}>
        {/* Language and Currency */}
        <div style={styles.section}>
          <div style={styles.dropdownTitle}>Language</div>
          <select style={styles.dropdown}>
            <option>English (UK)</option>
            <option>Indonesia (ID)</option>
          </select>

          <div style={styles.dropdownTitle}>Currency</div>
          <select style={styles.dropdown}>
            <option>IDR (Rp)</option>
          </select>
        </div>

        {/* Company */}
        <div style={styles.section}>
          <div style={styles.title}>Company</div>
          <div style={styles.listItem}>About Us</div>
          <div style={styles.listItem}>Accommodation</div>
          <div style={styles.listItem}>Destination</div>
          <div style={styles.listItem}>Indonesia</div>
        </div>

        {/* Help */}
        <div style={styles.section}>
          <div style={styles.title}>Help</div>
          <div style={styles.listItem}>Contact us</div>
          <div style={styles.listItem}>FAQs</div>
          <div style={styles.listItem}>Terms and conditions</div>
          <div style={styles.listItem}>Privacy policy</div>
          <div style={styles.listItem}>Sitemap</div>
        </div>

        {/* Payment Methods */}
        <div style={styles.section}>
          <div style={styles.title}>Payment Methods Possible</div>
          <div style={styles.paymentIcons}>
            <img src="/assets/images/visa.png" alt="Visa" style={styles.paymentIcon} />
            <img src="/assets/images/mastercard.png" alt="Mastercard" style={styles.paymentIcon} />
            <img src="/assets/images/indo.png" alt="Indo" style={styles.paymentIcon} />
            <img src="/assets/images/bca.png" alt="BCA" style={styles.paymentIcon} />
            <img src="/assets/images/mandiri.png" alt="Mandiri" style={styles.paymentIcon} />
            <img src="/assets/images/bri.png" alt="BRI" style={styles.paymentIcon} />
            <img src="/assets/images/alfa.png" alt="Alfamart" style={styles.paymentIcon} />
            <img src="/assets/images/alfa2.png" alt="Alfa2" style={styles.paymentIcon} />
            <img src="/assets/images/dki.png" alt="DKI" style={styles.paymentIcon} />
            <img src="/assets/images/bni.png" alt="BNI" style={styles.paymentIcon} />
          </div>
        </div>
      </div>

      {/* Copyright  */}
      <div style={styles.copyright}>
        Copyright 2024 TripBaliin. All Rights Reserved
      </div>
    </footer>
  );
}

export default Footer;
