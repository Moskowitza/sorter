import React from 'react';
import PropTypes from 'prop-types';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    // Display fallback UI
    // logErrorToMyService(error, info);

    this.setState({ hasError: true });
    // You can also log the error to an error reporting service
  }

  render() {
    const { hasError } = this.state;
    const { children } = this.props;
    if (hasError) {
      // You can render any custom fallback UI
      return <h1>Something went wrong.</h1>;
    }
    return children;
  }
}
ErrorBoundary.defaultProps = {
  children: React.createElement('div'),
};
ErrorBoundary.propTypes = {
  children: PropTypes.node,
};
export default ErrorBoundary;
