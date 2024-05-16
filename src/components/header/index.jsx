import React from 'react';
import './header.css';
import { Link } from "react-router-dom";

const Header = () => {

  return (
    <header className='header__container'>
      <nav className='header__nav'>
        <Link className='header__nav__item' to='/'>Home</Link>
        <Link className='header__nav__item' to='/products'>Produtos</Link>
        <Link className='header__nav__item' to='/help'>Ajuda</Link>

        <div className='header__nav__separator'>
            <Link className='header__nav__item' to='/cart'>Carrinho</Link>

            {/* <a className='header__nav__item'>Meus pedidos</a> */}
            
            <Link className='header__nav__item' to='/login'>Login</Link>

            <Link className='header__nav__item' to='/register'>Cadastrar</Link>
            {/* <a className='header__nav__item'>Meus dados</a> */}
        </div>
      </nav>
    </header>
  )
}

export default Header;