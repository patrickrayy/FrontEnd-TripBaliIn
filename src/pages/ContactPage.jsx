import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import ContactHeader from '../components/ContactHeader';
import { height, width } from '@fortawesome/free-brands-svg-icons/fa42Group';

const ContactPage = () => {
  return (
    <>
      <ContactHeader />
      <div style={styles.container}>
        <h2 style={styles.heading}>Is there anything you need help with?</h2>
        <h2 style={styles.subheading}>You can directly chat with an admin using the following information :</h2>
        <div style={styles.contactOptions}>
          {/* WhatsApp */}
          <a
            href="https://wa.me/628957723456"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.contactCard}
          >
            <div style={styles.iconContainer}>
              <FontAwesomeIcon icon={faWhatsapp} style={styles.icon} />
            </div>
            <h3 style={styles.contactTitle}>WhatsApp</h3>
            <p style={styles.contactInfo}>+62 895 7723 456</p>
          </a>

          {/* Email */}
          <a
            href="mailto:TripBaliin@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.contactCard}
          >
            <div style={styles.iconContainer}>
              <FontAwesomeIcon icon={faEnvelope} style={styles.icon} />
            </div>
            <h3 style={styles.contactTitle}>Email</h3>
            <p style={styles.contactInfo}>TripBaliin@gmail.com</p>
          </a>

          {/* FAQ */}
          <a href="/faq" style={styles.contactCard}>
            <div style={styles.iconContainer}>
              <FontAwesomeIcon icon={faQuestionCircle} style={styles.icon} />
            </div>
            <h3 style={styles.contactTitle}>FAQ</h3>
            <p style={styles.contactInfo}>Ask Here</p>
          </a>
        </div>

        {/* Back to Home Link */}
        <Link to="/" style={styles.backButton}>
          <span>Back to Home</span>
        </Link>
      </div>
    </>
  );
};

const styles = {
  container: {
    display: 'absolute',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    width: '1200px',
  },
  heading: {
    fontSize: '20px',
    fontWeight: '600',
    textAlign: 'center',
    fontFamily: 'Montserrat, sans-serif',
    marginBottom: '10px',
    marginLeft: '510px',
  },
  subheading: {
    fontSize: '20px',
    color: '#666',
    textAlign: 'center',
    fontWeight: '530',
    marginBottom: '30px',
    fontFamily: 'Montserrat, sans-serif',
    marginLeft: '510px',
  },
  contactOptions: {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
    marginLeft: '510px',
    marginBottom: '30px',
  },
  contactCard: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start', // Align content to the left
    fontFamily: 'Montserrat, sans-serif',
    padding: '20px',
    border: '1.5px solid #0F67B1',
    borderRadius: '10px',
    width: '200px',
    height: '250px',
    textAlign: 'left', 
    textDecoration: 'none',
    color: 'inherit',
    boxShadow: 'inset 0 0 1px 1px #0F67B1)', 
  },
  iconContainer: {
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    backgroundColor: '#96C9F4',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '10px',
  },
  icon: {
    color: '#fff',
    fontSize: '30px',
  },
  contactTitle: {
    fontSize: '16px',
    fontWeight: 'bold',
    margin: '10px 0 5px',
  },
  contactInfo: {
    fontSize: '14px',
    color: '#666',
  },
  backButton: {
    marginLeft: '510px',
    padding: '10px 20px',
    width: '232px',
    height: '58px',
    fontSize: '24px',
    color: '#fff',
    backgroundColor: '#0F67B1',
    border: 'none',
    borderRadius: '10px',
    textDecoration: 'none',
    display: 'inline-block',
    textAlign: 'center',
    cursor: 'pointer',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)', 
    transition: 'box-shadow 0.3s ease',
    fontFamily: 'Montserrat',
  },
};

export default ContactPage;
