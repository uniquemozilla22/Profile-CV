import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "bootstrap/dist/css/bootstrap.css"
import { BrowserRouter } from 'react-router-dom';
import './Assets/css/bootstrap.css'
import './Assets/css/fontAwesome.css'
import './Assets/css/light-box.css'
import './Assets/js/vendor/bootstrap.min.js'
import './Assets/css/style.css'

ReactDOM.render(
  <BrowserRouter>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
