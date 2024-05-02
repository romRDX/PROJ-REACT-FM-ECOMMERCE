import React, { useState } from 'react';
import "./products.css";
import productList from '../../data/productList';
import ProductItem from '../../components/productItem';

const Products = () => {

    const [selectedColor, setSelectedColor] = useState('');
    const [selectedSize, setSelectedSize] = useState('');

    const filterByColor = (listData, colorData) => {
        const newList = listData.filter((item) => item.colorName.toLowerCase() == colorData.toLowerCase());
        return colorData ? newList : listData;
    }

    const filterBySize = (listData, sizeData) => {
        // console.log("ASD: ", listData[0].size.toLowerCase());
        const newList = listData.filter((item) => item.size.toLowerCase() == sizeData.toLowerCase());
        // const newList = listData.filter((item) => {
        //     console.log("ASD: ", item.size);
        // });
        return sizeData ? newList : listData;
        return [];
    }

    const resetFilters = () => {
        setSelectedColor('');
    }

    return (
        <div className='products__container'>
            <h1 className='products__title'>Products List</h1>

            <div className='products__content'>
                <aside className='products__filters'>

                    <p className='products__filters__title'>Preço</p>
                    <ul className='products__filters__list'>
                        <li className='products__filters__item'>até R30,00</li>
                        <li className='products__filters__item'>de R$31,00 até R$60,00</li>
                        <li className='products__filters__item'>de R$61,00 até R$90,00</li>
                        <li className='products__filters__item'>Acima de R$90,00</li>
                    </ul>

                    <p className='products__filters__title'>Tamanhos</p>
                    <ul className='products__filters__list'>
                        <li onClick={() => setSelectedSize('p')} className='products__filters__item'>P</li>
                        <li onClick={() => setSelectedSize('m')}className='products__filters__item'>M</li>
                        <li onClick={() => setSelectedSize('g')}className='products__filters__item'>G</li>
                        <li onClick={() => setSelectedSize('gg')}className='products__filters__item'>GG</li>
                    </ul>

                    <p className='products__filters__title'>Cores</p>
                    <ul className='products__filters__list'>
                        <li onClick={() => setSelectedColor('vermelho')} className='products__filters__item'>vermelho</li>
                        <li onClick={() => setSelectedColor('azul')} className='products__filters__item'>azul</li>
                        <li onClick={() => setSelectedColor('verde')} className='products__filters__item'>verde</li>
                        <li onClick={() => setSelectedColor('amarelo')} className='products__filters__item'>amarelo</li>
                    </ul>

                    <button onClick={resetFilters} className='products__reset-filter'>Resetar Filtros</button>
                </aside>

                <main className='products__products-container'>
                    <ul className='products__products-list'>
                        {
                            // filterByColor(productList, selectedColor).map((item) => (
                            filterBySize(productList, selectedSize).map((item) => (
                                <ProductItem data={item} />
                            ))
                        }
                    </ul>
                </main>
            </div>
        </div>
    )
}

export default Products;