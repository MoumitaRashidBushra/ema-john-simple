import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css';

const Product = (props) => {
    // console.log(props)
    const { img, name, price, seller, ratings } = props.product;

    const handleToCart = props.handleToCart;
    return (
        <div className='product'>
            <div className='product-img'>
                <img src={img} alt="" />
            </div>
            <div className='product-other-tag'>
                <h6 className='product-name'>{name}</h6>
                <p>Price :{price}</p>
                <p>Manufacturer :{seller}</p>
                <p>Rating : {ratings}</p>
            </div>
            <div>
                <button onClick={() => handleToCart(props.product)} className='bnt-cart'>
                    Add to cart
                    <FontAwesomeIcon icon={faShoppingCart} />
                </button>
            </div>
        </div>
    );
};

export default Product;