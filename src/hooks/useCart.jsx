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
    }, []);

    const handleIncrementProductQuantity = useCallback((productId) => {
        setCartProductsList(prev => {
            return prev.map((item) => {
                if(item.id == productId){
                    return {
                        ...item,
                        quantity: item.quantity + 1
                    }
                }

                return item;
            })
        });
    }, []);

    const handleDeleteProduct = useCallback((productId) => {
        setCartProductsList(prev => {
            return prev.filter((item) => item.id != productId);
        });
    }, []);

    const handleDecrementProductQuantity = useCallback((productId) => {
        setCartProductsList(prev => {
            return prev.map((item) => {
                if(item.id == productId){

                    if(item.quantity == 0){
                        handleDeleteProduct(productId);
                    } else {
                        return {
                            ...item,
                            quantity: item.quantity - 1
                        }
                    }
                }

                return item;
            })
        });
    }, []);

    return (
        <CartContext.Provider
            value={{
                cartProductsList,
                handleAddProduct,
                handleIncrementProductQuantity,
                handleDecrementProductQuantity,
                handleDeleteProduct
            }}
        >
            { children }
        </CartContext.Provider>
    )
}

export const useCart = () => {
    return useContext(CartContext);
}