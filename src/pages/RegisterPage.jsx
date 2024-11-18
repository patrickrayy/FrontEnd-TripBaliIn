import { height, width } from '@fortawesome/free-brands-svg-icons/fa42Group';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const RegisterPage = () => {

    const navigate = useNavigate();
    const [showSuccessMessage, setShowSuccessMessage] = useState(false); 
  
    const handleSignUp = (e) => {
      e.preventDefault();
      console.log("You're Ready to Go !");
      setShowSuccessMessage(true); 
      setTimeout(() => {
        setShowSuccessMessage(false); 
        navigate('/login'); 
      }, 2500);
    };

  return (
    <div style={styles.container}>
      <div style={styles.logoSection}>
        <img src="/assets/images/tripbaliin.png" alt="TripBaliin Logo" style={styles.logoImage} />
      </div>
      <div style={styles.formSection}>
        <div style={styles.formContainer}>
          <h2 style={styles.title}>Sign Up</h2>
          <p style={styles.subtitle}>Create your account</p>
          <form style={styles.form} onSubmit={handleSignUp}>
            <input type="text" placeholder="Full Name" style={styles.input} required />
            <input type="email" placeholder="Email" style={styles.input} required />
            <input type="password" placeholder="Password" style={styles.input} required />
            <input type="password" placeholder="Confirm Password" style={styles.input} required />
            <button type="submit" style={styles.button}>Sign Up</button>
          </form>
          <p style={styles.footerText}>
            Already an account? <a href="/login" style={styles.link}>Login</a>
          </p>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    height: '100vh',
    fontFamily: 'Montserrat, sans-serif',
  },
  logoSection: {
    backgroundColor: '#0F67B1',
    color: '#fff',
    width: '50vw',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoImage: {
    width: '696px',
    height: '275px',
    marginBottom: '10px',
  },
  formSection: {
    width: '50vw',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fefefe',
  },
  formContainer: {
    width: '552px',
    height:'695px',
    padding: '20px',
    textAlign: 'center',
    boxShadow: '2px 0 8px 7px rgba(0, 0, 0, 0.2)',
    borderRadius: '20px',
    display: 'flex', 
    flexDirection: 'column', 
    alignItems: 'center', 
  },
  title: {
    marginTop: '80px',
    fontSize: '2rem',
    fontWeight: 'bold',
  },
  subtitle: {
    color: '#666',
    marginBottom: '20px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
    alignItems: 'center', 
  },
  input: {
    width: '347px',
    height: '54px',
    padding: '10px',
    fontSize: '1rem',
    borderRadius: '10px',
    border: '1px solid #ccc',
    backgroundColor: '#fff',
    color:'#000',
  },
  button: {
    backgroundColor: '#0F67B1',
    color: '#fff',
    border: 'none',
    borderRadius: '10px',
    padding: '10px',
    width: '347px',
    height: '54px',
    fontSize: '1rem',
    cursor: 'pointer',
  },
  footerText: {
    marginTop: '20px',
  },
  link: {
    fontWeight:'650',
    color: '#0F67B1',
    textDecoration: 'none',
  },
  orText: {
    color: '#666',
    margin: '20px 0',
  },
  socialButtons: {
    display: 'flex',
    gap: '10px',
    justifyContent: 'center',
  },
  socialButton: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '10px',
    borderRadius: '8px',
    border: '1px solid #ccc',
    cursor: 'pointer',
  },
  googleButton: {
    backgroundColor: '#fff',
    width: '142.97px',
    height: '49.4',
    marginRight: '25px'
  },
  facebookButton: {
    backgroundColor: '#fff',
    width: '142.97px',
    height: '49.4',
    marginLeft: '25px'
  },
  socialIcon: {
    width: '20px',
    marginRight: '10px',
  },
  googleText: {
    fontSize:'14px',
    color: '#000', 
  },
  facebookText: {
    fontSize:'14px',
    color: '#3b5998', 
  },

  orTextContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px', 
    color: '#666',
    margin: '20px 0',
    fontSize: '14px',
  },
  
  line: {
    width: '114.71px',
    height: '1px',
    backgroundColor: '#ccc', 
  },
  
};

export default RegisterPage;
