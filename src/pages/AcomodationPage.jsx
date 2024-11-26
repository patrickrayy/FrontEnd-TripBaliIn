import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Untuk navigasi
import NavbarAfter from "../components/NavbarAfter";
import Footer from "../components/Footer";
import AcoContent from "../components/AccommodationContent";
import ScrollableVillaCards from "../components/VillaCard";
<<<<<<< HEAD
import HotelCard from "../components/HotelCard";
=======
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
>>>>>>> 7dadbfdf5f8b093cead55c4f78d10c443f2debb4

const AccommodationPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredVillas, setFilteredVillas] = useState([]);
  const navigate = useNavigate(); // Hook untuk navigasi

<<<<<<< HEAD
    const villaData = [
        {
            title: "Grania Bali Villas",
            price: "906.440",
            persons: 4,
            bedrooms: 2,
            hasPool: true,
            image: "/assets/images/villa-1.png",
        },
        {
            title: "Downtown Boutique Villas",
            price: "1.450.789",
            persons: 8,
            bedrooms: 4,
            hasPool: true,
            image: "/assets/images/villa-2.png",
        },
        {
            title: "Danoya Villa Seminyak",
            price: "1.578.380",
            persons: 6,
            bedrooms: 3,
            hasPool: true,
            image: "/assets/images/villa-3.png",
        },
        {
            title: "Jas Green Villas and Spa",
            price: "1.200.000",
            persons: 4,
            bedrooms: 2,
            hasPool: true,
            image: "/assets/images/villa-4.png",
        },
        {
            title: "Maharaja Villas",
            price: "1.217.890",
            persons: 4,
            bedrooms: 2,
            hasPool: true,
            image: "/assets/images/villa-5.png",
        },
        {
            title: "The Sawah Villa",
            price: "490.890",
            persons: 2,
            bedrooms: 1,
            hasPool: true,
            image: "/assets/images/villa-6.png",
        },
        {
            title: "Kayangan Villa Ubud",
            price: "837.118",
            persons: 2,
            bedrooms: 1,
            hasPool: true,
            image: "/assets/images/villa-7.png",
        },
        {
            title: "Noah Villa & Chapel",
            price: "560.738",
            persons: 6,
            bedrooms: 3,
            hasPool: true,
            image: "/assets/images/villa-8.png",
        }, 
    ]
        const hotelData = [
            {
                title: "The Stones Hotel Legian",
                price: "3.789.039",
                location: "Jl. Raya Pantai Kuta Banjar Legian Kelod",
                image: "/assets/images/hotel-1.png",
            },
            {
                title: "Eden Hotel Kuta Bali",
                price: "420.279",
                location: "Jl. Kartika Plaza No.42, Kuta, Bali",
                image: "/assets/images/hotel-2.png",
            },
            {
                title: "Hilton Bali Resort",
                price: "3.509.980",
                location: "Jl. Raya Nusa Dua Selatan, Benoa, Bali",
                image: "/assets/images/hotel-3.png",
            },
            {
                title: "Nusa Dua Beach Hotel",
                price: "1.779.000",
                location: "Jl. Nusa Dua, Benoa, Kec. Kuta, Bali",
                image: "/assets/images/hotel-4.png",
            },
            {
                title: "Hotel ZIA Bali",
                price: "1.350.000",
                location: "Jl. Ciung Wanara no.17",
                image: "/assets/images/hotel-6.png",
            },
            {
                title: "Rofa Kuta Hotel",
                price: "420.279",
                location: "Jl. Nakula No.9, Legian, Kec. Kuta",
                image: "/assets/images/hotel-5.png",
            },
            {
                title: "Tandjung Sari Hotel",
                price: "3.567.890",
                location: "Jl. Danau Tamblingan No.41, Sanur",
                image: "/assets/images/hotel-7.png",
            },
            {
                title: "Hard Rock Hotel Bali",
                price: "2.538.420",
                location: "Jl. Pantai Kuta, Banjar Pande Mas",
                image: "/assets/images/hotel-8.png",
            },
            {
                title: "PrimeBiz Hotel Kuta",
                price: "378.093",
                location: "Jl. Raya Kuta No.66, Kuta, Bali",
                image: "/assets/images/hotel-9.png",
            },
            {
                title: "Amnaya Resort Kuta",
                price: "1.301.364",
                location: "Jl. Kartika Plaza Gg. Puspa Ayu No.99, Kuta",
                image: "/assets/images/hotel-10.png",
            },
            
        ]

    return (
        <>
        <NavbarAfter/>
        <AcoContent/>
        <h1 style={{fontFamily: 'Montserrat, sans-serif', fontSize: "32px", fontWeight: "700", marginBottom: "20px", textAlign: 'left', marginLeft: '270px',marginTop: '90px'}}>Good deals at Villas</h1>
        <p style={{ fontFamily: "Montserrat, sans-serif", fontSize: "18px", fontWeight: "550", color: "#6f6f6f", marginBottom: "30px",marginRight: '640px' }}>Stay with your loved ones at deluxe villas at the best price!</p>
        <div style={{display: "flex", flexWrap: "wrap", justifyContent: "space-around", padding: "20px"}}>
            {villaData.map((villa, index)=> (<ScrollableVillaCards key={index}{...villa}/>))}
        </div>
        <h1 style={{fontFamily: 'Montserrat, sans-serif', fontSize: "32px", fontWeight: "700", marginBottom: "20px", textAlign: 'left', marginLeft: '270px',marginTop: '90px'}}>Hotel Recommendations</h1>
        <div style={{display: "flex", flexWrap: "wrap", justifyContent: "space-around", padding: "20px"}}>
            {hotelData.map((hotel, index)=> (<HotelCard key={index}{...hotel}/>))}
        </div>
        <Footer/>
        </>
    )
}
=======
  // Data villa (satu saja untuk contoh)
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
>>>>>>> 7dadbfdf5f8b093cead55c4f78d10c443f2debb4

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
    // Navigate ke halaman detail dengan data villa yang dipilih menggunakan state
    navigate(`/villa-details/${villa.id}`, { state: { villa } });
  };

  return (
    <>
      <NavbarAfter />
      <AcoContent />
      
      {/* Search Bar */}
      <div style={{ display: "flex", justifyContent: "center", margin: "20px 0" }}>
        <input
          type="text"
          placeholder="Search by title or location"
          value={searchQuery}
          onChange={(e) => handleSearch(e.target.value)}
          style={{ width: "300px", padding: "10px", fontSize: "16px", border: "1px solid #ccc", borderRadius: "5px", marginRight: "10px" }}
        />
        <button style={{ padding: "10px 15px", fontSize: "16px", color: "#fff", backgroundColor: "#0F67B1", border: "none", borderRadius: "5px", cursor: "pointer" }}>
          <FontAwesomeIcon icon={faSearch} /> Search
        </button>
      </div>

      <h1 style={{ fontSize: "32px", fontWeight: "700", marginBottom: "20px", textAlign: "left", marginLeft: "270px" }}>
        Good deals at Villas
      </h1>
      <p style={{ fontSize: "18px", fontWeight: "550", color: "#6f6f6f", marginBottom: "30px" }}>
        Stay with your loved ones at deluxe villas at the best price!
      </p>

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