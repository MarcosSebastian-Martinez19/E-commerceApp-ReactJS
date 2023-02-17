import React from 'react';
import { FaCartPlus } from "react-icons/fa" ;

export const ProductoItem = ({ id, title, price, image, category, cantidad }) => {
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
                <button className="btn">
                    <FaCartPlus className="cart__add"/> Añadir
                </button>
                <div>
                    <a href="#" className="btn">Vista</a>
                </div>
            </div>
        </div>
    )
}
