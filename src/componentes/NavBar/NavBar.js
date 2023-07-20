import CartWidget from "../CartWidgets/CartWidget"

const NavBar = () => {
    return (
        <nav>
            <h3>Cloud Store</h3>
            <div>
                <button>Buzos</button>
                <button>Remeras</button>
                <button>Joggings</button>
                <button>Accesorios</button>
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar