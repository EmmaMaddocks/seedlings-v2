import {useEffect, useReducer, createContext, useContext, useMemo, useState } from "react";
import * as api from "../utils/api";


const UserContext = createContext(null);



  function setLocalStorage(key, value) {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
    }
  }
  
function getLocalStorage(key, initialValue) {
    try {
      const value = window.localStorage.getItem(key);
      return JSON.parse(value) 
    } catch (e) {
      return initialValue;
    }
  }


export function UserProvider({ children }) {
    const [userName, setUserName] = useState(() => getLocalStorage("user"));
  
    
    useEffect(() => {
      setLocalStorage("user", userName);
    }, [userName]);
  
    return (
      <UserContext.Provider
        value={{
         userName, setUserName
        }}
      >
        {children}
      </UserContext.Provider>
    );
  }

  export function useUserContext() {
    console.log(useContext(UserContext))
    return useContext(UserContext);

 }

// import { createContext, useState, useContext, useMemo } from 'react';
// export const UserContext = createContext({
//   userName: '',
//   setUserName: () => {},
// });

//     const [user, setUser] = useState(() => getLocalStorage("user"));


