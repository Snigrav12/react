import React, { createContext,useState,useEffect } from 'react';
import { getlocalstorage, setlocalstorage } from '../utils/localstorage';


export const AuthContext=createContext()

const Authprovider = ({children}) => {

  const [userData, setUserData] = useState(null)
   localStorage.clear();

  useEffect(() => {
    setlocalstorage();
    const { employees} = getlocalstorage();
    setUserData(employees);
  }, []);
  
  return (
    <div>
      <AuthContext.Provider value={[userData,setUserData]}>
      {children}
      </AuthContext.Provider>
    </div>
  )
}

export default Authprovider
