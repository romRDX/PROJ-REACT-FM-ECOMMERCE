import React, { useRef, useState, useEffect } from 'react';
import "./login.css"
import { useAuth } from '../../hooks/useAuth';

const LoginPage = () => {

    const { handleLogIn } = useAuth();

    const emailValue = useRef();
    const passwordValue = useRef();

    const [error, setError] = useState(null);

    const handleDoLogin = (e) => {
        e.preventDefault();

        const error = handleLogIn({ email: emailValue.current.value, password: passwordValue.current.value });

        if(error){
            setError(error);
        };
    }

    const handleResetError = () => {
        if(error){
            setError(null)
        }
    }

    return (
        <div className='login__container'>

            <div className='login__content'>
                <h1 className='login__title'>Faça login</h1>
                
                <form className='login__form'>
                    <input onChange={handleResetError} ref={emailValue} placeholder='Nome de usuário' className='login__username login__input' />
                    <input onChange={handleResetError} ref={passwordValue} placeholder='Senha' className='login__password login__input' type='password' />

                    <div className='login__buttons'>
                        <button type='submit' onClick={handleDoLogin} className='login__button' id='login__button'>Login</button>

                        <a href='#' className='login__register'>Cadastrar</a>
                    </div>
                </form>
            </div>
            {
                error &&
                <div className='login__error-message'>
                    {error}
                </div>
            }
        </div>
    )
}

export default LoginPage;