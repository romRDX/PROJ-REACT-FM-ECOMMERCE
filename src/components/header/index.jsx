import React from 'react';
import './header.css';
import { Link } from "react-router-dom";
import { useAuth } from '../../hooks/useAuth';

const Header = () => {

  const { authData, handleLogout } = useAuth();

  return (
    <header className='header__container'>
      <nav className='header__nav'>
        <Link className='header__nav__item' to='/'>Home</Link>
        <Link className='header__nav__item' to='/products'>Produtos</Link>
        <Link className='header__nav__item' to='/help'>Ajuda</Link>

        <div className='header__nav__separator'>
            <Link className='header__nav__item' to='/cart'>Carrinho</Link>

            {
              authData ? 
              <>
                <a className='header__nav__item'>Meus pedidos</a>
                <Link className='header__nav__item' to='/profile'>Meus dados</Link>
                <a onClick={handleLogout} className='header__nav__item'>Deslogar</a>
              </>
              :
              <>
                <Link className='header__nav__item' to='/login'>Login</Link>

                <Link className='header__nav__item' to='/register'>Cadastrar</Link>
              </>
            }
        </div>
      </nav>
    </header>
  )
}

export default Header;