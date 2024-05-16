import React from 'react';
import "./cart.css";
import { useCart } from '../../hooks/useCart';
import CartItem from '../../components/cartItem';
import { Link } from "react-router-dom";

const Cart = () => {

    const { cartProductsList } = useCart();

    const calculateTotal = (array) => {

        let finalPrice = 0;

        array.forEach(item => {
            finalPrice += item.quantity * item.value
        });

        return finalPrice;
    }

    return (
        <div>
            
            <div className='cart__container'>
                {
                    cartProductsList.length > 0 ?
                    <>
                        <div className='cart__products-container'>
                            <ul className='cart__products-list'>

                                {
                                    cartProductsList.map((item) => (
                                        <CartItem data={item} />
                                        // <li className='cart__products-item'>
                                        //     <img  className='cart__product-image' src='https://picsum.photos/120' />
                                        //     <div className='cart__product-data'>
                                        //         <div className='cart__product-text'>
                                        //             <h3 className='cart__product-name'>{item.name}</h3>
                                        //             <p className='cart__product-description'>{item.description}</p>
                                        //         </div>
                                                
                                        //         <div className='cart__product-values'>
                                        //             <p className='cart__product-quantity'>Quantidade: {item.quantity}</p>
                                        //             <span className='cart__product-price'>R$ {item.value}</span>
                                        //         </div>
                                        //     </div>
                                        // </li>
                                    ))
                                }
                            </ul>   
                        </div>

                        <div className='cart__total-price'>
                            <h3 className='cart__total-price__title'>Preço total</h3>

                            <ul className='cart__total-price__list'>
                                {
                                    cartProductsList.map((item) => (
                                        <li className='cart__total-price__item'>
                                            <p>{item.name}</p>
                                            <span>Total: R${item.quantity * item.value}</span>
                                        </li>
                                    ))
                                }
                            </ul>

                            <div className='cart__total-price__final-value'>
                                Total: R$ { calculateTotal(cartProductsList) }
                            </div>

                            <button className='cart__total-price__button'>Finalizar compra</button>
                        </div>
                    </>
                    :
                    <div className='cart__empty-message__container'>
                        <h2 className='cart__empty-message__message'>O seu carrinho está vazio.</h2>

                        <Link className='cart__empty-message__go-back' to='/products'>Voltar as compras</Link>
                    </div>
                }
                
            </div>
        </div>
    )
}

export default Cart;