import React from "react";
import { CartProvider } from './useCart';

const AppProvider = ({ children }) => {

    return (
        <CartProvider>
            { children }
        </CartProvider>
    )
}

export default AppProvider;