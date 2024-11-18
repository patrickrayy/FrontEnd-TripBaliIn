import React from 'react';

const FromGallery = () => {
  return (
    <div style={styles.outerContainer}>
      <div style={styles.container}>
        {/* Title and Description */}
        <h2 style={styles.title}>From The Gallery</h2>
        <p style={styles.description}>
        Recap of the documentation of tourist attractions frequently visited by our travelers, this image certainly has many meanings.
        </p>

        {/* Image Grid */}
        <div style={styles.gridContainer}>
          {/* Row 1 */}
          <div style={styles.row}>
            <img src="/assets/images/fromgallery/1.png" alt="image 1" style={styles.image} />
            <img src="/assets/images/fromgallery/2.png" alt="Image 2" style={styles.image} />
            <img src="/assets/images/fromgallery/3.png" alt="Image 3" style={styles.image} />
            <img src="/assets/images/fromgallery/4.png" alt="Image 4" style={styles.image} />
            <img src="/assets/images/fromgallery/5.png" alt="Image 5" style={styles.image} />
          </div>

          {/* Row 2 */}
          <div style={styles.row}>
            <img src="/assets/images/fromgallery/6.png" alt="Image 6" style={styles.image} />
            <img src="/assets/images/fromgallery/7.png" alt="Image 7" style={styles.image} />
            <img src="/assets/images/fromgallery/8.png" alt="Image 8" style={styles.image} />
            <img src="/assets/images/fromgallery/9.png" alt="Image 9" style={styles.image} />
            <img src="/assets/images/fromgallery/10.png" alt="Image 10" style={styles.image} />
          </div>
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
    fontSize: '32px',
    fontWeight: 'bold',
    marginBottom: '10px',
    textAlign: 'left',
  },
  description: {
    fontSize: '16px',
    color: '#666',
    marginBottom: '40px',
    textAlign: 'left',
  },
  gridContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  row: {
    display: 'flex',
    justifyContent: 'space-between',
    gap: '10px',
  },
  image: {
    width: '19%',
    height: '250px',
    borderRadius: '5px',
    objectFit: 'cover',
  },
};

export default FromGallery;
