import axios from 'axios';

const apiInstance = axios.create({
    baseURL: "http://localhost:5000/api",
    timeout: 10000,
    withCredentials: true,
    headers: {
        "Content-Type": "application/json",
    },
});

apiInstance.interceptors.request.use(
    (config) => {
    const token = localStorage.getItem('authToken');
    if (token){
        config.headers['Authorization'] = `Bearer ${token}`;
    }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

apiInstance.interceptors.response.use(
    (response) => {
        return response;
    },
    async (error) => {
        if (error.response){
            if(error.response.status === 401) {
                console.log ("Unauthorized access - Token might be expired.");
            }  
        }
        return Promise.reject(error);
    }
);

const updateProfile = async (profileData) => {
    try{
        const response = await apiInstance.put('/profile/profile',profileData);
        return response.data;
    } catch (error){
        throw error;
    }
};

const login = async (email , password) => {
    try{
        const response = await apiInstance.post('auth/login',  { email, password });
        return response.data;
    }catch(error){
        throw error;
    }
}

const getProfile = async () => {
    try{
        const response = await apiInstance.get('/profile/profile')
        return response.data;
    }catch(error){
        throw error;
    }
}

export { login, updateProfile, getProfile };
export default apiInstance;