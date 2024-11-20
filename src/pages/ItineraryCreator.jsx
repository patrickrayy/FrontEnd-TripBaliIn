import React, { useState } from 'react';
import NavbarAfter from '../components/NavbarAfter';
import Footer from '../components/Footer';
import ItineraryCreate from '../components/ItineraryCreate';
import { useNavigate } from 'react-router-dom';

const ItineraryCreator = () => {
  const navigate = useNavigate();
  const [itineraryData, setItineraryData] = useState(null);

  const handleCreateItinerary = (data) => {
    setItineraryData(data);
    navigate('/itinerary-preview', { state: data });
  };

  return (
    <>
      <NavbarAfter />
      <div style={{ padding: '20px', maxWidth: '1200px', margin: 'auto' }}>
        <h1>Create Your Itinerary</h1>
        <ItineraryCreate onCreate={handleCreateItinerary} />
      </div>
      <Footer />
    </>
  );
};

export default ItineraryCreator;
