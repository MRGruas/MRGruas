import 'react-map-gl-geocoder/dist/mapbox-gl-geocoder.css';
import { App } from './App.1';


export const MAPBOX_TOKEN = 'TU_TOKEN_DE_ACCESO_A_MAPBOX';

// src/App.js


import React, { useState } from 'react';
import MapGL, { GeolocateControl, Marker } from 'react-map-gl';
import Geocoder from 'react-map-gl-geocoder';
import CalculadoraDistancia from './components/CalculadoraDistancia';
import CalculadoraPrecio from './components/CalculadoraPrecio';
import InformacionUsuario from './components/InformacionUsuario';
import InformacionVehiculo from './components/InformacionVehiculo';
import { MAPBOX_TOKEN } from './App';

export function App() {
    const [viewport, setViewport] = useState({
        width: '100%',
        height: 400,
        latitude: 37.7577,
        longitude: -122.4376,
        zoom: 10,
    });

    const [ubicacion, setUbicacion] = useState('');
    const [destino, setDestino] = useState('');

    const handleGeocoderResult = (event) => {
        const { result } = event;
        const { geometry } = result;

        const { lat, lng } = geometry.location;

        if (ubicacion === '') {
            setUbicacion(`${lat}, ${lng}`);
        } else {
            setDestino(`${lat}, ${lng}`);
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        // Separar las coordenadas de ubicación y destino en latitud y longitud
        const [ubicacionLat, ubicacionLng] = ubicacion.split(',');
        const [destinoLat, destinoLng] = destino.split(',');

        // Convertir las coordenadas a números flotantes
        const ubicacionLatFloat = parseFloat(ubicacionLat.trim());
        const ubicacionLngFloat = parseFloat(ubicacionLng.trim());
        const destinoLatFloat = parseFloat(destinoLat.trim());
        const destinoLngFloat = parseFloat(destinoLng.trim());

        // Calcular la distancia utilizando la fórmula del haversine
        const R = 6371; // Radio de la Tierra en kilómetros
        const lat1 = ubicacionLatFloat * (Math.PI / 180);
        const lon1 = ubicacionLngFloat * (Math.PI / 180);
        const lat2 = destinoLatFloat * (Math.PI / 180);
        const lon2 = destinoLngFloat * (Math.PI / 180);

        const dLat = lat2 - lat1;
        const dLon = lon2 - lon1;

        const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLon / 2) * Math.sin(dLon / 2);

        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

        const distancia = R * c;

        console.log(`La distancia recorrida es de ${distancia} kilómetros.`);
    };

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



export default App;
