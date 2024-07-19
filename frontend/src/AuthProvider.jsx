import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import { toast } from 'react-toastify';


export const AuthContext = createContext(false);

const AuthProvider = ({ children }) => {
    const [isAuth, setIsAuth] = useState(false);
   
    useEffect(() => {
        const token = Cookies.get("jwtToken");
        console.log(token);
        if (token) {
            axios.post(`${import.meta.env.VITE_BACKEND_URL}/user/verify-token`, { token }, { withCredentials: true })
                .then(response => {
                    if (response.data.success) {
                        console.log("success ")
                        setIsAuth(true);
                    }
                })
                .catch(error => {
                    toast.error('error verifying token',400)
                    console.log('Error verifying token:', error);
                });
        }
    }, []);
  console.log(isAuth);
    return (
        <AuthContext.Provider value={{ isAuth, setIsAuth }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
