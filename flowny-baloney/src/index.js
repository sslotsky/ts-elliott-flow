import React from 'react';
import ReactDOM from 'react-dom';

const App = () => (
  <h1>Flowny Baloney</h1>
);

ReactDOM.render(<App />, document.getElementById('root'));

// Hot Module Replacement
if (module.hot) {
  module.hot.accept();
}
