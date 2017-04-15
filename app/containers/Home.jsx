import React from 'react';
import { string } from 'prop-types';

const WeatherForm = ({ className }) => (
  <form className={className}>
    <h3 className="form-legend">Enter a City or a State</h3>

    <input type="text" placeholder="Eg: St.George, Utah"/>

    <button type="submit" className="button">Get Weather</button>
  </form>
);

WeatherForm.propTypes = {
  className: string
};


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
