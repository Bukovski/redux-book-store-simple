import React from 'react';
import './loading-indicator.css';


const LoadingIndicator = () => {
  return <div className="cssload-loader">
    <div className="cssload-inner cssload-one" />
    <div className="cssload-inner cssload-two" />
    <div className="cssload-inner cssload-three" />
  </div>;
};


export default LoadingIndicator;