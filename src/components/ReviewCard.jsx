import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const ReviewCard = ({ reviewer }) => {
  const {photo, name, rating, message } = reviewer;
  return (
    <div style={styles.card}>
      {/* Foto Reviewer */}
      <img src={reviewer.photo} alt={reviewer.name} style={styles.photo} />

      {/* Konten di sebelah kanan foto */}
      <div style={styles.content}>
        {/* Nama Reviewer */}
        <h3 style={styles.name}>{reviewer.name}</h3>

        {/* Bintang Review */}
        <div style={styles.ratingSection}>
          {Array.from({ length: 5 }, (_, index) => (
            <FontAwesomeIcon
              key={index}
              icon={faStar}
              style={{
                color: index < reviewer.rating ? '#FFD700' : '#D3D3D3', // Bintang kuning jika terisi
              }}
            />
          ))}
        </div>

        {/* Pesan Review */}
        <p style={styles.message}>{reviewer.message}</p>
      </div>
    </div>
  );
};

const styles = {
  card: {
    display: 'flex',
    alignItems: 'center',
    width: '550px',
    height: '210px',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#fff',
    fontFamily: 'Montserrat, sans-serif',
    gap: '10px',
  },
  image: {
    width: '90px',
    height: '90px',
    borderRadius: '50%',
    objectFit: 'cover',
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    textAlign: 'left',
    flex: 1,
  },
  name: {
    fontSize: '18px',
    fontWeight: 'bold',
    color: '#333',
    marginBottom: '5px',
  },
  ratingSection: {
    display: 'flex',
    alignItems: 'center',
    gap: '5px',
    marginBottom: '10px',
  },
  message: {
    fontSize: '14px',
    color: '#666',
    lineHeight: '1.5',
  },
};

export default ReviewCard;
