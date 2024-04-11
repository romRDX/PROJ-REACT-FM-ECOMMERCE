import React from 'react';
import "./register.css";
import { useForm } from "react-hook-form"

const Products = () => {

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log(data)


    }

    console.log('ERRORS: ', errors);

    return (
        <div className='register__container'>
            
            <div className='register__content'>

                <h1 className='register__title' >Registro</h1>

                <form className='register__form' onSubmit={handleSubmit(onSubmit)}>
                    
                    <div className='register__form-input-container'>
                        <input className='register__form-input' placeholder='Nome completo' {...register("name", { required: true })} />
                        {
                            errors.name &&
                            <div className='register__form-error-message'>
                                <p>!!!</p>

                                <div className='register__error-message__tooltip'>
                                    Campo obrigatório
                                </div>
                            </div>
                        }
                    </div>

                    <div className='register__form-input-container'>
                        <input className='register__form-input' type='number' placeholder='CPF' {...register("cpf", { required: true })} />
                        {
                            errors.cpf &&
                            <div className='register__form-error-message'>
                                <p>!!!</p>

                                <div className='register__error-message__tooltip'>
                                    Campo obrigatório
                                </div>
                            </div>
                        }
                    </div>

                    <div className='register__form-input-container'>
                        <input className='register__form-input' placeholder='Endereço' {...register("address", { required: true })} />
                        {
                            errors.address &&
                            <div className='register__form-error-message'>
                                <p>!!!</p>

                                <div className='register__error-message__tooltip'>
                                    Campo obrigatório
                                </div>
                            </div>
                        }
                    </div>

                    <div className='register__form-input-container'>
                        <input
                            className='register__form-input'
                            placeholder='E-mail'
                            {...register(
                                "email",
                                {
                                    required: true,
                                    // pattern: '/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/'
                                }
                            )}
                        />
                        {
                            errors.email &&
                            <div className='register__form-error-message'>
                                <p>!!!</p>

                                <div className='register__error-message__tooltip'>
                                    Campo obrigatório
                                </div>
                            </div>
                        }
                    </div>

                    <div className='register__form-input-container'>
                        <input className='register__form-input' type='number' placeholder='Telefone' {...register("phone", { required: true })} />
                        {
                            errors.phone &&
                            <div className='register__form-error-message'>
                                <p>!!!</p>

                                <div className='register__error-message__tooltip'>
                                    Campo obrigatório
                                </div>
                            </div>
                        }
                    </div>

                    <div className='register__form-input-container'>
                        <input className='register__form-input' type='password' placeholder='Senha' {...register("password", { required: true })} />
                        {
                            errors.password &&
                            <div className='register__form-error-message'>
                                <p>!!!</p>

                                <div className='register__error-message__tooltip'>
                                    Campo obrigatório
                                </div>
                            </div>
                        }
                    </div>

                    <input className='register__form-submit' type="submit" />
                </form>
            </div>
        </div>
    )
}

export default Products;