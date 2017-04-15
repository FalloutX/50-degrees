import React from 'react';
import WeatherForm from '../components/WeatherForm';

const Home = () => (
  <div className="page-container">
    <header className="header">
      <h1 className="page-heading">
        50° Home
      </h1>
    </header>

    <div className="page-content row">
      <WeatherForm className="weather-form column is-centered is-centered-v"
        headerText="Enter a City or a State"/>
    </div>
  </div>
);


export default Home;
