import React, { useState } from "react";
import Footer from "../../components/Footer";
import HeroSection from "../../components/HeroSection";
import NavbarAfter from "../../components/NavbarAfter";
import ScrollableCard from "../../components/ScrollableCard";

const DestinationPage = () => {
  const [searchQuery, setSearchQuery] = useState(""); // State untuk query pencarian
  const [filteredData, setFilteredData] = useState({
    recommendations: [],
    friendRecommendations: [],
    soloRecommendations: [],
  });

  const recommendations = [
    {
      id: 1,
      image: "/assets/images/2.png",
      title: "The Bali Swing",
      duration: "Duration 2 hours",
      price: "IDR 50.000",
      viewers: "584",
      rating: 3,
    },
    {
      id: 2,
      image: "/assets/images/3.png",
      title: "Tirta Empul",
      duration: "Duration 2 hours",
      price: "IDR 50.000",
      viewers: "584",
      rating: 4,
    },
    {
      id: 3,
      image: "/assets/images/4.png",
      title: "Pura Luhur Lempuyang",
      duration: "Duration 2 hours",
      price: "IDR 50.000",
      viewers: "584",
      rating: 5,
    },
    {
      id: 4,
      image: "/assets/images/5.png",
      title: "Pura Ulun Danu Bratan",
      duration: "Duration 2 hours",
      price: "IDR 50.000",
      viewers: "584",
      rating: 4,
    },
    {
      id: 5,
      image: "/assets/images/5.png",
      title: "Pura Ulun Danu Bratan",
      duration: "Duration 2 hours",
      price: "IDR 50.000",
      viewers: "584",
      rating: 4,
    },
  ];

  const friendRecommendations = [
    {
      id: 5,
      image: "/assets/images/6.png",
      title: "Banyumala Twin Waterfall",
      duration: "Duration 2 hours",
      price: "IDR 30.000",
      viewers: "300",
      rating: 3,
    },
    {
      id: 6,
      image: "/assets/images/7.png",
      title: "Campuhan Ridge Walk",
      duration: "Duration 2 hours",
      price: "IDR 25.000",
      viewers: "400",
      rating: 5,
    },
    {
      id: 7,
      image: "/assets/images/8.png",
      title: "Taman Budaya GWK",
      duration: "Duration 2 hours",
      price: "IDR 40.000",
      viewers: "200",
      rating: 4,
    },
    {
      id: 8,
      image: "/assets/images/9.png",
      title: "Pantai Kelingking Penidai",
      duration: "Duration 2 hours",
      price: "IDR 35.000",
      viewers: "150",
      rating: 5,
    },
    {
      id: 8,
      image: "/assets/images/9.png",
      title: "Pantai Kelingking Penidai",
      duration: "Duration 2 hours",
      price: "IDR 35.000",
      viewers: "150",
      rating: 5,
    },
    {
      id: 8,
      image: "/assets/images/9.png",
      title: "Pantai Kelingking Penidai",
      duration: "Duration 2 hours",
      price: "IDR 35.000",
      viewers: "150",
      rating: 5,
    },
  ];
    const styles = {
    sectionTitle: {
      marginTop: "100px", 
      fontFamily: "Montserrat, sans-serif",
      fontSize: "28px",
      fontWeight: "bold",
      textAlign: "left",
      marginLeft: "75px",
    },
    };

  const soloRecommendations = [
    {
      id: 9,
      image: "/assets/images/10.png",
      title: "Pantai Jimbaran",
      duration: "Duration 2 hours",
      price: "IDR 30.000",
      viewers: "300",
      rating: 3,
    },
    {
      id: 10,
      image: "/assets/images/11.png",
      title: "Pantai Sanur",
      duration: "Duration 2 hours",
      price: "IDR 25.000",
      viewers: "400",
      rating: 3,
    },
    {
      id: 11,
      image: "/assets/images/12.png",
      title: "Hidden Canyon Beji Guwang",
      duration: "Duration 2 hours",
      price: "IDR 40.000",
      viewers: "200",
      rating: 5,
    },
    {
      id: 12,
      image: "/assets/images/13.png",
      title: "Pura Ulun Danu Bedugul",
      duration: "Duration 2 hours",
      price: "IDR 35.000",
      viewers: "150",
      rating: 5,
    },
    {
      id: 11,
      image: "/assets/images/12.png",
      title: "Hidden Canyon Beji Guwang",
      duration: "Duration 2 hours",
      price: "IDR 40.000",
      viewers: "200",
      rating: 5,
    },
    {
      id: 11,
      image: "/assets/images/12.png",
      title: "Hidden Canyon Beji Guwang",
      duration: "Duration 2 hours",
      price: "IDR 40.000",
      viewers: "200",
      rating: 5,
    },
    {
      id: 11,
      image: "/assets/images/12.png",
      title: "Hidden Canyon Beji Guwang",
      duration: "Duration 2 hours",
      price: "IDR 40.000",
      viewers: "200",
      rating: 5,
    },
    {
      id: 11,
      image: "/assets/images/12.png",
      title: "Hidden Canyon Beji Guwang",
      duration: "Duration 2 hours",
      price: "IDR 40.000",
      viewers: "200",
      rating: 5,
    },
  ];
  

   // Gabungkan semua data berdasarkan kategori
   const allData = {
    recommendations,
    friendRecommendations,
    soloRecommendations,
  };

  // Fungsi pencarian
  const handleSearch = (query) => {
    setSearchQuery(query); // Set nilai pencarian
    if (query) {
      const lowercasedQuery = query.toLowerCase();
      const filtered = Object.keys(allData).reduce((acc, key) => {
        acc[key] = allData[key].filter(
          (item) =>
            item.title.toLowerCase().includes(lowercasedQuery) ||
            item.price.toLowerCase().includes(lowercasedQuery)
        );
        return acc;
      }, {});
      setFilteredData(filtered);
    } else {
      setFilteredData(allData); // Tampilkan semua data jika tidak ada pencarian
    }
  };

  // Data untuk ditampilkan (hasil pencarian atau data asli)
  const dataToShow = searchQuery ? filteredData : allData;

  return (
    <div>
      <NavbarAfter />
      <HeroSection onSearch={handleSearch} />
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "20px" }}>
        {/* Family Vacation */}
        <ScrollableCard
          title="Family Vacation"
          recommendations={dataToShow.recommendations}
        />

        {/* Friend Destination */}
        <ScrollableCard
          title="Friend Destination"
          recommendations={dataToShow.friendRecommendations}
        />

        {/* Solo Travel */}
        <ScrollableCard
          title="Solo Travel Destination"
          recommendations={dataToShow.soloRecommendations}
        />
      </div>
      <Footer />
    </div>
  );
};

export default DestinationPage;