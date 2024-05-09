import React, { Children, createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartProductsList, setCartProductsList] = useState([]);

    return (
        <CartContext.Provider
            value={{ cartProductsList, setCartProductsList }}
        >
            { children }
        </CartContext.Provider>
    )
}

export const useCart = () => {
    return useContext(CartContext);
}