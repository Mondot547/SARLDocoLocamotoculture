import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './Map.scss';

// Importer l'icône personnalisée
import customIcon from '../../img/icon-pointer-map.png';

// Définir une icône personnalisée avec les dimensions et l'image de votre choix
const icon = L.icon({
    iconUrl: customIcon,
    iconSize: [40, 40],
    iconAnchor: [20, 40],
});

const Map = () => {
    return (
        <MapContainer className="map" center={[49.89475136004356, 2.2813296681497013]} zoom={50}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution="Map data &copy; <a href='https://www.openstreetmap.org/'>OpenStreetMap</a> contributors"
            />
            <Marker position={[49.89467, 2.28139]} icon={icon}>
                <Popup>SARL Doco Locamotoculture</Popup>
            </Marker>
        </MapContainer>
    );
};

export default Map;
