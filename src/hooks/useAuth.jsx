import React, { Children, createContext, useCallback, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [authData, setAuthData] = useState([]);

    const handleLogIn = useCallback((data) => {
        
        if(data.email == 'teste@gmail.com' && data.password == 'abc123'){
            setAuthData({
                name: "Rômullo Sander",
                email: 'teste@gmail.com',
                id: 1,
                address: 'Rua Front Masters, Nº123, São Paulo - SP',
                creditCard: 123456
            });

            console.log("LOGADO!!");
            // ENVIAR PARA A HOME JÁ LOGADO
        } else {
            return "CREDENCIAIS ERRADAS!!"
        }
    }, []);

    return (
        <AuthContext.Provider
            value={{
                authData,
                handleLogIn
            }}
        >
            { children }
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    return useContext(AuthContext);
}