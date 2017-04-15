import React from 'react';
import { object, string } from 'prop-types';
import api from '../utils/api';

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

export default class Forecast extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      loading: true,
      error: null,
      forecast: null
    };
  }

  componentDidMount () {
    const { match: { params: { city } } } = this.props;
    api.getDailyForecast(city, 5)
      .then((data) => {
        console.log(data);
        this.setState(() => ({ loading: false }));
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
    const { loading, error } = this.state;
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
        </div>
      </div>
    );
  }
}


Forecast.propTypes = {
  match: object
};
