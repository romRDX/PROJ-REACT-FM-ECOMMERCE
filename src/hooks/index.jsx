import React from "react";
import { CartProvider } from './useCart';
import { AuthProvider } from './useAuth';

const AppProvider = ({ children }) => {

    return (
        <AuthProvider>
            <CartProvider>
                { children }
            </CartProvider>
        </AuthProvider>
    )
}

export default AppProvider;