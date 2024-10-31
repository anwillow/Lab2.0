import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MapComponent from './MapComponent';
import StatsComponent from './StatsComponent';

const Dashboard = () => {
  const [globalData, setGlobalData] = useState({});
  const [countriesData, setCountriesData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const global = await axios.get('https://disease.sh/v3/covid-19/all');
      setGlobalData(global.data);
      const countries = await axios.get('https://disease.sh/v3/covid-19/countries');
      setCountriesData(countries.data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <StatsComponent data={globalData} />
      <MapComponent countries={countriesData} />
    </div>
  );
};

export default Dashboard;