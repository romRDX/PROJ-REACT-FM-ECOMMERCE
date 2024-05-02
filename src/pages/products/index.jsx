import React, { useState } from 'react';
import "./products.css";
import productList from '../../data/productList';
import ProductItem from '../../components/productItem';

const Products = () => {

    const [selectedColor, setSelectedColor] = useState('');
    const [selectedSize, setSelectedSize] = useState('');
    const [selectedPriceRange, setSelectedPriceRange] = useState([]);

    const filterByAll = () => {
        const newList = productList.filter((item) => (
            (selectedColor ? (item.colorName.toLowerCase() == selectedColor.toLowerCase()) : true) &&
            (selectedSize ? (item.size.toLowerCase() == selectedSize.toLowerCase()) : true) &&
            (selectedPriceRange.length != 0 ? (item.value >= selectedPriceRange[0] && item.value <= selectedPriceRange[1]) : true)
        ));

        return newList;
    }

    const resetFilters = () => {
        setSelectedColor('');
        setSelectedPriceRange([]);
        setSelectedSize('');
    }

    // console.log("asd: ", selectedPriceRange);

    function arrayEquals(a, b) {
        return Array.isArray(a) &&
            Array.isArray(b) &&
            a.length === b.length &&
            a.every((val, index) => val === b[index]);
    }

    return (
        <div className='products__container'>
            <h1 className='products__title'>Products List</h1>

            <div className='products__content'>
                <aside className='products__filters'>

                    <p className='products__filters__title'>Preço</p>
                    <ul className='products__filters__list'>

                        <li 
                            onClick={() => setSelectedPriceRange([0,30])}
                            className={
                                `products__filters__item ${ arrayEquals(selectedPriceRange,[0,30]) && 'products__filters__item--active'}`
                            }
                        >
                            até R30,00
                        </li>

                        <li
                            onClick={() => setSelectedPriceRange([31,60])}
                            className={
                                `products__filters__item ${ arrayEquals(selectedPriceRange,[31,60]) && 'products__filters__item--active'}`
                            }
                        >
                            de R$31,00 até R$60,00
                        </li>

                        <li
                            onClick={() => setSelectedPriceRange([61,90])}
                            className={
                                `products__filters__item ${ arrayEquals(selectedPriceRange,[61,90]) && 'products__filters__item--active'}`
                            }
                        >
                            de R$61,00 até R$90,00
                        </li>

                        <li
                            onClick={() => setSelectedPriceRange([91,1000])}
                            className={
                                `products__filters__item ${ arrayEquals(selectedPriceRange,[91,1000]) && 'products__filters__item--active'}`
                            }
                        >
                            Acima de R$90,00
                        </li>
                    </ul>

                    <p className='products__filters__title'>Tamanhos</p>
                    <ul className='products__filters__list'>
                        <li
                            onClick={() => setSelectedSize('p')}
                            className={
                                `products__filters__item ${selectedSize == 'p' && 'products__filters__item--active'}`
                            }
                        > P </li>

                        <li 
                            onClick={() => setSelectedSize('m')}
                            className={
                                `products__filters__item ${selectedSize == 'm' && 'products__filters__item--active'}`
                            }
                        > M </li>

                        <li 
                            onClick={() => setSelectedSize('g')}
                            className={
                                `products__filters__item ${selectedSize == 'g' && 'products__filters__item--active'}`
                            }
                        > G </li>

                        <li 
                            onClick={() => setSelectedSize('gg')}
                            className={
                                `products__filters__item ${selectedSize == 'gg' && 'products__filters__item--active'}`
                            }
                        > GG </li>
                    </ul>

                    <p className='products__filters__title'>Cores</p>
                    <ul className='products__filters__list'>
                        <li 
                            onClick={() => setSelectedColor('vermelho')}
                            className={
                                `products__filters__item ${selectedColor == 'vermelho' && 'products__filters__item--active'}`
                            }
                        > vermelho </li>

                        <li 
                            onClick={() => setSelectedColor('azul')}
                            className={
                                `products__filters__item ${selectedColor == 'azul' && 'products__filters__item--active'}`
                            }
                        > azul </li>

                        <li 
                            onClick={() => setSelectedColor('verde')}
                            className={
                                `products__filters__item ${selectedColor == 'verde' && 'products__filters__item--active'}`
                            }
                        > verde </li>

                        <li
                            onClick={() => setSelectedColor('amarelo')}
                            className={
                                `products__filters__item ${selectedColor == 'amarelo' && 'products__filters__item--active'}`
                            }
                        > amarelo </li>
                    </ul>

                    <button onClick={resetFilters} className='products__reset-filter'>Resetar Filtros</button>
                </aside>

                <main className='products__products-container'>
                    <ul className='products__products-list'>
                        {
                            filterByAll().map((item) => (
                                <ProductItem key={item.id} data={item} />
                            ))
                        }
                    </ul>
                </main>
            </div>
        </div>
    )
}

export default Products;