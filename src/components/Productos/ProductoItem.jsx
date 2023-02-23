import React, { useContext } from 'react';
import { FaCartPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import { DataContext } from '../../Context/DataProvider';

export const ProductoItem = ({ id, title, price, image, category, cantidad }) => {
    
    const value = useContext(DataContext);
    const addCarrito = value.addCarrito;


    return (
        <div key={id} className="producto">
            <a href="#">
                <div className="producto__img">
                    <img src={image} alt={title} />
                </div>
            </a>
            <div className="producto__footer">
                <h1>Modelo: {title} </h1>
                <p>Marca: {category} </p>
                <p className="price">Precio: ${price} </p>
            </div>
            <div className="button">
                <button className="btn" onClick={() => addCarrito(id)}>
                    <FaCartPlus className="cart__add" /> Añadir
                </button>
                <div>
                    <a href="#" className="btn">Vista</a>
                </div>
            </div>
        </div>
    )
}
