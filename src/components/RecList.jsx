import React from 'react';
import RecommendationCard from './RecommendationCard.jsx';

const RecommendationList = ({ title, recommendations }) => {
  return (
    <div style={styles.listContainer}>
      <h2>{title}</h2>
      <div style={styles.recommendations}>
        {recommendations.map(item => (
          <RecommendationCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

const styles = {
  listContainer: {
    padding: '20px 40px',
    margin: '40px',  
    fontFamily: 'Volkhov, serif',
    fontWeight: 'bold',
  },
  recommendations: {
    display: 'flex',
    justifyContent: 'space-between',
    gap: '10px',
  },
};

export default RecommendationList;