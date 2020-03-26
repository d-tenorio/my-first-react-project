import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'; // import the App component FROM the file called App(.js)

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App /> {/* Take the App component and render it inside strict mode */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
