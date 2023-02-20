import React, { useContext } from "react";
import "./Carrito.css";
import { DataContext } from "../../Context/DataProvider";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { BsFillArrowUpCircleFill, BsFillArrowDownCircleFill, BsTrashFill } from "react-icons/bs"

export const Carrito = () => {
    const value = useContext(DataContext);
    const [menu, setMenu] = value.menu;

    const toogleFalse = () => {
        setMenu(false);
    }

    const show1 = menu ? "carritos show" : "carritos";
    const show2 = menu ? "carrito show" : "carrito";

    return (
        <div className={show1}>
            <div className={show2}>
                <div className="carrito__close">
                    <AiOutlineCloseCircle name="x" className="close-icon" onClick={toogleFalse} />
                </div>
                <h2>Su carrito</h2>
                <div className="carrito__center">
                    <div className="carrito__item">
                        <img src="" alt="" />
                        <div>
                            <h3>Title</h3>
                            <p className="price">$204</p>
                        </div>
                        <div>
                            <BsFillArrowUpCircleFill name="up-arrow" className="item-icon" />
                            <p className="cantidad">1</p>
                            <BsFillArrowDownCircleFill name="down-arrow" className="item-icon" />
                        </div>
                        <div className="remove__item">
                            <BsTrashFill name="trash" className="trash-icon" />
                        </div>
                    </div>
                </div>
                <div className="carrito__footer">
                    <h3>Total: $63746</h3>
                    <button className="btn">Payment</button>
                </div>
            </div>
        </div>
    )
}
