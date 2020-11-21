import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "bootstrap/dist/css/bootstrap.css"
import { BrowserRouter } from 'react-router-dom';
import './Assets/css/style.css'
import './Assets/css/bootstrap.css'
import './Assets/css/fontAwesome.css'
import './Assets/css/light-box.css'
ReactDOM.render(
  <BrowserRouter>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
);

reportWebVitals();
