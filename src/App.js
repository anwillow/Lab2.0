import React from 'react';
import Dashboard from './components/Dashboard';
import './App.css';

const App = () => {
  return (
    <div>
      <h1 className="app-title">COVID-19 Dashboard</h1>
      <Dashboard />
    </div>
  );
};

export default App;