import React from 'react';
import { Route, Routes } from "react-router-dom";
import { Inicio } from './Inicio/Inicio';
import { Productos } from './Productos/Productos';

export const Paginas = () => {
  return (
    <section>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/productos" element={<Productos />} />
      </Routes>
    </section>
  )
}
