import React, { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './MapComponent.css';
import markerImage from '../images/Marker.png';

const logoIcon = new L.Icon({
  iconUrl: markerImage,
  iconSize: [38, 38],
  iconAnchor: [19, 38],
  popupAnchor: [0, -38],
});

const MapComponent = () => {
  const covidData = [
    { location: { lat: 40.7128, lng: -74.0060 }, cases: 5000, city: "New York" },
    { location: { lat: 34.0522, lng: -118.2437 }, cases: 3000, city: "Los Angeles" },
    { location: { lat: 51.5074, lng: -0.1278 }, cases: 1500, city: "London" },
    { location: { lat: 55.7558, lng: 37.6173 }, cases: 2000, city: "Moscow" },
    { location: { lat: 56.9496, lng: 24.1052 }, cases: 800, city: "Riga" },
    { location: { lat: 48.8566, lng: 2.3522 }, cases: 2500, city: "Paris" },
    { location: { lat: 35.6762, lng: 139.6503 }, cases: 1000, city: "Tokyo" },
    { location: { lat: 22.3964, lng: 114.1095 }, cases: 1200, city: "Hong Kong" },
  ];

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
    
    covidData.forEach(data => {
        console.log(`Adding marker for ${data.city} at ${data.location.lat}, ${data.location.lng}`);
        const marker = L.marker(data.location, { icon: logoIcon }).addTo(map);
        marker.bindPopup(`City: ${data.city}<br>Cases: ${data.cases}`);  
    });

    return () => {
      map.remove();
    };
  }, []);

  return (
    <div id="map" style={{ height: '500px', width: '100%' }} />
  );
};

export default MapComponent;