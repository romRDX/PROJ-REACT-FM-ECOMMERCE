import React from 'react';
import "./products.css";

const Products = () => {

    return (
        <div className='products__container'>
            <h1 className='products__title'>Products List</h1>

            <div className='products__content'>
                <side className='products__filters'>
                    <p className='products__filters__title'>Tamanhos</p>
                    <ul className='products__filters__list'>
                        <li className='products__filters__item'>P</li>
                        <li className='products__filters__item'>M</li>
                        <li className='products__filters__item'>G</li>
                        <li className='products__filters__item'>GG</li>
                    </ul>

                    <p className='products__filters__title'>Cores</p>
                    <ul className='products__filters__list'>
                        <li className='products__filters__item'>vermelho</li>
                        <li className='products__filters__item'>azul</li>
                        <li className='products__filters__item'>verde</li>
                        <li className='products__filters__item'>amarelo</li>
                    </ul>
                </side>

                <main className='products__products-list'>
                    <li className='products__products-list__item'>item 1</li>
                    <li className='products__products-list__item'>item 2</li>
                    <li className='products__products-list__item'>item 3</li>
                    <li className='products__products-list__item'>item 1</li>
                    <li className='products__products-list__item'>item 2</li>
                    <li className='products__products-list__item'>item 3</li>
                    <li className='products__products-list__item'>item 1</li>
                    <li className='products__products-list__item'>item 2</li>
                    <li className='products__products-list__item'>item 3</li>
                    <li className='products__products-list__item'>item 1</li>
                    <li className='products__products-list__item'>item 2</li>
                    <li className='products__products-list__item'>item 3</li>
                    <li className='products__products-list__item'>item 1</li>
                    <li className='products__products-list__item'>item 2</li>
                    <li className='products__products-list__item'>item 3</li>
                    <li className='products__products-list__item'>item 1</li>
                    <li className='products__products-list__item'>item 2</li>
                    <li className='products__products-list__item'>item 3</li>
                    <li className='products__products-list__item'>item 1</li>
                    <li className='products__products-list__item'>item 2</li>
                    <li className='products__products-list__item'>item 3</li>
                </main>
            </div>
        </div>
    )
}

export default Products;