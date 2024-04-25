import React from 'react';
import "./home.css";
import Carrossel from '../carrossel';
import ProductItem from '../../components/productItem';
import productList from '../../data/productList';

const Home = () => {

    return (
        <div className='container'>

            <Carrossel />

            <div className='products-list__container'>
                <ul className='products-list'>
                    {
                        productList.map((item) => (
                            <ProductItem data={item} />
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default Home;