import React from 'react';
import './StatsComponent.css';

const StatsComponent = ({ data }) => {
    return (
        <div className="stats-container">
            <h2 className="stats-title">Global Statistics</h2>
            <div className="stats-card">
                <h3>Total Cases:</h3>
                <p className="stats-value">{data.cases}</p>
            </div>
            <div className="stats-card">
                <h3>Total Deaths:</h3>
                <p className="stats-value">{data.deaths}</p>
            </div>
            <div className="stats-card">
                <h3>Total Recovered:</h3>
                <p className="stats-value">{data.recovered}</p>
            </div>
        </div>
    );
};

export default StatsComponent;