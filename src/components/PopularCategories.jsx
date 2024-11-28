import React, { useState } from "react";
import { Link } from "react-router-dom";

const PopularCategories = () => {
  const [hovered, setHovered] = useState(null);

  const handleMouseEnter = (index) => setHovered(index);
  const handleMouseLeave = () => setHovered(null);

  const categories = [
    { path: "/accommodation", label: "Accommodation", icon: "/assets/images/icon1.png" },
    { path: "/destination", label: "Destination", icon: "/assets/images/icon3.png" },
    { path: "/transportation", label: "Transportation", icon: "/assets/images/icon2.png" },
  ];

  return (
    <div style={styles.popularCategories}>
      <h2 style={styles.title}>Our Popular Categories</h2>
      <div style={styles.categoryContainer}>
        {categories.map((category, index) => (
          <Link
            key={category.label}
            to={category.path}
            style={{
              ...styles.category,
              ...(hovered === index ? styles.categoryHover : {}),
            }}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            <div style={styles.iconContainer}>
              <div style={styles.circle}>
                <img
                  src={category.icon}
                  alt={category.label}
                  style={styles.icon}
                  loading="lazy"
                />
              </div>
            </div>
            <p style={styles.categoryText}>{category.label}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

const styles = {
  popularCategories: {
    padding: '20px',
    textAlign: 'center',
  },
  title: {
    fontSize: '40px',
    fontWeight: 'bold',
    marginBottom: '20px',
    fontFamily:'Montserrat, sans-serif',
    marginTop: '60px'
  },
  categoryContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '30px',
    flexWrap: 'wrap',
  },
  category: {
    textAlign: 'center',
    transition: 'transform 0.3s ease, background-color 0.3s ease',
    width: '150px',
    padding: '10px',
    display: 'flex',
    marginTop: '60px',
    marginBottom: '60px',
    flexDirection: 'column',
    alignItems: 'center',
    textDecoration: 'none',
    fontFamily:'Montserrat, sans-serif',
    fontSize: '24px'
  },
  categoryHover: {
    transform: 'scale(1.1)',
  },
  iconContainer: {
    width: '100px',
    height: '100px',
    marginBottom: '10px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  circle: {
    width: '150px',
    height: '100px',
    backgroundColor: '#e9e9e9',
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    maxWidth: '60%',
    maxHeight: '60%',
  },
  categoryText: {
    fontSize: '20px',
    marginTop: '30px',
    fontWeight: '600',
  },
  '@media (max-width: 768px)': {
    categoryContainer: {
      flexDirection: 'column',
      gap: '20px',
    },
  }
};

export default PopularCategories;
