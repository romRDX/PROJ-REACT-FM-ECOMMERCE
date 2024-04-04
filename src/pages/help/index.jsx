import React from 'react';
import "./help.css";

const HelpPage = () => {

    // https://www.mercadolivre.com.br/ajuda#nav-header

    return (
        <div className='help__container'>
            <h1 className='help__title'>Como podemos ajudar?</h1>

            <section className='help__section'>
                <h2 className='help__section__title'>Compras</h2>
                <ul className='help__section__list'>
                    <li className='help__section__item'>
                        <div className='help__section__icon'>icone</div>
                        <h3 className='help__section__item-title'>Administrar e cancelar compras</h3>
                        <p className='help__section__item-details'>Pagar, rastrear envios, alterar, reclamar ou cancelar compras.</p>
                        <div className='help__section__arrow'>seta</div>
                    </li>
                    <li className='help__section__item'>
                        <div className='help__section__icon'>icone</div>
                        <h3 className='help__section__item-title'> Devoluções reembolsos</h3>
                        <p className='help__section__item-details'> Devolver um produto ou consultar por estorno de compra</p>
                        <div className='help__section__arrow'>seta</div>
                    </li>
                    <li className='help__section__item'>
                        <div className='help__section__icon'>icone</div>
                        <h3 className='help__section__item-title'>Perguntas frequentes sobre compras</h3>
                        <p className='help__section__item-details'></p>
                        <div className='help__section__arrow'>seta</div>
                    </li>
                </ul>
            </section>

            <section className='help__section'>
                <h2 className='help__section__title'>Vendas</h2>
                <ul className='help__section__list'>
                    <li className='help__section__item'>
                        <div className='help__section__icon'>icone</div>
                        <h3 className='help__section__item-title'>Reputação, vendas e envios</h3>
                        <p className='help__section__item-details'>Perguntar sobre sua reputação, envio, pagamento ou devolução</p>
                        <div className='help__section__arrow'>seta</div>
                    </li>
                    <li className='help__section__item'>
                        <div className='help__section__icon'>icone</div>
                        <h3 className='help__section__item-title'>Gerenciar anúncios</h3>
                        <p className='help__section__item-details'>Melhorar a qualidade, alterar, excluir ou resolver problemas.</p>
                        <div className='help__section__arrow'>seta</div>
                    </li>
                    <li className='help__section__item'>
                        <div className='help__section__icon'>icone</div>
                        <h3 className='help__section__item-title'>Perguntas frequentes sobre vendas</h3>
                        <div className='help__section__arrow'>seta</div>
                    </li>
                </ul>
            </section>

            <section className='help__section'>
                <h2 className='help__section__title'>Ajuda com sua conta</h2>
                <ul className='help__section__list'>
                    <li className='help__section__item'>
                        <h3 className='help__section__item-title'>Configuração da minha conta</h3>
                        <div className='help__section__arrow'>seta</div>
                    </li>
                    <li className='help__section__item'>
                        <h3 className='help__section__item-title'>Segurança</h3>
                        <div className='help__section__arrow'>seta</div>
                    </li>
                </ul>
            </section>

            <section className='help__section'>
                <h2 className='help__section__title'>Você precisa de mais ajuda?</h2>
                <ul className='help__section__list'>
                    <li className='help__section__item'>
                        <h3 className='help__section__item-title'>Fale conosco</h3>
                        <div className='help__section__arrow'>seta</div>
                    </li>
                </ul>
            </section>
        </div>
    )
}

export default HelpPage;