import React from 'react';
import './error-indicator.css';


const ErrorIndicator = ({ title = "game over", text = "Please reload page" }) => {
  return <div className="error-indicator">
    <h1 className="error-indicator__title">{ title }</h1>
    <span className="error-indicator__text">{ text }</span>
  </div>
};


export default ErrorIndicator;
