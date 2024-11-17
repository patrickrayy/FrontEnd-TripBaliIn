import React from 'react';

const ExploreImage = ({ images }) => {
  const styles = {
    gridContainer: {
      display: 'flex',
      justifyContent: 'center',
      gap: '10px',
      marginBottom: '30px',
    },
    leftColumn: {
      display: 'flex',
      flexDirection: 'column',
      gap: '10px',
      flex: '1',
    },
    bottomRow: {
      display: 'flex',
      gap: '10px',
    },
    rightColumn: {
      display: 'flex',
      flexDirection: 'column',
      gap: '10px',
      flex: '0.5',
    },
    imageContainer: {
      position: 'relative',
      borderRadius: '5px',
      overflow: 'hidden',
      cursor: 'pointer',
    },
    image: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      transition: 'filter 0.3s ease',
    },
    overlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      opacity: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      fontSize: '1.5rem',
      fontWeight: 'bold',
      textAlign: 'center',
      transition: 'opacity 0.3s ease',
    },
    largeImage: {
      width: '98%',
      height: '360px',
    },
    smallImage: {
      width: '100%',
      height: '250px',
    },
    mediumImage: {
      width: '48.5%',
      height: '400px',
    },
  };

  const renderImageWithHoverEffect = (src, alt, style, overlayText) => (
    <div
      style={{ ...styles.imageContainer, ...style }}
      onMouseEnter={(e) => {
        e.currentTarget.querySelector('img').style.filter = 'brightness(50%)';
        e.currentTarget.querySelector('.overlay').style.opacity = 1;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.querySelector('img').style.filter = 'brightness(100%)';
        e.currentTarget.querySelector('.overlay').style.opacity = 0;
      }}
    >
      <img src={src} alt={alt} style={styles.image} />
      <div className="overlay" style={styles.overlay}>
        {overlayText}
      </div>
    </div>
  );

  return (
    <div style={styles.gridContainer}>
      {/* Left Column */}
      <div style={styles.leftColumn}>
        {renderImageWithHoverEffect(images.large, 'Large', styles.largeImage, 'Bali')}
        <div style={styles.bottomRow}>
          {renderImageWithHoverEffect(images.medium1, 'Medium 1', styles.mediumImage, 'Bali')}
          {renderImageWithHoverEffect(images.medium2, 'Medium 2', styles.mediumImage, 'Bali')}
        </div>
      </div>

      {/* Right Column */}
      <div style={styles.rightColumn}>
        {renderImageWithHoverEffect(images.small1, 'Small 1', styles.smallImage, 'Bali')}
        {renderImageWithHoverEffect(images.small2, 'Small 2', styles.smallImage, 'Bali')}
        {renderImageWithHoverEffect(images.small3, 'Small 3', styles.smallImage, 'Bali')}
      </div>
    </div>
  );
};

export default ExploreImage;
