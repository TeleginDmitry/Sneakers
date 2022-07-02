import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './Style/Global-Style.scss'

const root = ReactDOM.createRoot(document.getElementById('wrapper'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


