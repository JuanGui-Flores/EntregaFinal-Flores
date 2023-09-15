import React, { Component } from 'react';

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    componentDidCatch(error, errorInfo) {
        // Puedes registrar el error o realizar cualquier otra acción personalizada aquí.
        console.error(error, errorInfo);
        this.setState({ hasError: true });
    }

    render() {
        if (this.state.hasError) {
            // Puedes renderizar un mensaje de error aquí.
            return <div>Algo salió mal.</div>;
        }
        return this.props.children;
    }
}

export default ErrorBoundary;