import { useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaEye, FaEyeSlash } from 'react-icons/fa'; 
import axios from 'axios';
import React, { useState } from 'react';

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState(''); 
  const [password, setPassword] = useState(''); 
  const [showPassword, setShowPassword] = useState(false); 
  
  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', {
        email,
        password,
      });
      localStorage.setItem('authToken', response.data.token);
      console.log('Login successful:', response.data);
      navigate('/home'); 
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  const goToLandingPage = () => {
    navigate('/'); 
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword); 
  };

  return (
    <div style={styles.container}>
      <button style={styles.backButton} onClick={goToLandingPage}>
        <FaArrowLeft style={styles.icon} /> Continue as Guest
      </button>

      <div style={styles.logoSection}>
        <img src="/assets/images/tripbaliin.png" alt="TripBaliin Logo" style={styles.logoImage} />
      </div>

      <div style={styles.formSection}>
        <div style={styles.formContainer}>
          <h2 style={styles.title}>Welcome back</h2>
          <p style={styles.subtitle}>Enter your details below</p>
          <form style={styles.form} onSubmit={handleLogin}>
            <input 
              type="email" 
              placeholder="Email" 
              style={styles.input} 
              required 
              onChange={(e) => setEmail(e.target.value)}
            />
            <div style={styles.passwordContainer}>
              <input 
                type={showPassword ? "text" : "password"} // Toggle input type based on showPassword state
                placeholder="Password" 
                style={styles.input} 
                required 
                onChange={(e) => setPassword(e.target.value)}
              />
              <button type="button" style={styles.eyeIcon} onClick={togglePasswordVisibility}>
                {showPassword ? <FaEyeSlash style={{ color: 'black' }} /> : <FaEye style={{ color: 'black' }} />}
              </button>
            </div>
            <button type="submit" style={styles.button}>Login</button>
          </form>

          <p style={styles.footerText}>
            Do not have an account? <a href="/register" style={styles.link}>Sign Up</a>
          </p>

          <p style={styles.orTextContainer}>
            <span style={styles.line}></span>Or sign in with<span style={styles.line}></span>
          </p>
          <div style={styles.socialButtons}>
            <button style={{ ...styles.socialButton, ...styles.googleButton }}>
              <img src="/assets/images/google.png" alt="Google" style={styles.socialIcon} />
              <span style={styles.googleText}>Google</span>
            </button>
            <button style={{ ...styles.socialButton, ...styles.facebookButton }}>
              <img src="/assets/images/facebook.png" alt="Facebook" style={styles.socialIcon} />
              <span style={styles.facebookText}>Facebook</span>
            </button>
          </div>
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
  backButton: {
    position: 'absolute',
    top: '20px',
    left: '20px',
    display: 'flex',
    alignItems: 'center',
    backgroundColor: 'transparent',
    border: 'none',
    fontSize: '16px',
    fontWeight: '500',
    cursor: 'pointer',
    color: '#fff',
    gap: '15px', 
  },
  icon: {
    fontSize: '18px', 
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
    height: '695px',
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
    color: '#000',
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
    fontWeight: '650',
    color: '#0F67B1',
    textDecoration: 'none',
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
    marginRight: '25px',
  },
  facebookButton: {
    backgroundColor: '#fff',
    width: '142.97px',
    height: '49.4',
    marginLeft: '25px',
  },
  socialIcon: {
    width: '20px',
    marginRight: '10px',
  },
  googleText: {
    fontSize: '14px',
    color: '#000', 
  },
  facebookText: {
    fontSize: '14px',
    color: '#3b5998', 
  },
  passwordContainer: {
    position: 'relative',
  },
  eyeIcon: {
    position: 'absolute',
    top: '2px',
    right: '1px',
    background: 'transparent',
    border: 'none',
    cursor: 'pointer',
    fontSize: '18px',
  },
};

export default LoginPage;
