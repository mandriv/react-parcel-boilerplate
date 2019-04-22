// @flow
import * as React from 'react';

import DefaultError from './Error';

type Props = {|
  children: React.Node,
  renderErrorPage: (error: Error | boolean) => React.Node
|};

type State = {|
  error: boolean | Error
|};

export default class RouterErrorBoundary extends React.Component<Props, State> {
  state = {
    error: false,
  }

  static defaultProps = {
    renderErrorPage: (): React.Element<any> => <DefaultError />,
  }

  static getDerivedStateFromError(error: Error): State {
    // Update state so the next render will show the fallback UI.
    return { error };
  }

  componentDidCatch(error: Error, info: Object) {
    console.warn(error);
    console.warn(info);
  }

  render() {
    const { error } = this.state;
    const { children, renderErrorPage } = this.props;

    return error ? renderErrorPage(error) : children;
  }
}
