import React from 'react';

const FromGallery = () => {
  const imageRows = [
    [
      "/assets/images/fromgallery/1.png", 
      "/assets/images/fromgallery/2.png", 
      "/assets/images/fromgallery/3.png", 
      "/assets/images/fromgallery/4.png", 
      "/assets/images/fromgallery/5.png"
    ],
    [
      "/assets/images/fromgallery/6.png", 
      "/assets/images/fromgallery/7.png", 
      "/assets/images/fromgallery/8.png", 
      "/assets/images/fromgallery/9.png", 
      "/assets/images/fromgallery/10.png"
    ]
  ];

  return (
    <div style={styles.outerContainer}>
      <div style={styles.container}>
        {/* Title and Description */}
        <h2 style={styles.title}>From The Gallery</h2>
        <p style={styles.description}>
          Recap of the documentation of tourist attractions frequently visited by our travelers. These images represent diverse meanings.
        </p>

        {/* Image Grid */}
        <div style={styles.gridContainer}>
          {imageRows.map((row, index) => (
            <div style={styles.row} key={index}>
              {row.map((src, i) => (
                <img 
                  src={src} 
                  alt={`Image ${i + 1}`} 
                  key={i} 
                  style={styles.image} 
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const styles = {
  outerContainer: {
    display: 'flex',
    justifyContent: 'center',
    padding: '110px',
    boxSizing: 'border-box',
    width: '100%',
  },
  container: {
    maxWidth: '1200px',
    width: '100%',
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
    padding: '20px 20px',
  },
  title: {
    fontSize: '40px',
    fontFamily: 'Montserrat, sans-serif',
    fontWeight: 'bold',
    marginBottom: '10px',
    textAlign: 'left',
  },
  description: {
    fontSize: '16px',
    fontFamily: 'Montserrat, sans-serif',
    color: '#666',
    marginBottom: '40px',
    textAlign: 'left',
  },
  gridContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '60px',
  },
  row: {
    display: 'flex',
    justifyContent: 'center',
    gap: '50px',
  },
  image: {
    width: '210px',
    height: '326px',
    borderRadius: '5px',
    objectFit: 'cover',
  },
  
  // Responsive Design
  '@media (max-width: 768px)': {
    outerContainer: {
      padding: '20px',
    },
    gridContainer: {
      gap: '40px',
    },
    row: {
      flexDirection: 'column',
      alignItems: 'center',
      gap: '30px',
    },
    image: {
      width: '180px',
      height: '270px',
    },
  },
};

export default FromGallery;
