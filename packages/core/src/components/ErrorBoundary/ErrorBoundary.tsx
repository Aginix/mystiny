import React, { ComponentClass, Component, SFC, ErrorInfo } from 'react';

type Props = {
  slackChannel?: string;
  onError?: (error: Error, errorInfo: string) => null;
};

type State = {
  error?: Error;
  errorInfo?: ErrorInfo;
};

const ErrorBoundary: ComponentClass<Props, State> = class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      error: undefined,
      errorInfo: undefined,
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // eslint-disable-next-line no-console
    console.error(`ErrorBoundary, error: ${error}, info: ${errorInfo}`);
    this.setState({ error, errorInfo });
  }

  render() {
    const { slackChannel } = this.props;
    const { error, errorInfo } = this.state;

    if (!errorInfo) {
      return this.props.children;
    }

    return <Error error={error} slackChannel={slackChannel} />;
  }
};

export default ErrorBoundary;

type EProps = {
  error?: Error;
  slackChannel?: string;
};

const Error: SFC<EProps> = ({ slackChannel }) => {
  return <div>Something went wrong here. {slackChannel && <>Please contact {slackChannel} for help.</>}</div>;
};
