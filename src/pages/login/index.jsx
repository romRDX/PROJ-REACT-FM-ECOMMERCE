import React from 'react';
import "./login.css"

const LoginPage = () => {

    return (
        <div className='login__container'>

            <div className='login__content'>
                <h1 className='login__title'>Faça login</h1>

                <input placeholder='Nome de usuário' className='login__username login__input' />
                <input placeholder='Senha' className='login__password login__input' type='password' />

                <div className='login__buttons'>
                    <button className='login__button'>Login</button>

                    <a href='#' className='login__register'>Cadastrar</a>
                </div>
            </div>
        </div>
    )
}

export default LoginPage;