import React from 'react';
import { object, string } from 'prop-types';
import api from '../utils/api';
import date from '../utils/date';


const Loading = () => (
  <div className="loader">
    <div className="line" />
    <div className="line" />
    <div className="line" />
    <div className="line" />
  </div>
);

const ErrorBox = ({ message }) => (
  <div className="error-box">
    {message}
  </div>
);

ErrorBox.propTypes = {
  message: string
};
const ForecastItem = ({ forecast }) => {
  const { dt, weather } = forecast;
  return (
    <div className="forecast-item">
      <div className="forecast-icon">
        <img
          src={`/app/static/weather-icons/${weather[0].icon}.svg`}
          alt={`Icon for ${weather[0].description}`}/>
      </div>
      <div className="forecast-desc">
        {weather[0].description}
      </div>
      <div className="forecast-date">
        {date.format(dt * 1000)}
      </div>
    </div>
  );
};

ForecastItem.propTypes = {
  forecast: object
};


export default class Forecast extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      loading: true,
      error: null,
      forecasts: null
    };
  }

  componentDidMount () {
    const { match: { params: { city } } } = this.props;
    api.getDailyForecast(city, 5)
      .then((data) => {
        console.log(data.list);
        this.setState(() => ({
          loading: false,
          forecasts: data.list
        }));
      })
      .catch((err) => {
        const { message } = err.response.data;
        this.setState(() => ({
          loading: false,
          error: message
        }));
      });
  }
  render () {
    const { match: { params: { city } } } = this.props;
    const { loading, forecasts, error } = this.state;
    return (
      <div className="page-container">
        <header className="header">
          <h1 className="page-heading">
            Forecast for <span className="place-name">{city}</span>
          </h1>
        </header>
        <div className="page-content">
          {loading && <Loading />}
          {error && <ErrorBox message={error}/>}

          <div className="forecasts-container">
            {forecasts && forecasts.map(f => <ForecastItem forecast={f} key={f.dt}/>)}
          </div>
        </div>
      </div>
    );
  }
}


Forecast.propTypes = {
  match: object
};
