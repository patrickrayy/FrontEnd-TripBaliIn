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
        left: 0,
        zIndex: 2000,
        justifyContent: 'center', // Centers the logo by default
    },
    logo: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 'auto',  // Centers the logo horizontally
        marginRight: 'auto', // Centers the logo horizontally
    },
    logoImage: {
        width: '200px',
    },

    // Media Query for screens smaller than 768px (mobile)
    '@media (max-width: 768px)': {
        navbar: {
            padding: '10px',
            justifyContent: 'center', // Center the logo for smaller screens
        },
        logoImage: {
            width: '150px', // Adjust the logo size for mobile
        },
    },

    // Media Query for screens larger than 768px (tablet/desktop)
    '@media (min-width: 768px)': {
        navbar: {
            padding: '10px 20px', // Add padding for larger screens
        },
        logoImage: {
            width: '200px', // Adjust logo size for larger screens
        },
    }
};

export default ContactHeader;
