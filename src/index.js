import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <App name="Arslan" age= {21} />,   //For number we use {}
  document.getElementById('root')
);


/*
ReactDOM.render(
  React.createElement('div',null,"Hello Pakistan"),
  document.getElementById('root')
  //For Span Inside <div>:
  React.createElement('div',null,React.createElement('span',null,"Span Inside Div"))
);
*/

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
