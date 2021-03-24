import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './components/Routes';
import Footer from './components/Footer'
import reportWebVitals from './reportWebVitals';
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" />



ReactDOM.render(
  <React.StrictMode>
    <Routes />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
