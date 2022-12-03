import React from 'react'
import Button from '../Button/Button';
import "./Header.scss";
import { FiShoppingCart } from 'react-icons/fi'
import { NavLink } from 'react-router-dom';

function Header() {
    return (
        <div className="header">
            <div className="container">
                <div className="header__logo">
                    <img width="38" src="./img/pizza-logo.svg" alt="Pizza logo" />
                    <div className='header-desc'>
                        <h1>React Pizza</h1>
                        <p>самая вкусная пицца во вселенной</p>
                    </div>
                </div>
                <div className="header__cart">
                    <Button buttonCart>
                    <p>520 ₽</p>
                        <NavLink to="/cart">
                            
                            <FiShoppingCart />
                            <span>3</span>
                        </NavLink>
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Header