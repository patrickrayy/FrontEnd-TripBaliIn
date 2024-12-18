import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(localStorage.getItem('token'));
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        const loadUserProfile = async () => {
            const storedToken = localStorage.getItem('token');
            if (storedToken) {
                try {
                    const response = await fetch('http://localhost:3000/api/profile/profile', {
                        headers: {
                            'Authorization': `Bearer ${storedToken}`
                        }
                    });
                    const data = await response.json();
                    if (data.status === 'success') {
                        setUser(data.data);
                        setToken(storedToken);
                    } else {
                        logout();
                    }
                } catch (err) {
                    console.error('Error loading user profile:', err);
                    logout();
                }
            }
        };

        loadUserProfile();
    }, []);

    const login = async (email, password) => {
        setLoading(true);
        setError('');
        try {
            const response = await fetch('http://localhost:3000/api/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password }),
            });
            const data = await response.json();

            if (data.status === 'success') {
                setUser(data.data.user);
                setToken(data.data.token);
                localStorage.setItem('token', data.data.token);
                return true;
            } else {
                setError(data.message);
                return false;
            }
        } catch (err) {
            setError('Failed to connect to server');
            return false;
        } finally {
            setLoading(false);
        }
    };

    const register = async (userData) => {
        setLoading(true);
        setError('');
        try {
            const response = await fetch('http://localhost:3000/api/auth/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(userData),
            });
            const data = await response.json();

            if (data.status === 'success') {
                return true;
            } else {
                setError(data.message);
                return false;
            }
        } catch (err) {
            setError('Failed to connect to server');
            return false;
        } finally {
            setLoading(false);
        }
    };

    const logout = () => {
        setUser(null);
        setToken(null);
        localStorage.removeItem('token');
    };

    const updateUser = (userData) => {
        setUser(prev => ({ ...prev, ...userData }));
    };

    return (
        <AuthContext.Provider value={{
            user,
            token,
            loading,
            error,
            login,
            register,
            logout,
            updateUser
        }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);