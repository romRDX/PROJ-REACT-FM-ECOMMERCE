import React, { createContext, useCallback, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [authData, setAuthData] = useState(null);
    const [activeAddress, setActiveAddress] = useState(1);
    const [activeCreditCard, setActiveCreditCard] = useState(123456);

    const navigate = useNavigate();

    const handleLogIn = useCallback((data) => {
        
        if(data.email == 'teste@gmail.com' && data.password == 'abc123'){
            const newAuthData = {
                name: "Rômullo Sander",
                email: 'teste@gmail.com',
                id: 1,
                address: [
                    {
                        id: 1,
                        name: 'Rua Front Masters, Nº123, São Paulo - SP'
                    },
                    {
                        id: 2,
                        name: 'Rua React, Nº321, São Paulo - SP'
                    },
                    {
                        id: 3,
                        name: 'Rua Next.Js, Nº321, São Paulo - SP'
                    },
                ],
                creditCards: [123456, 789012, 11223344],
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
    }, []);

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
                handleLogout,
                activeAddress,
                setActiveAddress,
                activeCreditCard,
                setActiveCreditCard
            }}
        >
            { children }
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    return useContext(AuthContext);
}