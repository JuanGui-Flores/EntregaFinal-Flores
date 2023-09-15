import React from 'react';

const ItemListContainer = ({ product }) => {
    // Verifica si 'product' está presente antes de intentar acceder a 'name'
    if (!product || !product.name) {
        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <p>No se proporcionó un producto válido.</p>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <h1 className="mt-5">{product.name}</h1>
                </div>
            </div>
        </div>
    );
};

export default ItemListContainer;
