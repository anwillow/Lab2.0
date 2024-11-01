import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Dashboard from './components/Dashboard';
import MapComponent from './components/MapComponent';
import './App.css';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [countriesData, setCountriesData] = useState([]);

  useEffect(() => {
    const savedTheme = localStorage.getItem('darkMode') === 'true';
    setDarkMode(savedTheme);
    const fetchData = async () => {
      const countries = await axios.get('https://disease.sh/v3/covid-19/countries');
      setCountriesData(countries.data);
    };
    fetchData();
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    localStorage.setItem('darkMode', !darkMode);
  };

  return (
    <div className={darkMode ? 'App dark-mode' : 'App'}>
      <header className="hud">
        <a href="#top">Main</a>
        <a href="#statistics">Statistics</a>
        <a href="#map">Map</a>
      </header>
      <header className="top">
        <h1 className="app-title">COVID-19 Dashboard</h1>
      </header>
      <section id="statistics">
        <Dashboard darkMode={darkMode} />
      </section>
      <section id="map">
        <div className="map-container">
          <MapComponent countries={countriesData} darkMode={darkMode} />
        </div>
      </section>
      <button className="toggle-button" onClick={toggleDarkMode}>
        {darkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
    </div>
  );
};

export default App;