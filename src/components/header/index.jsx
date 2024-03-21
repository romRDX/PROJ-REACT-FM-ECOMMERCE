import React from 'react';
import './header.css';

const Header = () => {

    return (
        <header className='header__container'>
          <nav className='header__nav'>
            <a className='header__nav__item' href='/'>Home</a>
            <a className='header__nav__item'href='/products'>Produtos</a>
            <a className='header__nav__item' href='/help'>Ajuda</a>

            <div className='header__nav__separator'>
                <a className='header__nav__item' href='/cart'>Carrinho</a>

                {/* <a className='header__nav__item'>Meus pedidos</a> */}
                
                <a className='header__nav__item' href='/login'>Login</a>
                {/* <a className='header__nav__item'>Meus dados</a> */}
            </div>
          </nav>
        </header>
    )
}

export default Header;