import React from 'react';
import PropTypes from 'prop-types';

import './error-indicator.style.css';


const ErrorIndicator = ({ title = "game over", text = "Please reload page" }) => {
  return <div className="error-indicator">
    <h1 className="error-indicator__title">{ title }</h1>
    <span className="error-indicator__text">{ text }</span>
  </div>
};


ErrorIndicator.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string
};


export default ErrorIndicator;
