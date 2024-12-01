import React, { useRef } from "react";

const AcoContent = () => {
  const scrollContainer = useRef(null);

  const scrollLeft = () => {
    if (scrollContainer.current) {
      scrollContainer.current.scrollBy({
        left: -300,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainer.current) {
      scrollContainer.current.scrollBy({
        left: 300,
        behavior: "smooth",
      });
    }
  };

  const offers = [
    {
      title: "Cashback",
      discount: "75%",
      code: "CBK009",
      description: "Syarat & ketentuan berlaku",
      image: "/assets/images/family-1.png",
    },
    {
      title: "Discount",
      discount: "50%",
      code: "BNIV001",
      description: "Syarat & ketentuan berlaku",
      image: "/assets/images/family-2.png",
    },
    {
      title: "Discount",
      discount: "500K",
      code: "SMD009",
      description: "Syarat & ketentuan berlaku",
      image: "/assets/images/offercardbg-1.png",
    },
    {
      title: "Discount",
      discount: "200K",
      code: "AFE003",
      description: "Syarat & ketentuan berlaku",
      image: "/assets/images/offercardbg-2.png",
    },
    {
      title: "Discount",
      discount: "200K",
      code: "AFE003",
      description: "Syarat & ketentuan berlaku",
      image: "/assets/images/offercardbg-2.png",
    },
  ];

  const styles = {
    container: {
      fontFamily: "Montserrat, sans-serif",
      maxWidth: "1200px",
      margin: "0 auto",
      padding: "20px",
    },
    mainTitle: {
      marginTop: "100px",
      position: "relative",
      zIndex: 2,
      color: "#fff",
    },
    mainTitleH1: {
      fontSize: "40px",
      fontWeight: "bold",
      marginBottom: "10px",
      marginLeft: "60px",
      marginTop: "100px",
      color: "black",
      textAlign: "center",
    },
    mainTitleP: {
      fontSize: "18px",
      color: "black",
    },
    imageSection: {
      position: "relative",
      marginTop: "410px",
      marginBottom: "40px",
      maxWidth: "1139px",
      height: "auto", 
      borderRadius: "10px",
    },
    mainImage: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      marginTop:"-355px"
    },
    offers: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      gap: "20px",
      margin: "50px auto",
      maxWidth: "1200px",
      padding: "20px",
      fontFamily: "Montserrat, sans-serif",
    },
    textSection: {
      paddingRight: "0px",
    },
    title: {
      fontSize: "32px",
      fontWeight: "bold",
      marginBottom: "10px",
      marginRight: "150px",
    },
    description: {
      fontSize: "16px",
      color: "#666",
      textAlign: "left",
      fontWeight: "550",
    },
    scrollableSection: {
      flex: 1,
      position: "relative",
      overflow: "hidden",
    },
    scrollableWrapper: {
      display: "flex",
      gap: "25px",
      overflowX: "auto",
      scrollBehavior: "smooth",
      padding: "10px 0",
    },
  };

  const cardStyles = {
    card: {
      display: "flex",
      position: "relative",
      width: "300px",
      height: "200px",
      backgroundColor: "#96C9F4",
      borderRadius: "10px",
      overflow: "hidden",
      boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
    },
    content: {
      flex: "1",
      padding: "20px",
      zIndex: 2,
    },
    title: {
      fontSize: "18px",
      fontWeight: "bold",
      color: "#fff",
      marginBottom: "10px",
    },
    discount: {
      fontSize: "36px",
      fontWeight: "bold",
      color: "#fff",
      marginBottom: "10px",
    },
    codeContainer: {
      display: "flex",
      alignItems: "center",
      backgroundColor: "#40514E",
      width: "125px",
      color: "#fff",
      padding: "5px 10px",
      borderRadius: "5px",
      fontSize: "8px",
      marginBottom: "5px",
      fontWeight: "550",
    },
    description: {
      fontSize: "8px",
      color: "#fff",
    },
    image: {
      position: "absolute",
      top: "0",
      right: "0",
      height: "100%",
      width: "150px",
      objectFit: "cover",
      zIndex: 1,
    },
    overlay: {
      position: "absolute",
      top: "0",
      right: "0",
      height: "100%",
      width: "150px",
      background: "rgba(0, 0, 0, 0.2)",
      zIndex: 1,
    },
    shape: {
      position: "absolute",
      top: "0",
      left: "0",
      height: "100%",
      width: "80%",
      backgroundColor: "#0f67b1",
      clipPath: "polygon(0 0, 70% 0, 60% 100%, 0% 100%)",
      zIndex: 0,
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.mainTitle}>
        <h1 style={styles.mainTitleH1}>Chase Elegance. Reserve Your Dream Stay Now.</h1>
        <p style={styles.mainTitleP}>
          From classic, elegant to modern and minimalist, you can find it here
        </p>
      </div>
      <div style={styles.imageSection}>
        <img
          src="/assets/images/acocontent.png"
          alt="Beautiful Accommodation"
          style={styles.mainImage}
        />
      </div>
      <div style={styles.offers}>
        {/* Text Section */}
        <div style={styles.textSection}>
          <h2 style={styles.title}>Special offers for you</h2>
          <p style={styles.description}>
            Enjoy exclusive discounts and special offers for your holidays!
          </p>
        </div>

        {/* Scrollable Section */}
        <div style={styles.scrollableSection}>
          <div style={styles.scrollableWrapper} ref={scrollContainer}>
            {offers.map((offer, index) => (
              <div key={index} style={{ flexShrink: 0 }}>
                <div style={cardStyles.card}>
                  <div style={cardStyles.content}>
                    <h3 style={cardStyles.title}>{offer.title}</h3>
                    <p style={cardStyles.discount}>{offer.discount}</p>
                    <div style={cardStyles.codeContainer}>Kode promo: {offer.code}</div>
                    <p style={cardStyles.description}>{offer.description}</p>
                  </div>
                  <div style={cardStyles.shape}></div>
                  <img src={offer.image} alt={offer.title} style={cardStyles.image} />
                  <div style={cardStyles.overlay}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AcoContent;
