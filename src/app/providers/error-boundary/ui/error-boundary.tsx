import React, {
    Component, ErrorInfo, ReactNode, Suspense,
} from 'react';
import ErrorPage from 'widgets/error-page';

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends React.Component <Props, State> {
    constructor(props:Props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error:Error) {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }

    componentDidCatch(error:Error, errorInfo:ErrorInfo) {
        // You can also log the error to an error reporting service
        console.log(error, errorInfo);
    }

    render() {
        const { hasError } = this.state;
        const { children } = this.props;

        if (hasError) {
        // You can render any custom fallback UI
            return (
                <Suspense fallback="">
                    <ErrorPage />
                </Suspense>
            );
        }

        return children;
    }
}

export default ErrorBoundary;
