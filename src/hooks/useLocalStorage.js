import { useEffect, useState } from "react";

const useLocalStorageState = (initialState, key) => {
  const [value, setValue] = useState(() => {
    try {
      const storedValue = localStorage.getItem(key);

      // Jika key adalah 'authToken' (atau lainnya), jangan parse JSON
      if (key === 'authToken') {
        return storedValue || initialState; // Token adalah string
      }

      // Untuk data lain, parse JSON
      return storedValue !== null ? JSON.parse(storedValue) : initialState;
    } catch (error) {
      console.error("Failed to parse localStorage value:", error);
      return initialState;
    }
  });

  useEffect(() => {
    try {
      if (value !== undefined) {
        if (key === 'authToken') {
          localStorage.setItem(key, value);
        } else {
          localStorage.setItem(key, JSON.stringify(value));
        }
      }
    } catch (error) {
      console.error("Failed to set localStorage value:", error);
    }
  }, [key, value]);

  return [value, setValue];
};

export default useLocalStorageState;
