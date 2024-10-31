import React, { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './MapComponent.css';

const MapComponent = () => {
  useEffect(() => {
    const map = L.map('map', {
      center: [20, 0],
      zoom: 2,
      zoomControl: false,
    });

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    const zoomControl = L.control.zoom({
      position: 'topright',
      zoomInText: '+',
      zoomOutText: '−',
    });
    zoomControl.addTo(map);

    return () => {
      map.remove();
    };
  }, []);

  return (
    <div id="map" style={{ height: '500px', width: '100%' }} />
  );
};

export default MapComponent;