import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import NavbarAfter from "../../components/NavbarAfter";
import Footer from "../../components/Footer";
import AcoContent from "../../components/AccommodationContent";
import ScrollableVillaCards from "../../components/VillaCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const AccommodationPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredVillas, setFilteredVillas] = useState([]);
  const navigate = useNavigate();

  const villaData = [
    {
        id: 1,
        title: "Grania Bali Villas",
        price: "906.440",
        persons: 4,
        bedrooms: 2,
        hasPool: true,
        location: "Seminyak, Bali",
        image: "/assets/images/villa-1.png",
        description: "Nestled just a 5-minute walk from the iconic Seminyak Beach, Grania Bali Villas offers a serene retreat with an elegant open-concept space. Perfect for families or small groups, the villa features a private pool, a spacious living room, and a fully equipped kitchen. Enjoy a blend of modern comfort and traditional Balinese charm.",
      },
      {
        id: 2,
        title: "Downtown Boutique Villas",
        price: "1.450.789",
        persons: 8,
        bedrooms: 4,
        hasPool: true,
        location: "Kuta, Bali",
        image: "/assets/images/villa-2.png",
        description: "Located in the heart of Kuta, Downtown Boutique Villas offers a chic urban escape. The villa comes with a private swimming pool, contemporary interiors, and expansive outdoor spaces, making it ideal for larger groups or family gatherings. Its central location puts you just minutes away from top shopping and dining spots.",
      },
      {
        id: 3,
        title: "Danoya Villa Seminyak",
        price: "1.578.380",
        persons: 6,
        bedrooms: 3,
        hasPool: true,
        location: "Seminyak, Bali",
        image: "/assets/images/villa-3.png",
        description: "Danoya Villa Seminyak blends luxury and tranquility with its spacious design and lush surroundings. Located in the peaceful area of Ubud, the villa is an ideal retreat for those looking to immerse themselves in Bali's natural beauty. Enjoy the luxury of a private pool, fully equipped kitchen, and large garden area perfect for relaxation.",
      },
      {
        id: 4,
        title: "Jas Green Villas and Spa",
        price: "1.200.000",
        persons: 4,
        bedrooms: 2,
        hasPool: true,
        location: "Seminyak, Bali",
        date: "2024-12-09",
        image: "/assets/images/villa-4.png",
        description: "A tranquil haven just a short distance from Seminyak Beach, Jas Green Villas and Spa offers the perfect blend of comfort and serenity. The villa features a private pool, stylish interiors, and a lush garden, while the on-site spa promises ultimate relaxation. A perfect retreat for couples or small families.",
      },
      {
        id: 5,
        title: "Maharaja Villas",
        price: "1.217.890",
        persons: 4,
        bedrooms: 2,
        hasPool: true,
        location: "Nusa Penida, Bali",
        date: "2024-12-25",
        image: "/assets/images/villa-5.png",
        description: "Located in the picturesque Nusa Penida, Maharaja Villas provides a luxurious escape with spectacular ocean views. Surrounded by lush gardens, this villa offers a private pool, spacious living areas, and a contemporary design. Perfect for those seeking privacy and a connection with nature, yet close to the island's famous beaches.",
      },
      {
        id: 6,
        title: "The Sawah Villa",
        price: "490.890",
        persons: 2,
        bedrooms: 1,
        hasPool: true,
        location: "Tegallalang, Bali",
        image: "/assets/images/villa-6.png",
        description: "The Sawah Villa offers a peaceful retreat set amidst the tranquil rice terraces of Tegallalang. Perfect for couples, this cozy villa boasts a private infinity pool overlooking lush greenery. A true escape from the hustle and bustle, with easy access to the natural beauty and spiritual atmosphere of Bali.",
      },
      {
        id: 7,
        title: "Kayangan Villa Ubud",
        price: "837.118",
        persons: 2,
        bedrooms: 1,
        hasPool: true,
        location: "Ubud, Bali",
        image: "/assets/images/villa-7.png",
        description: "Kayangan Villa Ubud is a romantic hideaway nestled in the heart of Ubud’s cultural center. With traditional Balinese architecture and a private plunge pool, it’s the perfect setting for a couple’s getaway. Enjoy stunning views of the surrounding jungle and experience the tranquility that Ubud has to offer.",
      },
      {
        id: 8,
        title: "Noah Villa & Chapel",
        price: "560.738",
        persons: 6,
        bedrooms: 3,
        hasPool: true,
        location: "Canggu, Bali",
        image: "/assets/images/villa-8.png",
        description: "Noah Villa & Chapel is a luxurious villa located in Canggu, known for its picturesque beachfront views. The villa offers an expansive private pool, stylish living spaces, and a chapel ideal for intimate ceremonies. Perfect for groups or families looking to relax and enjoy Bali's vibrant beach life.",
      },
  ];

  const handleSearch = (query) => {
    setSearchQuery(query);

    if (query === "") {
      setFilteredVillas(villaData);
      return;
    }

    const lowercasedQuery = query.toLowerCase();
    const filtered = villaData.filter((villa) => {
      const titleMatch = villa.title.toLowerCase().includes(lowercasedQuery);
      const locationMatch = villa.location.toLowerCase().includes(lowercasedQuery);
      return titleMatch || locationMatch;
    });

    setFilteredVillas(filtered);
  };

  const handleVillaClick = (villa) => {
    navigate(`/villa-details/${villa.id}`, { state: { villa } });
  };

  return (
    <>
      <NavbarAfter />
      <AcoContent />

      {/* Search Bar */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "20px", marginBottom: "20px" }}>
        <div>
          <h1 style={{ fontSize: "32px", fontFamily: "Montserrat", fontWeight: "700", marginBottom: "20px", textAlign: "left", marginLeft:"290px" }}>
            Good deals at Villas
          </h1>
          <p style={{ fontSize: "18px", fontFamily: "Montserrat", fontWeight: "550", color: "#6f6f6f",marginLeft:"290px"  }}>
            Stay with your loved ones at deluxe villas at the best price!
          </p>
        </div>
        <div style={{ display: "flex", justifyContent: "flex-end", marginRight: "300px", }}>
          <input
            type="text"
            placeholder="Search by title or location"
            value={searchQuery}
            onChange={(e) => handleSearch(e.target.value)}
            style={{
              width: "300px",
              padding: "10px",
              fontSize: "16px",
              fontFamily: "Montserrat",
              border: "1px solid #ccc",
              borderRadius: "5px",
              marginRight: "10px",
              color:"#000",
              backgroundColor: "#e9e9e9"
            }}
          />
          <button
            style={{
              padding: "10px 15px",
              fontSize: "16px",
              fontFamily: "Montserrat",
              color: "#fff",
              backgroundColor: "#0F67B1",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            <FontAwesomeIcon icon={faSearch} /> Search
          </button>
        </div>
      </div>

      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-around", padding: "20px" }}>
        {(searchQuery ? filteredVillas : villaData).map((villa) => (
          <div key={villa.id} onClick={() => handleVillaClick(villa)} style={{ cursor: "pointer" }}>
            <ScrollableVillaCards {...villa} />
          </div>
        ))}
      </div>

      <Footer />
    </>
  );
};

export default AccommodationPage;