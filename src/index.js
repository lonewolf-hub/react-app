import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //to eliminate the double console log you can discard the use of strictmode
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

