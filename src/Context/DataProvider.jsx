import { createContext, useEffect, useState } from "react";
import { data } from "../data";

export const DataContext = createContext();

export const DataProvider = (props) => {
    const [productos, setProductos] = useState([]);
    const [menu, setMenu] = useState(false);

    useEffect(() => {
        const producto = data;
        if(producto) {
            setProductos(producto);
        } else {
            setProductos([]);
        }
    }, []);

    const value = {
        producto: [productos],
        menu: [menu, setMenu]
    }

    return (
        <DataContext.Provider value={value}>
            {props.children}
        </DataContext.Provider>
    )
}