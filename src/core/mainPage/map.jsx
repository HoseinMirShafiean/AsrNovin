
import { Grid } from '@mui/material';
import L from 'leaflet';
import React from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';


const icon = new L.Icon({
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
});



export default function Map() {
    const position = [35.683717016164536,51.358901457726105];


    return (
        <Grid className='fixMap'>
            <MapContainer center={position} zoom={15} style={{ height: "300px", width: "700px" }}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                <Marker position={position} icon={icon}>
                    <Popup>
                        تهران
                    </Popup>
                </Marker>
            </MapContainer>
        </Grid>
    )
}