import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import ErrorReproducer from './ErrorReproducer';

// Swap ErrorReproducer for App to intentionally surface error on load
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ErrorReproducer />
  </React.StrictMode>
);
