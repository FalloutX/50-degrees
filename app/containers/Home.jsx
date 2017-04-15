import React from 'react';

const Home = () => (
  <div className="page-container">
    <header className="header">
      <h1 className="page-heading">
        50° Home
      </h1>
    </header>

    <div className="page-content row">
      <form className="weather-form column is-centered is-centered-v">
        <h3 className="form-legend">Enter a City or a State</h3>

        <input type="text" placeholder="Eg: St.George, Utah"/>

        <button type="submit" className="button">Get Weather</button>
      </form>
    </div>
  </div>
);


export default Home;
