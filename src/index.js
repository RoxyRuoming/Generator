import React from 'react';
import ReactDOM from 'react-dom/client';

// import Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// import Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();