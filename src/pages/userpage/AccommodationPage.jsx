import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import NavbarAfter from "../../components/NavbarAfter";
import Footer from "../../components/Footer";
import AcoContent from "../../components/AccommodationContent";
import ScrollableVillaCards from "../../components/VillaCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const AccommodationPage = () => {
  const [data, setData] = useState([]); 
  const [filteredVillas, setFilteredVillas] = useState([]); 
  const [searchQuery, setSearchQuery] = useState(""); 
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(""); 
  const navigate = useNavigate();

  useEffect(() => {
    const fetchVillas = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/accommodations/aco");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        console.log('nyambung')
        const result = await response.json();
        setData(result); 
        setFilteredVillas(result);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching data:", err);
        setError("Failed to load accommodations");
        setLoading(false);
      }
    };

    fetchVillas();
  }, []);


  // Fungsi pencarian
  const handleSearch = (query) => {
    setSearchQuery(query);

    if (query.trim() === "") {
      setFilteredVillas(data);
      return;
    }

    const lowercasedQuery = query.toLowerCase();
    const filtered = data.filter((villa) => {
      const titleMatch = villa.title.toLowerCase().includes(lowercasedQuery);
      const locationMatch = villa.location.toLowerCase().includes(lowercasedQuery);
      return titleMatch || locationMatch;
    });

    setFilteredVillas(filtered);
  };

  const handleVillaClick = (villa) => {
    navigate(`/villadetails`, { state: { villa } });
  };

  if (error) return <p style={{ textAlign: "center", color: "red" }}>{error}</p>;

  return (
    <>
      <NavbarAfter />
      <AcoContent />

      {/* Search Bar */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", margin: "20px 0" }}>
        <div>
          <h1 style={{ fontSize: "32px", fontFamily: "Montserrat", fontWeight: "700", marginBottom: "10px", marginLeft: "90px" }}>
            Good deals at Villas
          </h1>
          <p style={{ fontSize: "18px", fontFamily: "Montserrat", color: "#6f6f6f", marginLeft: "290px" }}>
            Stay with your loved ones at deluxe villas at the best price!
          </p>
        </div>
        <div style={{ display: "flex", justifyContent: "flex-end", marginRight: "300px" }}>
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
              backgroundColor: "#e9e9e9",
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

      {/* Villa List */}
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-around", padding: "20px" }}>
        {loading ?(
          <p style={{ fontSize: "18px", fontWeight: "bold", textAlign: "center" }}>Loading...</p>
        ) : (
          filteredVillas.map((villa) => (
            <div key={villa.id} onClick={() => handleVillaClick(villa)} style={{ cursor: "pointer" }}>{
              villa.category == 'villa' ?               <ScrollableVillaCards {...villa} /> : ''
            }
            </div>
          ))
        )}
      </div>
      <h1 style={{ fontSize: "32px", fontFamily: "Montserrat", fontWeight: "700", marginBottom: "100px", marginLeft: "-700px", marginTop: '100px' }}>
            Hotel Recommendation
      </h1>
            {/* Villa List */}
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-around", padding: "20px" }}>
        {loading ? (
          <p style={{ fontSize: "18px", fontWeight: "bold", textAlign: "center" }}>Loading...</p>
        ) : (
          filteredVillas.map((villa) => (
            <div key={villa.id} onClick={() => handleVillaClick(villa)} style={{ cursor: "pointer" }}>
              {villa.category == 'hotel' ? <ScrollableVillaCards {...villa} /> : ''}
            </div>
          ))
        )}
      </div>

      <Footer />
    </>
  );
};

export default AccommodationPage;
