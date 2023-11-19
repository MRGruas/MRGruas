import React, { useState } from 'react';
import { useMiContexto } from "../context/MiContexto";
import axios from 'axios';

function InformacionUsuario() {
  const {
    ubicacion,
    destino,
    actualizarUbicacion,
    calcularPrecio
  } = useMiContexto();

  const [nombre, setNombre] = useState("");
  const [direccion, setDireccion] = useState("");
  const [telefono, setTelefono] = useState("");
  const [mensaje, setMensaje] = useState(null);
  const [cargando, setCargando] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      setCargando(true);

      // Lógica para calcular el precio
      const precioCalculado = calcularPrecio(); // Ajusta según tu lógica real

      // Realiza la solicitud POST al backend con Axios
      const response = await axios.post("/api/guardar-informacion-usuario", {
        nombre,
        direccion,
        telefono,
        ubicacion,
        destino,
        precio: precioCalculado
      });

      if (response.status === 200) {
        setMensaje('Información del usuario guardada exitosamente');
        // Puedes realizar acciones adicionales después de guardar la información
      } else {
        setMensaje('Error al guardar la información del usuario');
      }
    } catch (error) {
      setMensaje('Error al procesar la solicitud');
      console.error("Error al procesar la solicitud:", error);
    } finally {
      setCargando(false);
    }
  };

  return (
    <div>
      <h1>Información del Usuario</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Nombre:
          <input
            type="text"
            value={nombre}
            onChange={(event) => setNombre(event.target.value)}
          />
        </label>
        <label>
          Dirección:
          <input
            type="text"
            value={direccion}
            onChange={(event) => setDireccion(event.target.value)}
          />
        </label>
        <label>
          Teléfono:
          <input
            type="text"
            value={telefono}
            onChange={(event) => setTelefono(event.target.value)}
          />
        </label>
        <button type="submit">Guardar</button>
      </form>
      
      <p>Ubicación: {ubicacion}</p>
      <p>Destino: {destino}</p>

      {cargando && <p>Cargando...</p>}
      {mensaje && <p style={{ color: 'green' }}>{mensaje}</p>}
    </div>
  );
}

export default InformacionUsuario;
