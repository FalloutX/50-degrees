import React from 'react';
import { string, bool } from 'prop-types';

export default class WeatherForm extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      place: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit (event) {
    event.preventDefault();
    console.log(this.state.place);
  }

  handleChange (event) {
    const value = event.target.value;
    this.setState(() => ({
      place: value
    }));
  }

  render () {
    const { headerText, className, isSmall } = this.props;
    return (
      <form className={className} onSubmit={this.handleSubmit}>
        { headerText && <h3 className="form-legend">{headerText}</h3>}

        <input type="text"
          placeholder="Eg: St.George, Utah"
          onChange={this.handleChange}
          value={this.state.place}
          />

        <button type="submit" className={`button ${isSmall ? 'is-small' : null}`}>
          Get Weather
        </button>
      </form>
    );
  }
}

WeatherForm.propTypes = {
  className: string,
  isSmall: bool,
  headerText: string
};

WeatherForm.defaultProps = {
  isSmall: false
};
