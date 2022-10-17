import { Link } from 'react-router-dom'

function Header() {
    return <nav className="navbar bg-light fixed-top">
        <div className="container-fluid">
            <a className="navbar-brand text-center" href="#">Deportes G83</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Menú</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Inicio</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/equipos">Equipos</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/deportes">Deportes</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/usuarios">Usuarios</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </nav>
}

export function Menu() {
    return <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>;
}

export default Header;