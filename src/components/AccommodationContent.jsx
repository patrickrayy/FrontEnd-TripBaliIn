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
    } else {
        console.log("scroll container not found");
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

  const OfferCard = ({ title, discount, code, description, image }) => {
    const styles = {
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
        width: '125px',
        color: "#fff",
        padding: "5px 10px",
        borderRadius: "5px",
        fontSize: "9px",
        marginBottom: "5px",
        marginLeft: "-5px",
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
      <div style={styles.card}>
        <div style={styles.content}>
          <h3 style={styles.title}>{title}</h3>
          <p style={styles.discount}>{discount}</p>
          <div style={styles.codeContainer}>Kode promo: {code}</div>
          <p style={styles.description}>{description}</p>
        </div>
        <div style={styles.shape}></div>
        <img src={image} alt={title} style={styles.image} />
        <div style={styles.overlay}></div>
      </div>
    );
  };

  const styles = {
    container: {
      fontFamily: "Montserrat, sans-serif",
      maxWidth: "1200px",
      margin: "0 auto",
      padding: "20px",
      textAlign: "center",
    },
    mainTitle: {
      marginBottom: "20px",
    },
    mainTitleH1: {
      fontSize: "40px",
      fontWeight: "bold",
      marginBottom: "10px",
      marginTop: "150px",
      color: "#333",
    },
    mainTitleP: {
      fontSize: "18px",
      color: "#666",
    },
    imageSection: {
        display: "flex",
      marginBottom: "40px",
      width: '1170px',
      height: '500px',
    },
    mainImage: {
      width: "100%",
      height: "auto",
      borderRadius: "10px",
      boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
    },
    offersContainer: {
      marginTop: "40px",
      textAlign: "left",
    },
    titleSection: {
      marginBottom: "20px",
    },
    titleSectionH2: {
      marginTop: "90px",
      fontSize: "24px",
      fontWeight: "bold",
      color: "#0f67b1",
    },
    titleSectionP: {
      fontSize: "16px",
      color: "#666",
    },
    scrollableOffersWrapper: {
      position: "relative",
      overflow: "auto",  // Ensures the content can be scrolled horizontally
      width: "100%",  // Ensure it takes up the full width of the container
    },
    offersWrapper: {
      display: "flex",
      gap: "20px",
      padding: "10px 0",
      whiteSpace: "nowrap", // Prevents wrapping
    },
    scrollButton: {
      position: "fixed",  // Position the button fixed
      top: "50%",
      transform: "translateY(-50%)",
      backgroundColor: "#0f67b1",
      color: "#fff",
      border: "none",
      borderRadius: "50%",
      width: "40px",
      height: "40px",
      cursor: "pointer",
      zIndex: 3,
    },
    scrollButtonLeft: {
      left: "20px",  
    },
    scrollButtonRight: {
      right: "20px",  
    },
  };

  return (
    <div style={styles.container}>
      {/* Main Title */}
      <div style={styles.mainTitle}>
        <h1 style={styles.mainTitleH1}>Chase Elegance. Reserve Your Dream Stay Now.</h1>
        <p style={styles.mainTitleP}>
          From classic, elegant to modern and minimalist, you can find it here
        </p>
      </div>

      {/* Image Section */}
      <div style={styles.imageSection}>
        <img
          src="/assets/images/acocontent.png"
          alt="Beautiful Accommodation"
          style={styles.mainImage}
        />
      </div>

      {/* Special Offers Section */}
      <div style={styles.offersContainer}>
        <div style={styles.titleSection}>
          <h2 style={styles.titleSectionH2}>Special offers for you</h2>
          <p style={styles.titleSectionP}>
            Lots of discounts to make your holiday even more economical
          </p>
        </div>

        {/* Container for offers */}
        <div style={styles.scrollableOffersWrapper}>
          <div style={styles.offersWrapper} ref={scrollContainer}>
            {offers.map((offer, index) => (
              <div key={index} style={{ display: "inline-block" }}>
                <OfferCard
                  title={offer.title}
                  discount={offer.discount}
                  code={offer.code}
                  description={offer.description}
                  image={offer.image}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AcoContent;
