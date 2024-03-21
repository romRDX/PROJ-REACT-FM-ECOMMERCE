import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/home';
import Products from '../pages/products';
import Cart from '../pages/cart';
import HelpPage from '../pages/help';

const RoutesConfig = () => (
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Products />} />
        <Route path='/help' element={<HelpPage />} />
        <Route path='/cart' element={<Cart />} />
    </Routes>
);

export default RoutesConfig;