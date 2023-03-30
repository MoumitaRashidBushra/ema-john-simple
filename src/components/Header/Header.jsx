import React from 'react';
import './Header.css';
import logo from '../../images/Logo.svg'
const Header = () => {
    return (
        <nav className='header'>
            <div >
                <img src={logo} alt="" />

            </div>
            <div className='atag'>
                <a href="#">Order</a>
                <a href="#">Order Review</a>
                <a href="#">Manage Inventory</a>
                <a href="#">Login</a>
            </div>
        </nav>
    );
};

export default Header;