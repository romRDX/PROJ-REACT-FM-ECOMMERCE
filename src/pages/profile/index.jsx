import React from 'react';
import "./profile.css";
import { useAuth } from '../../hooks/useAuth';

const Profile = () => {

    const { authData, activeAddress, activeCreditCard } = useAuth();

    console.log("ASD: ", activeCreditCard);

    return (
        <div className='container'>

            <div className='profile__user-data'>
                <img className='profile__user-img' src='https://picsum.photos/80' />
                <div>
                    <p className='profile__user-name'>{ authData?.name }</p>
                    <p className='profile__user-birth'>{ authData?.email }</p>
                </div>
            </div>

            <div className='profile__user-data profile__user-data--vertical'>
                <h3 className='profile__data-title'>Endereços: </h3>
                <ul className='profile__data-list'>
                    {
                        authData?.address && authData.address.map((addr) => (
                            <li
                                className={`
                                    profile__address-item

                                    ${
                                        addr.id == activeAddress && 'profile__address-item--active'
                                    }
                                `}
                            >
                                {addr.name}
                            </li>
                        )) 
                    }
                </ul>
            </div>

            <div className='profile__user-data profile__user-data--vertical'>
                <h3 className='profile__data-title'>Cartões de crédito: </h3>
                <ul className='profile__data-list'>
                    {
                        authData?.address && authData.creditCards.map((addr) => (
                            <li
                                className={`
                                    profile__credit-card-item

                                    ${addr == activeCreditCard && 'profile__credit-card-item--active'}
                                `}
                            >
                                {addr}
                            </li>
                        )) 
                    }
                </ul>
            </div>

        </div>
    )
}

export default Profile;