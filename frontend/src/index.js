import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css'
import App from './App'; // Main App component

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')  // Mounting the App component to the root div in index.html
);
