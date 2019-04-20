import { Component } from 'react';

export default class RouterErrorBoundary extends Component {
  state = {
    error: false,
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { error };
  }

  componentDidCatch(error, info) {
    console.warn(error);
    console.warn(info);
  }

  render() {
    const { error } = this.state;
    const { children, renderErrorPage } = this.props;

    return error ? renderErrorPage(error) : children;
  }
}
