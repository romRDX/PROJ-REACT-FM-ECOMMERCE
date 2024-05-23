import React, { createContext, useCallback, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [authData, setAuthData] = useState(null);

    const navigate = useNavigate();

    const handleLogIn = useCallback((data) => {
        
        if(data.email == 'teste@gmail.com' && data.password == 'abc123'){
            const newAuthData = {
                name: "Rômullo Sander",
                email: 'teste@gmail.com',
                id: 1,
                address: 'Rua Front Masters, Nº123, São Paulo - SP',
                creditCard: 123456
            }

            const expireData = new Date();

            expireData.setHours(expireData.getHours() + 24);

            document.cookie = `fm_auth=${JSON.stringify(newAuthData)}; expires=${expireData.toUTCString()}; path=/;`;

            setAuthData(newAuthData);

            navigate('/');
        } else {
            return "CREDENCIAIS ERRADAS!!"
        }
    }, []);

    const handleLogout = useCallback(() => {
        setAuthData(null);
        document.cookie = "fm_auth=; Max-Age=0; path=/;";
    }, [])

    useEffect(() => {
        const cookies = document.cookie;

        cookies.split(';').forEach(element => {

            if(element.includes('fm_auth')){
                const cookieData = JSON.parse(element.replace('fm_auth=', ''));
                setAuthData(cookieData);
            }
        });
    }, []);

    return (
        <AuthContext.Provider
            value={{
                authData,
                handleLogIn,
                handleLogout
            }}
        >
            { children }
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    return useContext(AuthContext);
}