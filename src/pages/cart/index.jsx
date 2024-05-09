import React from 'react';
import "./cart.css";
import { useCart } from '../../hooks/useCart';

const Cart = () => {

    const { cartProductsList } = useCart();

    const fakeCart = [
        {
            name: 'Product X1',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris condimentum nisi quis condimentum lobortis.',
            quantity: 5,
            price: 10
        },
        {
            name: 'Product X2',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris condimentum nisi quis condimentum lobortis.',
            quantity: 5,
            price: 10
        },
        {
            name: 'Product X3',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris condimentum nisi quis condimentum lobortis.',
            quantity: 5,
            price: 10
        },
        {
            name: 'Product X4',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris condimentum nisi quis condimentum lobortis.',
            quantity: 5,
            price: 10
        },
        {
            name: 'Product X5',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris condimentum nisi quis condimentum lobortis.',
            quantity: 5,
            price: 10
        },
        {
            name: 'Product X6',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris condimentum nisi quis condimentum lobortis.',
            quantity: 5,
            price: 10
        },
        {
            name: 'Product X7',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris condimentum nisi quis condimentum lobortis.',
            quantity: 5,
            price: 10
        },
        {
            name: 'Product X8',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris condimentum nisi quis condimentum lobortis.',
            quantity: 5,
            price: 10
        },
        {
            name: 'Product X9',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris condimentum nisi quis condimentum lobortis.',
            quantity: 5,
            price: 10
        },
        {
            name: 'Product X10',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris condimentum nisi quis condimentum lobortis.',
            quantity: 5,
            price: 10
        },
        {
            name: 'Product X11',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris condimentum nisi quis condimentum lobortis.',
            quantity: 5,
            price: 10
        },
        {
            name: 'Product X12',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris condimentum nisi quis condimentum lobortis.',
            quantity: 5,
            price: 10
        },
        {
            name: 'Product X13',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris condimentum nisi quis condimentum lobortis.',
            quantity: 5,
            price: 10
        },
        {
            name: 'Product X14',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris condimentum nisi quis condimentum lobortis.',
            quantity: 5,
            price: 10
        },
        {
            name: 'Product X15',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris condimentum nisi quis condimentum lobortis.',
            quantity: 5,
            price: 10
        },
    ];

    const calculateTotal = (array) => {

        let finalPrice = 0;

        array.forEach(item => {
            finalPrice += item.quantity * item.price
        });

        return finalPrice;
    }

    return (
        <div>
            
            <div className='cart__container'>
                <div className='cart__products-container'>
                    <ul className='cart__products-list'>

                        {
                            fakeCart.map((item) => (
                                <li className='cart__products-item'>
                                    <img  className='cart__product-image' src='https://picsum.photos/120' />
                                    <div className='cart__product-data'>
                                        <div className='cart__product-text'>
                                            <h3 className='cart__product-name'>{item.name}</h3>
                                            <p className='cart__product-description'>{item.description}</p>
                                        </div>
                                        
                                        <div className='cart__product-values'>
                                            <p className='cart__product-quantity'>Quantidade: {item.quantity}</p>
                                            <span className='cart__product-price'>R$ {item.price}</span>
                                        </div>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                </div>

                <div className='cart__total-price'>
                    <h3 className='cart__total-price__title'>Preço total</h3>

                    <ul className='cart__total-price__list'>
                        {
                            fakeCart.map((item) => (
                                <li className='cart__total-price__item'>
                                    <p>{item.name}</p>
                                    <span>Total: R${item.quantity * item.price}</span>
                                </li>
                            ))
                        }
                    </ul>

                    <div className='cart__total-price__final-value'>
                        Total: R$ { calculateTotal(fakeCart) }
                    </div>

                    <button className='cart__total-price__button'>Finalizar compra</button>
                </div>
            </div>
        </div>
    )
}

export default Cart;