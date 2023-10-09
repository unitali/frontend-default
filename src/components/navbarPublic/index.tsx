import React from "react"
import Button from "../button"
import { Link } from "react-router-dom";
import logotipo from "../../assets/img/logotipo.png"


interface NavbarProps {
    text?: string;
}

const NavbarPublic: React.FC<NavbarProps> = ({ ...props }) => {
    return (

        <div className="container">
            <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
                <div className="col-md-3 mb-2 mb-md-0">
                    <a href="/" className="d-inline-flex link-body-emphasis text-decoration-none">
                        <img src={logotipo} alt="logo" width="200" />
                    </a>
                </div>
                <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                    <li><Link to="/" className="nav-link px-2">Home</Link></li>
                    <li><Link to="#our-services" className="nav-link px-2">Nossos Serviços</Link></li>
                    <li><Link to="#our-models" className="nav-link px-2">Alguns Modelos</Link></li>
                    <li><Link to="#plans" className="nav-link px-2">Planos</Link></li>
                    <li><Link to="#" className="nav-link px-2">Contato</Link></li>
                </ul>

                <div className="col-md-3 text-end">
                    <Button className="btn-outline-primary" label="Login" toPath="/login" />
                    <Button className="btn-outline-primary" label="Cadastro" toPath="/register" />
                </div>
            </header>
        </div>
    )
}

export default NavbarPublic;