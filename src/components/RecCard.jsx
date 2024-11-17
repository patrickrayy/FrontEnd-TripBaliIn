import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faCarSide, faStar } from '@fortawesome/free-solid-svg-icons';


const RecommendationCard = ({ item }) => {
  return (
    <div style={styles.card}>
      <img src={item.image} alt={item.title} style={styles.cardImage} />
      <h3 style={styles.cardTitle}>{item.title}</h3>
      <div style={styles.textcard}>
        <p style={styles.infoText}><FontAwesomeIcon icon={faClock} /> {item.duration}</p>
        <p style={styles.infoText}><FontAwesomeIcon icon={faCarSide} /> Transport Facility</p>
        <div style={styles.ratingSection}>
          {Array.from({ length: 5 }, (_, index) => (
            <FontAwesomeIcon
              key={index}
              icon={faStar}
              style={{
                color: index < item.rating ? '#FFD700' : '#D3D3D3',
              }}
            />
          ))}
          <span style={styles.reviewText}>{item.reviews} reviews</span>
        </div>
        <div style={styles.textprice}>
          <span style={styles.price}>IDR {item.price}</span>
          <span style={styles.perperson}>per person</span>
        </div>
      </div>
    </div>
  );
};

const styles = {
  card: {
    width: '250px',
    padding: '15px',
    borderRadius: '10px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
    overflow: 'hidden',
    fontFamily: 'Montserrat, open-sans',
  },
  cardImage: {
    width: '100%',
    height: '150px',
    borderRadius: '10px',
    objectFit: 'cover',
  },
  cardTitle: {
    fontSize: '18px',
    fontWeight: 'bold',
    color: '#333',
    margin: '10px 0 5px',
  },
  textcard: {
    fontSize: '14px',
    color: '#666',
    lineHeight: '1.5',
  },
  infoText: {
    display: 'flex',
    alignItems: 'center',
    gap: '5px',
    fontSize: '14px',
    color: '#666',
  },
  ratingSection: {
    display: 'flex',
    alignItems: 'center',
    gap: '3px',
    color: '#FFD700',
    marginTop: '5px',
  },
  reviewText: {
    fontSize: '12px',
    color: '#666',
    marginLeft: '5px',
  },
  textprice: {
    display: 'flex',
    alignItems: 'baseline',
    gap: '5px',
    marginTop: '10px',
  },
  price: {
    fontSize: '16px',
    fontWeight: 'bold',
    color: '#FF4500', // Red color for price
  },
  perperson: {
    fontSize: '12px',
    color: '#666',
  },
};

export default RecommendationCard;
