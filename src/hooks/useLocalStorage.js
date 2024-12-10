import { useEffect, useState } from "react";

const useLocalStorageState = (initialState, key) => {
    const [value, setValue] = useState(() => {
        try{
            const storedValue = localStorage.getItem(key);
            return storedValue ?
            JSON.parse(storedValue) : initialState;
        }catch(error){
            console.error("Failed to parse localStorage value:",error);
            return initialState;
        }
    });

    useEffect(() => {
        try{
            localStorage.setItem(key, JSON.stringify(value));
        }catch(error){
            console.error("Failed to set localStorage value:",error);
        }
    }, [key,value]);

    return [value, setValue];
}

export default useLocalStorageState;