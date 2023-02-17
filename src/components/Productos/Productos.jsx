import React from "react";
import "./Productos.css";
import IMG from "../../assets/images/img01.jpg";
import { data as ListaProductos } from "../../data"

export const Productos = () => {
    return (
        <div>
            <h1 className="title">Productos</h1>
            <div className="productos">
                {
                    ListaProductos.map((producto) => 
                        
                            <div key={producto.id} className="producto">
                            <a href="#">
                                <div className="producto__img">
                                    <img src={producto.image} alt="" />
                                </div>
                            </a>
                            <div className="producto__footer">
                                <h1> Title {producto.title} </h1>
                                <p> Categoría {producto.category} </p>
                                <p className="price"> ${producto.price} </p>
                            </div>
                            <div className="button">
                                <button className="btn">
                                    Añadir al carrito
                                </button>
                                <div>
                                    <a href="#" className="btn">Vista</a>
                                </div>
                            </div>
                        </div>
                        
                    )
                }
            </div>
        </div>
    )
}