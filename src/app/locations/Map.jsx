"use client";
import { useEffect, useRef } from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import { Icon } from "leaflet";
import "leaflet/dist/leaflet.css";

export default function Map({
  locations,
  selectedLocation,
  initialCenter,
  onLocationSelect,
}) {
  const mapRef = useRef(null);

  useEffect(() => {
    if (selectedLocation && mapRef.current) {
      mapRef.current.setView(selectedLocation.coordinates, 16, {
        animate: true,
        duration: 1.5,
      });
    }
  }, [selectedLocation]);

  return (
    <MapContainer
      center={initialCenter}
      zoom={5}
      style={{ height: "400px", width: "100%" }}
      ref={mapRef}
      className="z-8"
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {locations.map((location) => (
        <Marker
          key={location.id}
          position={location.coordinates}
          icon={
            new Icon({
              iconUrl: "/restaurant-marker.png",
              iconSize: [32, 32],
              iconAnchor: [12, 41],
            })
          }
          eventHandlers={{
            click: () => onLocationSelect(location),
          }}
        />
      ))}
    </MapContainer>
  );
}
