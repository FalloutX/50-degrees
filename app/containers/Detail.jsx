import React from 'react';
import { object } from 'prop-types';
import date from '../utils/date';


export default class Detail extends React.Component {
  render () {
    const { match: { params: { city } } } = this.props;
    const { weather, temp, humidity, dt } = this.props.location.state;
    return (
      <div className="page-container">
        <header className="header">
          <h1 className="page-heading">
            {city}
          </h1>
        </header>
        <div className="page-content">
          <div className="forecast-detail">
            <div className="forecast-icon">
              <img
                src={`/app/static/weather-icons/${weather[0].icon}.svg`}
                alt={`Icon for ${weather[0].description}`}/>
            </div>
            <div className="forecast-date">
              {date.format(dt * 1000)}
            </div>
            <div className="forecast-text">
              {weather[0].description}
            </div>
            <div className="forecast-text">
              {`Min Temp: ${Math.round(temp.min - 273, 2)}°C`}
            </div>
            <div className="forecast-text">
              {`Max Temp: ${Math.round(temp.max - 273, 2)}°C`}
            </div>
            <div className="forecast-text">
              {`Humidity: ${humidity}`}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Detail.propTypes = {
  match: object,
  location: object
};
