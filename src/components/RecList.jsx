import React from 'react';
import RecommendationCard from './RecCard.jsx';

const RecommendationList = ({ title, recommendations }) => {
  return (
    <div style={styles.listContainer}>
      <h2 style={styles.title}>{title}</h2>
      <div style={styles.recommendations}>
        {recommendations.map(item => (
          <RecommendationCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

const styles = {
  title: {
    textAlign: 'left'
  },
  listContainer: {
    padding: '20px 40px',
    margin: '40px',  
    fontFamily: 'Montserrat, sans-serif',
    fontWeight: '650',
  },
  recommendations: {
    display: 'flex',
    justifyContent: 'space-between',
    gap: '10px',
  },
};

export default RecommendationList;