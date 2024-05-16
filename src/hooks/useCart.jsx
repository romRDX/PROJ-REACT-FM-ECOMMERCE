import React, { Children, createContext, useCallback, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartProductsList, setCartProductsList] = useState([]);

    console.log("CART PRODUCTS: ", cartProductsList);

    const handleAddProduct = useCallback((newProduct) => {

        setCartProductsList(prev => {

            const foundItem = prev.findIndex((item) => item.id === newProduct.id);

            if(foundItem !== -1){
                return prev.map((item, index) => {
                    if (index === foundItem) {
                        return { ...item, quantity: item.quantity + 1 };
                    }
                    return item;
                });
            } else {
                return [...prev, { ...newProduct, quantity: 1 }]
            }
        });
    }, [])

    return (
        <CartContext.Provider
            value={{ cartProductsList, handleAddProduct }}
        >
            { children }
        </CartContext.Provider>
    )
}

export const useCart = () => {
    return useContext(CartContext);
}