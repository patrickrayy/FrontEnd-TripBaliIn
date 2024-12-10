import { createContext, useContext, useEffect, useState } from 'react';
import useLocalStorageState from '../hooks/useLocalStorage.js';
import apiInstance from '../api/apiInstance.js';

const authContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useLocalStorageState(null,"user");
  const [authError, setAuthError] = useState (
    "Session is over, please login again..."
  );
  const [isAuthenticated, setIsAuthenticated] = 
  useLocalStorageState(
    false,
    "isAuthenticated"
  );

  useEffect(() => {
    async function fetchUser(){
      try{
        const res = await apiInstance.get("/auth/current-user",{
          withCredentials: true,
        });

        const data = res.data;

        if (data.isSuccess){
          const user = data.data.user;
          setUser(user);
          setAuthError(null);
        }
      }catch(error){
        console.error(error);
        if (error.status === 401){
          setAuthError("Session is over, please login again...");
          setIsAuthenticated(false);
          localStorage.clear();
        }
      }
    }
    if(isAuthenticated) fetchUser();
  }, [isAuthenticated, setIsAuthenticated, setUser]);

  return (
    <authContext.Provider
      value={{ user,authError, isAuthenticated, setIsAuthenticated }}>{children}</authContext.Provider>
  );
};

const useUser = () => {
  const context = useContext(authContext);
  if (!context) throw new Error("Auth context used outside provider");

  return context;
}

export { AuthProvider, useUser };
