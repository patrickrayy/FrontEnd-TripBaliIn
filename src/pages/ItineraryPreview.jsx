import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import NavbarAfter from '../components/NavbarAfter';
import Footer from '../components/Footer';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import '../styles/Calendar.css'

const ItineraryPreview = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const itineraryData = location.state || {};
  const [selectedDate, setSelectedDate] = useState(new Date(itineraryData.startDate || ''));

  const downloadItineraryAsJSON = () => {
    const element = document.createElement('a');
    const file = new Blob([JSON.stringify(itineraryData, null, 2)], {
      type: 'application/json',
    });
    element.href = URL.createObjectURL(file);
    element.download = 'Itinerary.json';
    document.body.appendChild(element);
    element.click();
  };

  const downloadItineraryAsPDF = () => {
    const content = document.getElementById('itinerary-content');
    html2canvas(content, { scale: 2 }).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const imgWidth = 210;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
      pdf.save(`${itineraryData.title || 'Itinerary'}.pdf`);
    });
  };

  const getActivitiesForSelectedDate = () => {
    if (!selectedDate || !itineraryData.startDate) return [];
    const startDate = new Date(itineraryData.startDate);
    const dayDifference = Math.floor(
      (selectedDate - startDate) / (1000 * 60 * 60 * 24)
    );

    if (dayDifference >= 0 && dayDifference < itineraryData.activities.length) {
      return itineraryData.activities[dayDifference]?.rundown || [];
    }
    return [];
  };

  const styles = {
    container: {
      fontFamily: 'Montserrat, sans-serif',
      padding: '20px',
      backgroundColor: '#0F67B1',
      borderRadius: '10px',
      margin: '20px auto',
      marginTop: '200px',
      width: '1077.16px',
      height: '1252px',
      boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
    },
    title: {
      fontSize: '36px',
      height:'106.34px',
      fontWeight: '550',
      color: '#fff',
      backgroundColor: '#2E9EEF',
      borderTopLeftRadius: '10px',
      borderTopRightRadius: '10px',
      padding: '27px',
      textAlign: 'center',
    },
    contentContainer: {
      display: 'flex',
      gap: '50px',
    },
    schedule: {
      marginTop: '40px',
      width: '639px',
      height: '919px',
      backgroundColor: '#fff',
      color: '#000',
      borderRadius: '10px',
      padding: '20px',
      boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
    },
    attractions: {
      width: '380px',
      height: '133px',
      backgroundColor: '#fff',
      borderRadius: '10px',
      padding: '10px',
      marginBottom: '20px',
      marginTop: '40px',
    },
    calendar: {
      width: '348px',
      height: '340px',
      backgroundColor: '#fff',
      borderRadius: '10px',
      padding: '10px',
      marginBottom: '20px',
    },
    cultureAttractions: {
      width: '380px',
      height: '198px',
      backgroundColor: '#fff',
      borderRadius: '10px',
      padding: '10px',
      marginBottom: '20px',
      marginTop: '20px',
    },
    otherContainer: {
      width: '380px',
      height: '173px',
      backgroundColor: '#fff',
      borderRadius: '10px',
      padding: '10px',
    },
    sectionTitle: {
      fontSize: '18px',
      fontWeight: 'bold',
      marginBottom: '10px',
    },
    listItem: {
      fontSize: '16px',
      marginBottom: '8px',
    },
    downloadButton: {
      marginTop: '60px',
      backgroundColor: '#fff',
      color: '#0F67B1',
      border: 'none',
      borderRadius: '10px',
      margin: '20px',
      marginTop: '55px',
      // padding: '10px 20px',
      cursor: 'pointer',
      fontSize: '18px',
      fontWeight: '600',
    },

      calendar: {
        border: 'none',
        borderRadius: '10px',
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
        padding: '10px',
        backgroundColor: '#ffffff',
        fontFamily: "'Montserrat', sans-serif",
      },
      navigation: {
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: '10px',
      },
      navigationButton: {
        background: '#0f67b1',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        padding: '5px 10px',
        fontSize: '14px',
        cursor: 'pointer',
        transition: 'background 0.3s',
      },
      navigationButtonHover: {
        background: '#094a83',
      },
      tile: {
        height: '40px',
        maxWidth: '40px',
        background: '#e6f0fa',
        color: '#333',
        borderRadius: '5px',
        transition: 'all 0.3s ease',
      },
      tileNow: {
        background: '#0f67b1',
        color: 'white',
        fontWeight: 'bold',
      },
      tileActive: {
        background: '#094a83',
        color: 'white',
        fontWeight: 'bold',
      },
      tileActiveHover: {
        background: '#062f5e',
      },
      tileHover: {
        background: '#d7e6f7',
        color: 'black',
      },
      weekend: {
        color: '#f44336',
      },
      neighboringMonth: {
        color: '#b0bec5',
      },
      weekdays: {
        textAlign: 'center',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        color: '#333',
        paddingBottom: '10px',
      },
      attractionstitle: {
        fontSize: '18px',
        textAlign: 'left',
        backgroundColor: '#e0e0e0',
        padding: '10px',
        borderRadius: '100px',
        display: 'inline-block',
        width: 'auto',
        margin:'0'
      }
    };
  
    return (
      <>
        <NavbarAfter />
        <div id="itinerary-content" style={styles.container}>
          {/* Title */}
          <div style={styles.title}>{itineraryData.title || 'My Itinerary'}</div>
  
          {/* Content */}
          <div style={styles.contentContainer}>
            {/* Schedule */}
            <div style={styles.schedule}>
              <h2 style={styles.sectionTitle}>
                {selectedDate.toDateString()}
              </h2>
              <ul>
                {getActivitiesForSelectedDate().map((item, index) => (
                  <li key={index} style={styles.listItem}>
                    {`${item.time || 'No time specified'} - ${
                      item.description || 'No description'
                    }`}
                  </li>
                ))}
              </ul>
            </div>
  
            {/* Sidebar */}
            <div>
              {/* Attractions */}
              <div style={styles.attractions}>
                <h3  style={styles.attractionstitle}>Attractions</h3>
                <ul>
                  {itineraryData.attractions?.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
  
              {/* Calendar */}
              <div className='calendar-wrapper'>
                <Calendar
                  value={selectedDate}
                  onChange={setSelectedDate}
                  minDate={new Date(itineraryData.startDate)}
                  maxDate={new Date(itineraryData.endDate)}
                />
              </div>
  
              {/* Culture Attractions */}
              <div style={styles.cultureAttractions}>
                <h3 style={styles.attractionstitle}>Culture Attractions</h3>
                <ul>
                  {itineraryData.cultureAttractions?.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
  
              {/* Miscellaneous */}
              <div style={styles.otherContainer}>
                <h3  style={styles.attractionstitle}>Food Attractions</h3>
                <ul>
                  {itineraryData.miscellaneous?.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
  
          {/* Buttons */}
          <div>
            <button
              style={styles.downloadButton}
              onClick={() => navigate('/itinerarycreator')}
            >
              Create Another Itinerary
            </button>
            <button style={styles.downloadButton} onClick={downloadItineraryAsJSON}>
              Download as JSON
            </button>
            <button style={styles.downloadButton} onClick={downloadItineraryAsPDF}>
              Download as PDF
            </button>
          </div>
        </div>
        <Footer />
      </>
    );
  };
export default ItineraryPreview;
