import React from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { FaShoppingCart } from "react-icons/fa"
import logo from "../../assets/images/Nike.jpg";
import "./Header.css";

export const Header = () => {
    return (
        <header>
            <div className="menu">
            <GiHamburgerMenu />
            </div>
            <a href="">
                <div className="logo">
                    <img src={logo} alt="" />
                </div>
            </a>
            <ul>
                <li>
                    <a href="">Inicio</a>
                </li>
                <li>
                    <a href="">Productos</a>
                </li>
            </ul>
            <div className="cart">
                <FaShoppingCart className="cart__icon" />
                <span className="item__total">0</span>
            </div>
        </header>
    )
}
