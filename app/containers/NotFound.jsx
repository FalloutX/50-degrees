import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <div className="page-container">
    <header className="header">
      <h1 className="page-heading">Page Not Found</h1>
    </header>
    <div className="page-content">
      <div className="link-homepage">
        <div>Go to <Link to="/">Home</Link> instead</div>
      </div>
    </div>
  </div>
);

export default NotFound;
