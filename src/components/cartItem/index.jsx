import React from 'react';
import "./cartItem.css";
import { useCart } from '../../hooks/useCart';

const CartItem = ({ data }) => {

    const {
        handleIncrementProductQuantity,
        handleDecrementProductQuantity,
        handleDeleteProduct
    } = useCart();

    console.log("ASD: ", data);

    return (
        <li className='cart-item__container'>
            <img  className='cart-item__image' src='https://picsum.photos/120' />
            <div className='cart-item__data'>
                <div className='cart-item__text'>
                    <h3 className='cart-item__name'>{data.name}</h3>
                    <p className='cart-item__description'>{data.description}</p>
                </div>
                
                <div className='cart-item__values'>
                    <p className='cart-item__quantity'>Quantidade: {data.quantity}</p>

                    <div className='cart-item__value-data'>
                        <button onClick={() => handleDecrementProductQuantity(data.id)} className='cart-item__button cart-item__button--minus'>-</button>
                        <span className='cart-item__price'>R$ {data.value}</span>
                        <button onClick={() => handleIncrementProductQuantity(data.id)} className='cart-item__button cart-item__button--plus'>+</button>

                        <button onClick={() => handleDeleteProduct(data.id)} className='cart-item__delete-button'>
                            DEL
                        </button>
                    </div>
                    
                </div>
            </div>
        </li>
    )
}

export default CartItem;