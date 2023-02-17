import React, { useContext } from "react";
import "./Productos.css";
import { ProductoItem } from "./ProductoItem";
import { DataContext } from "../../Context/DataProvider";

export const Productos = () => {
    const value = useContext(DataContext);
    const [productos] = value.producto;

    console.log(productos);
    return (
        <div>
            <h1 className="title">Productos</h1>
            <div className="productos">
                {productos.map((producto) => (
                    <ProductoItem 
                    key={producto.id}
                    id={producto.id}
                    title={producto.title}
                    price={producto.price}
                    image={producto.image}
                    category={producto.category}
                    cantidad={producto.cantidad}
                    />
                ))}
            </div>
        </div>
    )
}