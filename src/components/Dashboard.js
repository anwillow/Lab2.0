import React, { useEffect, useState } from 'react';
import axios from 'axios';
import StatsComponent from './StatsComponent';
import InfectionChart from './InfectionChart';
import './Dashboard.css';

const Dashboard = ({ darkMode }) => {
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
    <div className="dashboard">
      <div className="dashboard-content">
        <div className="chart-container">
          <InfectionChart />
        </div>
        <StatsComponent data={globalData} />
      </div>
    </div>
  );
};

export default Dashboard;