import React, { Component } from 'react';
import { ErrorIndicator } from 'components/indicators';
import PropTypes from 'prop-types';


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
