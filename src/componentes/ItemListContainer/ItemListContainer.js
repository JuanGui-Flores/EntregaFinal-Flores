import React from "react";

const ItemListContainer = ({ product }) => {
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