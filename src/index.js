import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './Style/Global-Style.scss'
import { Provider } from 'react-redux';
import { Store } from './Store/Store.js';

const root = ReactDOM.createRoot(document.getElementById('wrapper'));
root.render(
  <Provider store={Store}>
    <App />
  </Provider>
);


