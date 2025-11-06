import { Grid } from "@mui/material";
import L from "leaflet";
import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

const icon = new L.Icon({
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

export default function Map() {
  const position = [35.683717016164536, 51.358901457726105];

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      sx={{
        width: "100vw",
        maxWidth: "100vw",
        backgroundColor: "#f8f9fa",
        py: { xs: 3, sm: 6 },
      }}
    >
      <MapContainer
        center={position}
        zoom={15}
        style={{
          width: "90%",
          maxWidth: "900px",
          height: "350px",
          overflow: "hidden",
          boxShadow: "0 6px 25px rgba(0,0,0,0.15)",
        }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={position} icon={icon}>
          <Popup>تهران</Popup>
        </Marker>
      </MapContainer>
    </Grid>
  );
}
