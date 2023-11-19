// src/context/MiContexto.js


import React, { createContext, useContext, useState } from 'react';

const MiContexto = createContext();

export const useMiContexto = () => {
    const context = useContext(MiContexto);
    if (!context) {
        throw new Error('useMiContexto debe ser utilizado dentro de un MiContextoProvider');
    }
    return context;
};

export const MiContextoProvider = ({ children }) => {
  const [ubicacion, setUbicacion] = useState("");
  const [destino, setDestino] = useState("");
  const [precio, setPrecio] = useState(null);

  const actualizarUbicacion = (nuevaUbicacion) => {
    setUbicacion(nuevaUbicacion);
  };

  const actualizarDestino = (nuevoDestino) => {
    setDestino(nuevoDestino);
  };

  const calcularPrecio = () => {
    // Lógica para calcular el precio basado en ubicación y destino
    // ...

    // Ejemplo: Cálculo de precio ficticio
    const precioCalculado = null; // Fixed: removed reference to undefined variable
    setPrecio(precioCalculado);
  };

  const contextValue = {
    ubicacion,
    destino,
    precio,
    actualizarUbicacion,
    actualizarDestino,
    calcularPrecio
  };

  return (
    <MiContexto.Provider value={contextValue}>{children}</MiContexto.Provider>
  );
};
