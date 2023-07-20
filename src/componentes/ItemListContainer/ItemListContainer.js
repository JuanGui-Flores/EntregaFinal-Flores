import React from "react";

const ItemListContainer = ({ greeting }) => {
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <h1 className="mt-5">{greeting}</h1>
                </div>
            </div>
        </div>
    );
};

export default ItemListContainer;
