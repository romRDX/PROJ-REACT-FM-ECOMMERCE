import react from 'react';
import './productItem.css';
import { useCart } from '../../hooks/useCart';

const ProductItem = ({ data }) => {

    const { handleAddProduct } = useCart();

    return (
        <li className='product-list__item'>
            <img className='product-list__item__img' src='https://picsum.photos/150' />
            <p className='product-list__item__name'>
                {data.name} - {data.colorName} - {data.size}
            </p>
            
            <p>
                { data.description }
            </p>

            <span className='product-list__item__price'>R$ {data.value},00</span>

            <button onClick={() => handleAddProduct(data)} className='product-list__add-item-button'>Add to cart</button>
        </li>
    )
}

export default ProductItem;