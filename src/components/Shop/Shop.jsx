import React, { useEffect, useState } from 'react';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([])

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    useEffect(() => {
        const storeCart = getShoppingCart();
        const savedCart = [];
        // console.log(storeCart);
        for (const id in storeCart) {
            const addCart = products.find(product => product.id === id);
            if (addCart) {
                const quantity = storeCart[id];
                addCart.quantity = quantity;
                savedCart.push(addCart);
            }
            //console.log(addCart);
        }
        setCart(savedCart);

    }, [products])

    const handleToCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
        addToDb(product.id);

    }


    return (
        <div className='shop-container'>
            <div className='product-container'>

                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        handleToCart={handleToCart}
                    ></Product>)
                }
            </div>

            <div className='cart-container'>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;