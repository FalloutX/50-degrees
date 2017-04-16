import React from 'react';

export default class Detail extends React.Component {
  render () {
    return (
      <div>
        <h1>Forecast Detail Page</h1>
        <pre><code>{false && JSON.stringify(this.props, null, 2)}</code></pre>
      </div>
    );
  }
}
