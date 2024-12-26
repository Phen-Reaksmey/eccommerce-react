 import React from 'react';
import ReactDOM from 'react-dom/client';
//import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './App';
// import "./components/asset/css/normalize.css";
// import "./components/asset/css/swiper-bundle.min.css";
// import "./components/asset/css/vendor.css";
// import "./components/asset/js/SmoothScroll";
// import "./components/asset/js/modernizr";
// import "./components/asset/js/plugins";
// import "./components/asset/js/jquery.min.js";
// import "./components/asset/css/ajax-loader.gif";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
