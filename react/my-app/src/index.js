import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import Hello from './hello';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigationbar from './navbar';
import "./simple.css";
import Cardview from './card/card';
import Carouselcmp from './carousel/carousel';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navigationbar/>
    <Cardview/>
    <Hello/>
    <Carouselcmp/>

    {/* <App /> */}

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
