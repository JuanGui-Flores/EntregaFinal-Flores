import React from "react";
import CartWidget from "../CartWidgets/CartWidget";

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <a className="navbar-brand" href="/">
                    Cloud Store
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item">
                            <button className="nav-link btn btn-link" type="button">
                                Buzos
                            </button>
                        </li>
                        <li className="nav-item">
                            <button className="nav-link btn btn-link" type="button">
                                Remeras
                            </button>
                        </li>
                        <li className="nav-item">
                            <button className="nav-link btn btn-link" type="button">
                                Joggings
                            </button>
                        </li>
                        <li className="nav-item">
                            <button className="nav-link btn btn-link" type="button">
                                Accesorios
                            </button>
                        </li>
                    </ul>
                </div>
                <CartWidget />
            </div>
        </nav>
    );
};

export default NavBar;
