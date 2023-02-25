import React, { useContext } from "react";
import "./Carrito.css";
import { DataContext } from "../../Context/DataProvider";
import { AiOutlineCloseCircle, AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";
import { BsTrashFill } from "react-icons/bs"

export const Carrito = () => {
    const value = useContext(DataContext);
    const [menu, setMenu] = value.menu;
    const [carrito, setCarrito] = value.carrito;
    const [total] = value.total;

    const toogleFalse = () => {
        setMenu(false);
    }

    const show1 = menu ? "carritos show" : "carritos";
    const show2 = menu ? "carrito show" : "carrito";

    const resta = id => {
        carrito.forEach(item => {
            if (item.id === id) {
                item.cantidad === 1 ? item.cantidad = 1 : item.cantidad -= 1;
            }
            setCarrito([...carrito])
        });
    }

    const suma = id => {
        carrito.forEach(item => {
            if (item.id === id) {
                item.cantidad += 1;
            }
            setCarrito([...carrito])
        });
    }

    const removeProducto = (id) => {
        if (window.confirm("¿Quieres eliminar este producto?")) {
            carrito.forEach((item, index) => {
                if (item.id === id) {
                    item.cantidad = 1;
                    carrito.splice(index, 1);
                }
            })
            setCarrito([...carrito])
        }
    }

    return (
        <div className={show1}>
            <div className={show2}>
                <div className="carrito__close">
                    <AiOutlineCloseCircle name="x" className="close-icon" onClick={toogleFalse} />
                </div>
                <h2>Su carrito</h2>
                <div className="carrito__center">
                    {
                        carrito.length === 0 ? <h2>Carrito vacío.</h2> :
                            <div>
                                {
                                    carrito.map((producto) => (
                                        <div className="carrito__item" key={producto.id}>
                                            <img src={producto.image} alt="" />
                                            <div className="item__header">
                                                <h3>{producto.title}</h3>
                                                <p className="price">${producto.price * producto.cantidad}</p>
                                            </div>
                                            <div className="valores">
                                                <AiFillMinusCircle name="down-arrow" className="item-icon" onClick={() => resta(producto.id)} />
                                                <p className="cantidad">{producto.cantidad}</p>
                                                <AiFillPlusCircle name="up-arrow" className="item-icon" onClick={() => suma(producto.id)} />
                                            </div>
                                            <div className="remove__item" onClick={() => removeProducto(producto.id)}>
                                                <BsTrashFill name="trash" className="trash-icon" />
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                    }
                </div>
                <div className="carrito__footer">
                    <h3>Total: ${total}</h3>
                    <button className="btn">Pagar</button>
                </div>
            </div>
        </div>
    )
}
