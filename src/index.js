import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import logo from './img/logo.png';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
    <head><script>document.documentElement.classList.add('js')</script></head>
    <link rel="icon" src={logo} type="image/icon type"></link>
    <App />
    <script src="https://unpkg.com/taos@1.0.5/dist/taos.js"></script>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
