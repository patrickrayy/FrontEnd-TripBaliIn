import React from 'react';

const ContactHeader = () => {
    return (
      <nav style={styles.navbar}>
        <div style={styles.logo}>
          <img src="/assets/images/tripbaliin.png" alt="Logo" style={styles.logoImage} />
        </div>
      </nav>
    );
  };
  
  const styles = {
    navbar: {
      display: 'flex',
      alignItems: 'center',
      padding: '10px 0',
      backgroundColor: '#0F67B1',
      color: 'white',
      width: '100%',
      position: 'fixed',                
      top: 0,
<<<<<<< HEAD
=======
      left: 0,
>>>>>>> a0ea9bf1957be56119d3702cc67b76a219dd108a
      zIndex: 2000,
    },
    logo: {
      display: 'flex',
      alignItems: 'center',
<<<<<<< HEAD
      marginLeft: '350px',              
=======
      marginLeft: '310px',             
>>>>>>> a0ea9bf1957be56119d3702cc67b76a219dd108a
    },
    logoImage: {
      width: '200px',
      marginLeft: 400,
    },
  };
  
  export default ContactHeader;
