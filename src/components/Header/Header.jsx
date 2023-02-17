import React from 'react';
import { Link } from "react-router-dom";
// import { GiHamburgerMenu } from "react-icons/gi";
import { FaShoppingCart } from "react-icons/fa"
import logo from "../../assets/images/Nike.jpg";
import "./Header.css";

export const Header = () => {
    return (
        <header>
            {/* <div className="menu">
                <GiHamburgerMenu />
            </div> */}
            <Link to="/">
                <div className="logo">
                    <img src={logo} alt="" />
                </div>
            </Link>
            <ul>
                <li>
                    <Link to="/">INICIO</ Link>
                </li>
                <li>
                    <Link to="/productos">PRODUCTOS</Link>
                </li>
            </ul>
            <div className="cart">
                <FaShoppingCart className="cart__icon" />
                <span className="item__total">0</span>
            </div>
        </header>
    )
}
