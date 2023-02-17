import { createContext, useEffect, useState } from "react";
import { data } from "../data";

export const DataContext = createContext();

export const DataProvider = (props) => {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        const producto = data;
        if(producto) {
            setProductos(producto);
        } else {
            setProductos([]);
        }
    }, []);

    const value = {
        producto: [productos]
    }

    return (
        <DataContext.Provider value={value}>
            {props.children}
        </DataContext.Provider>
    )
}