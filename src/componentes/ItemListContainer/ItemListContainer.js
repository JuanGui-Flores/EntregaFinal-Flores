import React from 'react';
import ItemListContainer from './ItemListContainer';
import ErrorBoundary from './ErrorBoundary';

const App = () => {
    const product = { name: 'Nombre del producto' };

    return (
        <div className="App">
            <ErrorBoundary>
                <ItemListContainer product={product} />
            </ErrorBoundary>
        </div>
    );
};

export default App;
