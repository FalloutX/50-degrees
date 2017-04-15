import React from 'react';
import { object } from 'prop-types';

export default class Forecast extends React.Component {
  render () {
    const { match: { params: { city } } } = this.props;
    console.log(this.props);
    return (
      <div> Forecast for {city}</div>
    );
  }
}


Forecast.propTypes = {
  match: object
};
