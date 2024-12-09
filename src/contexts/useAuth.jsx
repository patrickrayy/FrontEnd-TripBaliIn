import { createContext, useState, useContext, useEffect } from 'react';
import {jwtDecode} from 'jwt-decode'; // Anda bisa menggunakan ini untuk memeriksa token

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (token) {
      try {
        // Memeriksa apakah token valid dan belum kedaluwarsa
        const decoded = jwtDecode(token); // Decode JWT
        const currentTime = Date.now() / 1000; // Waktu sekarang dalam detik
        if (decoded.exp > currentTime) {
          console.log('bisa selamat')
          setIsLoggedIn(true); // Jika token masih berlaku
        } else {
          localStorage.removeItem('authToken'); // Jika token sudah kedaluwarsa, logout
          setIsLoggedIn(false);
        }
      } catch (error) {
        console.error('Invalid token:', error);
        localStorage.removeItem('authToken');
        setIsLoggedIn(false);
      }
    }
  }, []);

  const login = (token) => {
    localStorage.setItem('authToken', token);
    setIsLoggedIn(true);
  };

  const logout = () => {
    localStorage.removeItem('authToken');
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
