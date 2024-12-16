import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { FaArrowLeft, FaEye, FaEyeSlash } from 'react-icons/fa';
import { useAuth } from '../../contexts/AuthContext'; // Import useAuth

const RegisterPage = () => {
  const { register, loading, error } = useAuth(); // Ambil fungsi register, loading, dan error dari AuthContext
  const navigate = useNavigate();
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
    location: '',
    tanggal_lahir: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handlePhoneNumberChange = (e) => {
    const value = e.target.value.replace(/\D/g, '');
    setFormData({
      ...formData,
      phone: value,
    });
  };

  const handleDateChange = (date) => {
    setFormData({
      ...formData,
      tanggal_lahir: date,
    });
  };

  const handleSignUp = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.password || !formData.confirmPassword) {
      alert('Please fill in all fields.');
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match.');
      return;
    }

    const success = await register({
      name: formData.name,
      email: formData.email,
      password: formData.password,
      phone: formData.phone,
      location: formData.location,
      tanggal_lahir: formData.tanggal_lahir,
    });

    if (success) {
      setShowSuccessMessage(true);
      setTimeout(() => {
        setShowSuccessMessage(false);
        navigate('/login'); // Redirect ke halaman login setelah berhasil register
      }, 2000);
    }
  };

  const goToLandingPage = () => {
    navigate('/');
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
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
          <h2 style={styles.title}>Sign Up</h2>
          <p style={styles.subtitle}>Create your account</p>
          <form style={styles.form} onSubmit={handleSignUp}>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              style={styles.input}
              value={formData.name}
              onChange={handleInputChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              style={styles.input}
              value={formData.email}
              onChange={handleInputChange}
              required
            />
            <div style={styles.passwordContainer}>
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                placeholder="Password"
                style={styles.input}
                value={formData.password}
                onChange={handleInputChange}
                required
              />
              <button type="button" style={styles.eyeIcon} onClick={togglePasswordVisibility}>
                {showPassword ? <FaEyeSlash style={{ color: 'black' }} /> : <FaEye style={{ color: 'black' }} />}
              </button>
            </div>
            <div style={styles.passwordContainer}>
              <input
                type={showConfirmPassword ? 'text' : 'password'}
                name="confirmPassword"
                placeholder="Confirm Password"
                style={styles.input}
                value={formData.confirmPassword}
                onChange={handleInputChange}
                required
              />
              <button type="button" style={styles.eyeIcon} onClick={toggleConfirmPasswordVisibility}>
                {showConfirmPassword ? <FaEyeSlash style={{ color: 'black' }} /> : <FaEye style={{ color: 'black' }} />}
              </button>
            </div>
            <input
              type="text"
              name="location"
              placeholder="Location"
              style={styles.input}
              value={formData.location}
              onChange={handleInputChange}
              required
            />
            <DatePicker
              selected={formData.tanggal_lahir}
              onChange={handleDateChange}
              dateFormat="yyyy-MM-dd"
              placeholderText="Select Birth Date"
              customInput={<input className="custom-datepicker" style={styles.input} />}
              showMonthDropdown
              showYearDropdown
              dropdownMode="select"
              required
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              style={styles.input}
              value={formData.phone}
              onChange={handlePhoneNumberChange}
              required
            />
            <button type="submit" style={styles.button} disabled={loading}>
              {loading ? 'Signing Up...' : 'Sign Up'}
            </button>
          </form>
          {showSuccessMessage && <p style={{ color: 'green' }}>Registration successful! Redirecting...</p>}
          {error && <p style={{ color: 'red' }}>{error}</p>}
          <p style={styles.footerText}>
            Already have an account? <a href="/login" style={styles.link}>Login</a>
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
    height: '790px',
    padding: '20px',
    textAlign: 'center',
    boxShadow: '2px 0 8px 7px rgba(0, 0, 0, 0.2)',
    borderRadius: '20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  title: {
    marginTop: '30px',
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
    gap: '20px',
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
  dateInput: {
    width: '347px',
    height: '54px',
    padding: '10px',
    fontSize: '1rem',
    borderRadius: '10px',
    border: '1px solid #ccc',
    backgroundColor: '#fff',
    color: '#000',
    cursor: 'pointer',
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
  passwordContainer: {
    position: 'relative',
  },
  eyeIcon: {
    position: 'absolute',
    top: '50%',
    right: '15px',
    transform: 'translateY(-50%)',
    background: 'transparent',
    border: 'none',
    cursor: 'pointer',
  },
};

export default RegisterPage;
