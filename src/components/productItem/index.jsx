import react from 'react';
import './productItem.css';

const ProductItem = ({ data }) => {

    return (
        <li className='product-list__item'>
            <img className='product-list__item__img' src='https://picsum.photos/150' />
            <p>{data.name}</p>
            <span className='product-list__item__price'>R$ {data.value},00</span>
            <p>
                { data.description }
            </p>
        </li>
    )
}

export default ProductItem;