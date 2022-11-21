import {useEffect, useReducer, createContext, useContext, useMemo, useState } from "react";


const UserContext = createContext(null);

let initialState = {
    user: null
  };


  function setLocalStorage(key, value) {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
    }
  }
  
function getLocalStorage(key, initialValue) {
    try {
      const value = window.localStorage.getItem(key);
      return value ? JSON.parse(value) : initialValue;
    } catch (e) {
      return initialValue;
    }
  }



export function UserProvider({ children }) {
    const [user, setUser] = useState(() => getLocalStorage("user", initialState));
  
    useEffect(() => {
      setLocalStorage("user", user);
    }, [user]);
  

    return (
      <UserContext.Provider
        value={{
          user: user
        }}
      >
        {children}
      </UserContext.Provider>
    );
  }

  export function useUserContext() {
    return useContext(UserContext);
 }