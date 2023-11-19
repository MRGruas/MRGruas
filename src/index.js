import React, { useState } from 'react';
import ReactDOM from 'react-dom';  // Agrega esta línea
import MapGL, { GeolocateControl, Marker } from 'react-map-gl';
import Geocoder from 'react-map-gl-geocoder';
import CalculadoraDistancia from './components/CalculadoraDistancia';
import CalculadoraPrecio from './components/CalculadoraPrecio';
import InformacionUsuario from './components/InformacionUsuario';
import InformacionVehiculo from './components/InformacionVehiculo';
import { MiContextoProvider } from 'MiContextoProvider'; // Ajusta la ruta según tu estructura
import { MAPBOX_TOKEN } from './App';

function App() {
    const [viewport, setViewport] = useState({
        width: '100%',
        height: 400,
        latitude: 37.7577,
        longitude: -122.4376,
        zoom: 10,
    });

    // Resto del código...

    return (
        <div>
            <h1>Mi Aplicación</h1>
            <CalculadoraDistancia />
            <CalculadoraPrecio />
            <InformacionUsuario />
            <InformacionVehiculo />
            {/* <MapaInteractivo /> */}

            <h1>Formulario</h1>
            <form onSubmit={handleSubmit}>
                {/* Resto de los campos del formulario */}
                <label>
                    Ubicación:
                    <input
                        type="text"
                        value={ubicacion}
                        onChange={(event) => setUbicacion(event.target.value)} />
                </label>
                <label>
                    Destino:
                    <input
                        type="text"
                        value={destino}
                        onChange={(event) => setDestino(event.target.value)} />
                </label>
                <button type="submit">Enviar</button>
            </form>

            <h1>Mapa interactivo</h1>
            <MapGL
                {...viewport}
                mapboxApiAccessToken={MAPBOX_TOKEN}
                onViewportChange={setViewport}
            >
                <GeolocateControl
                    positionOptions={{ enableHighAccuracy: true }}
                    trackUserLocation={true} />
                <Marker
                    latitude={viewport.latitude}
                    longitude={viewport.longitude}
                    offsetLeft={-20}
                    offsetTop={-10}
                >
                    <div>Ubicación</div>
                </Marker>
                <Geocoder
                    mapboxApiAccessToken={MAPBOX_TOKEN}
                    onViewportChange={setViewport}
                    onResult={handleGeocoderResult} />
            </MapGL>
        </div>

    );
}

ReactDOM.render(
  <React.StrictMode>
    {/* Envuelve la aplicación con el proveedor del contexto */}
    <MiContextoProvider>
      <App />
    </MiContextoProvider>
  </React.StrictMode>,
  document.getElementById("root"))
