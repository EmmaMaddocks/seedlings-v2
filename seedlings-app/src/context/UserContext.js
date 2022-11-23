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
  const [data, setData] = useState()
  const [crop, setCrop] = useState()
    
    useEffect(() => {
      setLocalStorage("user", userName);
    }, [userName]);

    useEffect(() => {
      api
        .getProfileData(userName)
        .then(data => {
          setData(data[0])
          console.log(data)
      
        })
        .catch(error => {
   
        });
    }, [userName]);
  
    return (
      <UserContext.Provider
        value={{
         userName, setUserName, data, setData, crop, setCrop
        }}
      >
        {children}
      </UserContext.Provider>
    );
  }

  export function useUserContext() {
    
    return useContext(UserContext);

 }

// import { createContext, useState, useContext, useMemo } from 'react';
// export const UserContext = createContext({
//   userName: '',
//   setUserName: () => {},
// });

//     const [user, setUser] = useState(() => getLocalStorage("user"));


