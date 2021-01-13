import React, { Component } from 'react';

class ErrorBoundary extends Component {
  state = {
    error: false,
  };

  // MUST return an updated state object and MUST NOT trigger side effects
  static getDerivedStateFromError(error) {
    return { error };
  }

  // CAN trigger side effects; commonly used to log out any errors
  componentDidCatch(error, errorInfo) {
    console.log(error, errorInfo);
  }

  render() {
    if (this.state.error) {
      return <>
      <h1>Bullocks, we have a problem!</h1>
      <img 
      src="https://pa1.narvii.com/6171/d9cbe8f811580bdafdb4a1b8c7f3917b9539f1ef_hq.gif"
      width="100%"
      alt="Finnigan Explosion"
      />
      </>
    }

    return this.props.children;
  }
}

export default ErrorBoundary;