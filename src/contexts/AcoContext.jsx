import React, { createContext, useContext, useState, useEffect } from 'react';

const AcoContext = createContext(null);

export const AcoProvider = ({ children }) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [selectedData, setSelectedData] = useState(null);

    useEffect(() => {
        const fetchAco = async () => {
            setLoading(true);
            setError('');
            try {
                const response = await fetch('http://localhost:3000/api/accommodations/aco');
                const result = await response.json();
                setData(result);
            } catch (err) {
                console.error('Error fetching data:', err);
                setError('Failed to fetch data');
            } finally {
                setLoading(false);
            }
        };

        fetchAco();
    }, []);

    const fetchAcoById = async (id) => {
        setLoading(true);
        setError('');
        setSelectedData(null);
        try{
            const response = await fetch (`http://localhost:3000/api/accommodations/aco/${id}`);
            const result = await response.json();
            setSelectedData(result)
        }catch(err){
            console.error('Error fetching data by ID:', err);
            setError('Failed to fetch data by ID');
        }finally{
            setLoading(false);
        }
    };

    return (
        <AcoContext.Provider value={{ data, selectedData, loading, error, fetchAcoById }}>
            {children}
        </AcoContext.Provider>
    );
};

export const useAco = () => useContext(AcoContext);
