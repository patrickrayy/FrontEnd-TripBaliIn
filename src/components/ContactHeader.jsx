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
    },
    logo: {
        display: 'flex',
        alignItems: 'center',
        marginLeft: '350px', 
    },
    logoImage: {
        width: '200px',
        marginLeft: '400px', 
    },
};

export default ContactHeader;
