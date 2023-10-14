import React from "react"
import { Button } from "../button"
import { Link } from "react-router-dom";
import logotipo from "../../assets/img/logotipo.png"
import { routesWeb } from "../../services/routes";

const NavbarPublic: React.FC = () => {
    return (
        <div className="container">
            <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
                <div className="col-md-3 mb-2 mb-md-0">
                    <a href="/" className="d-inline-flex link-body-emphasis text-decoration-none">
                        <img id="img-logo" className="w-75 m-auto" src={logotipo} alt="logo" />
                    </a>
                </div>
                <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                    <li><Link id="nav-home" to={routesWeb.home} className="nav-link px-2">Home</Link></li>
                    <li><Link id="nav-our-services" to="#our-services" className="nav-link px-2">Nossos Serviços</Link></li>
                    <li><Link id="nav-our-models" to="#our-models" className="nav-link px-2">Alguns Modelos</Link></li>
                    <li><Link id="nav-plans" to="#plans" className="nav-link px-2">Planos</Link></li>
                    <li><Link id="nav-contact" to="#contact" className="nav-link px-2">Contato</Link></li>
                </ul>
                <div className="col-md-3 text-end">
                    <Button id="btn-login" className="btn-outline-primary" toPath={routesWeb.signIn} >Login</Button>
                    <Button id="btn-register" className="btn-outline-primary" toPath={routesWeb.signUp} >Cadastro</Button>
                </div>
            </header>
        </div>
    )
}

export default NavbarPublic;