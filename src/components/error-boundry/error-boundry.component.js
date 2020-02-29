import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ErrorIndicator from 'components/indicator-error/error-indicator.component';


export default class ErrorBoundry extends Component {
  state = {
    hasError: false
  };
  
  static propTypes = {
    children: PropTypes.node
  };
  
  componentDidCatch() {
    this.setState({ hasError: true });
  }
  
  render() {
    if (this.state.hasError) {
      return <ErrorIndicator />;
    }
    
    return this.props.children;
  }
}
