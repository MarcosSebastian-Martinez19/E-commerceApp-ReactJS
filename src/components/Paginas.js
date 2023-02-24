import React from 'react';
import { Route, Routes } from "react-router-dom";
import { Inicio } from './Inicio/Inicio';
import { Productos } from './Productos/Productos';
import { ProductoDetalles } from './Productos/ProductoDetales/ProductoDetalles';

export const Paginas = () => {
  return (
    <section>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/producto/:id" element={<ProductoDetalles />} />
      </Routes>
    </section>
  )
}
