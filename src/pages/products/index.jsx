import React, { useState } from 'react';
import "./products.css";
import productList from '../../data/productList';
import ProductItem from '../../components/productItem';
import FilterItem from '../../components/filterItem/filterItem';

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

    const handleChangeFilter = (stateValue, newValue, resetValue) => {
        const isEqual = stateValue == newValue;

        return isEqual ? resetValue : newValue;
    }

    const handleChangePriceFilter = (stateValue, newValue, resetValue) => {
        const isEqual = JSON.stringify(stateValue) == JSON.stringify(newValue);

        return isEqual ? resetValue : newValue;
    }

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

                        <FilterItem
                            onClick={() => setSelectedPriceRange(handleChangePriceFilter(selectedPriceRange,[0,30], []))}
                            text={'de R$0,00 até R$30,00'}
                            className={`products__filters__item ${ arrayEquals(selectedPriceRange,[0,30]) && 'products__filters__item--active'}`}
                        />

                        <FilterItem
                            onClick={() => setSelectedPriceRange(handleChangePriceFilter(selectedPriceRange,[31,60], []))}
                            className={
                                `products__filters__item ${ arrayEquals(selectedPriceRange,[31,60]) && 'products__filters__item--active'}`
                            }
                            text={'de R$31,00 até R$60,00'}
                        />
                            
                        <FilterItem
                            onClick={() => setSelectedPriceRange(handleChangePriceFilter(selectedPriceRange,[61,90], []))}
                            className={
                                `products__filters__item ${ arrayEquals(selectedPriceRange,[61,90]) && 'products__filters__item--active'}`
                            }
                            text={'de R$61,00 até R$90,00'}
                        />
                        
                        <FilterItem
                            onClick={() => setSelectedPriceRange(handleChangePriceFilter(selectedPriceRange,[91,1000], []))}
                            className={
                                `products__filters__item ${ arrayEquals(selectedPriceRange,[91,1000]) && 'products__filters__item--active'}`
                            }
                            text={'Acima de R$90,00'}
                        />
                    </ul>

                    <p className='products__filters__title'>Tamanhos</p>
                    <ul className='products__filters__list'>
                        <FilterItem
                            onClick={() => setSelectedSize(handleChangeFilter(selectedSize, 'p', ''))}
                            className={
                                `products__filters__item ${selectedSize == 'p' && 'products__filters__item--active'}`
                            }
                            text={"P"}
                        /> 

                        <FilterItem
                            onClick={() => setSelectedSize(handleChangeFilter(selectedSize, 'm', ''))}
                            className={
                                `products__filters__item ${selectedSize == 'm' && 'products__filters__item--active'}`
                            }
                            text={'M'}
                        /> 

                        <FilterItem
                            onClick={() => setSelectedSize(handleChangeFilter(selectedSize, 'g', ''))}
                            className={
                                `products__filters__item ${selectedSize == 'g' && 'products__filters__item--active'}`
                            }
                            text={'G'}
                        /> 

                        <FilterItem
                            onClick={() => setSelectedSize(handleChangeFilter(selectedSize, 'gg', ''))}
                            className={
                                `products__filters__item ${selectedSize == 'gg' && 'products__filters__item--active'}`
                            }
                            text={'GG'}
                        /> 
                    </ul>

                    <p className='products__filters__title'>Cores</p>
                    <ul className='products__filters__list'>
                        <FilterItem
                            onClick={() => setSelectedColor(handleChangeFilter(selectedColor, 'vermelho', ''))}
                            className={
                                `products__filters__item ${selectedColor == 'vermelho' && 'products__filters__item--active'}`
                            }
                            text={'vermelho '}
                        /> 

                        <FilterItem
                            onClick={() => setSelectedColor(handleChangeFilter(selectedColor, 'azul', ''))}
                            className={
                                `products__filters__item ${selectedColor == 'azul' && 'products__filters__item--active'}`
                            }
                            text={'azul '}
                        />

                        <FilterItem
                            onClick={() => setSelectedColor(handleChangeFilter(selectedColor, 'verde', ''))}
                            className={
                                `products__filters__item ${selectedColor == 'verde' && 'products__filters__item--active'}`
                            }
                            text={'verde'}
                        /> 

                        <FilterItem
                            onClick={() => setSelectedColor(handleChangeFilter(selectedColor, 'amarelo', ''))}
                            className={
                                `products__filters__item ${selectedColor == 'amarelo' && 'products__filters__item--active'}`
                            }
                            text={'amarelo '}
                        />
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