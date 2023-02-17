import React from 'react';
import Portada from "../../assets/images/inicio.jpg";
import { Link } from "react-router-dom";
import "./Inicio.css"

export const Inicio = () => {
    return (
        <div className="inicio">
            <Link to="/">
                <h1>Inicio</h1>
            </Link>
            <Link to="/productos">
            <h1>Productos</h1>
            </Link>
            <img src={Portada} alt="" />
        </div>
    )
}