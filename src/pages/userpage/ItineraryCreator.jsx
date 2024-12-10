import React, { useEffect, useState } from 'react';
import NavbarAfter from '../../components/NavbarAfter';
import Footer from '../../components/Footer';
import ItineraryCreate from '../../components/ItineraryCreate';
import { useNavigate } from 'react-router-dom';
import useLocalStorageState from '../../hooks/useLocalStorage.js';

const ItineraryCreator = () => {
  const navigate = useNavigate();
  const [token] = useLocalStorageState(null, 'authToken');
  const isToken = token !== null;
  const [itineraryData, setItineraryData] = useState(null);

  useEffect(() => {
    if(!isToken){
      navigate('/login');
    }
  }, [isToken, navigate]);
  
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
