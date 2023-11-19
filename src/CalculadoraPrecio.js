import React, { useState } from 'react';

function CalculadoraPrecio() {
  const [distanciaRecorrida, setDistanciaRecorrida] = useState(null);
  const [precio, setPrecio] = useState(null);

  const handleCalcularPrecio = () => {
    // Lógica para calcular el precio basado en la distancia recorrida
    // ...

    // Ejemplo: Cálculo de precio ficticio
    const precioCalculado = distanciaRecorrida
      ? distanciaRecorrida * 2.5
      : null;
    setPrecio(precioCalculado);
  };

  return (
    <div>
      <h1>Calculadora de Precio</h1>
      <p>Distancia recorrida: {distanciaRecorrida} kilómetros</p>
      <button onClick={handleCalcularPrecio}>Calcular Precio</button>
      {precio && <p>El precio del viaje es de {precio} pesos.</p>}
    </div>
  );
}

export default CalculadoraPrecio;