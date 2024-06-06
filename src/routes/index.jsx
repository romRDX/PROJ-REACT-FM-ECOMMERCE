import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/home';
import Products from '../pages/products';
import Cart from '../pages/cart';
import HelpPage from '../pages/help';
import LoginPage from '../pages/login';
import RegisterPage from '../pages/register';
import Profile from '../pages/profile';

const RoutesConfig = () => (
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Products />} />
        <Route path='/help' element={<HelpPage />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/profile' element={<Profile />} />
    </Routes>
);

export default RoutesConfig;