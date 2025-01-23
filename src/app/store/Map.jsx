"use client";

import { useEffect, useRef } from "react";
import Map from "ol/Map";
import View from "ol/View";
import TileLayer from "ol/layer/Tile";
import OSM from "ol/source/OSM";
import { fromLonLat } from "ol/proj";
import { Feature } from "ol";
import { Point } from "ol/geom";
import { Vector as VectorLayer } from "ol/layer";
import { Vector as VectorSource } from "ol/source";
import { Style, Icon } from "ol/style";
import "ol/ol.css";

const MapComponent = ({
  locations,
  selectedLocation,
  initialCenter,
  onLocationSelect,
}) => {
  const mapRef = useRef();
  const mapInstance = useRef(null);

  useEffect(() => {
    if (!mapInstance.current) {
      // Membuat vector source dan layer untuk markers
      const vectorSource = new VectorSource();
      const vectorLayer = new VectorLayer({
        source: vectorSource,
      });

      // Menambahkan markers untuk setiap lokasi
      locations.forEach((location) => {
        const marker = new Feature({
          geometry: new Point(fromLonLat(location.coordinates)),
          properties: location,
        });

        // Style untuk marker
        marker.setStyle(
          new Style({
            image: new Icon({
              src: "/restaurant-marker.png", // Sesuaikan dengan path icon Anda
              scale: 0.5,
              anchor: [0.5, 1],
            }),
          })
        );

        vectorSource.addFeature(marker);
      });

      // Inisialisasi map
      const map = new Map({
        target: mapRef.current,
        layers: [
          new TileLayer({
            source: new OSM(),
          }),
          vectorLayer,
        ],
        view: new View({
          center: fromLonLat(initialCenter),
          zoom: 12,
        }),
      });

      // Handle click events
      map.on("click", (event) => {
        const feature = map.forEachFeatureAtPixel(
          event.pixel,
          (feature) => feature
        );
        if (feature) {
          const locationData = feature.get("properties");
          onLocationSelect(locationData);
        }
      });

      // Ubah cursor saat hover di atas marker
      map.on("pointermove", (event) => {
        const pixel = map.getEventPixel(event.originalEvent);
        const hit = map.hasFeatureAtPixel(pixel);
        map.getTarget().style.cursor = hit ? "pointer" : "";
      });

      mapInstance.current = map;
    }

    return () => {
      if (mapInstance.current) {
        mapInstance.current.setTarget(undefined);
        mapInstance.current = null;
      }
    };
  }, []);

  // Update view ketika selectedLocation berubah
  useEffect(() => {
    if (mapInstance.current && selectedLocation) {
      mapInstance.current.getView().animate({
        center: fromLonLat(selectedLocation.coordinates),
        zoom: 15,
        duration: 1000,
      });
    }
  }, [selectedLocation]);

  return (
    <div
      className="rounded-lg"
      ref={mapRef}
      style={{
        height: "400px",
        width: "100%",
        position: "relative",
      }}
    />
  );
};

export default MapComponent;
