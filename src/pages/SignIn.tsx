import { Link } from "react-router-dom";
import { Input } from '../components/input';
import { Button } from '../components/button';
import logotipo from "../assets/img/logotipo.png"
import React, { useState, useEffect, FormEvent, useContext } from 'react';
import { routesWeb } from '../services/routes';
import { AuthContext } from '../contexts/AuthContext';

const labels = {
    title: "Login",
    username: "E-mail",
    password: "Senha",
    btnSubmit: "Entrar",
    btnBack: "Voltar",
    linkCreateSignUp: "Faça aqui seu cadastro",
    linkRecoverPassword: "Esqueceu sua senha?",
}

type FormData = {
    username: string;
    password: string;
}

export function SignIn() {
    const [formData, setFormData] = useState({
        username: "",
        password: ""
    });

    const [isFormValid, setIsFormValid] = useState(false);
    const [isLoading, setLoading] = useState(false);
    const { signIn } = useContext(AuthContext)

    const handleInputChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ): void => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    useEffect(() => {
        // Verifica se todos os campos obrigatórios estão preenchidos
        const requiredFields: (keyof FormData)[] = ['username', 'password'];
        const isFormValid = requiredFields.every((fieldName) => formData[fieldName].trim() !== '');
        setIsFormValid(isFormValid);
    }, [formData]);

    async function handleSubmit(e: FormEvent) {
        e.preventDefault();
        setLoading(true)
        await signIn(formData)
        setLoading(false)
    }

    return (
        <div className="container text-center p-5 bg-light"
            id="login-container"
            style={{ maxWidth: 500 }}>
            <img
                id="img-logo"
                className="w-50 align-self-center my-2"
                src={logotipo} alt='logotipo' />
            <h2
                id="title"
                className="fs-3 p-4">{labels.title}

            </h2>
            <form
                id="form"
                onSubmit={handleSubmit} >
                <Input
                    id="login-username"
                    label={labels.username}
                    name="username"
                    onChange={handleInputChange}
                    type="email"
                    value={formData.username}
                    required
                    disabled={isLoading} />
                <Input
                    id="login-password"
                    label={labels.password}
                    name="password"
                    onChange={handleInputChange}
                    type="password"
                    value={formData.password}
                    required
                    disabled={isLoading} />
                <div className="fw-light d-flex justify-content-around">
                    <Link className="link-opacity-75-hover link-offset-2 link-underline link-underline-opacity-0"
                        id="link-recover-password"
                        to={routesWeb.signUp}>
                        {labels.linkRecoverPassword}
                    </Link>
                    <Link className="link-opacity-75-hover link-offset-2 link-underline link-underline-opacity-0"
                        id="link-signup"
                        to={routesWeb.signUp}>
                        {labels.linkCreateSignUp}
                    </Link>
                </div>
                <div className="text-center pt-4">
                    <Button className={"btn-primary"}
                        id="btn-submit"
                        loading={isLoading}
                        disabled={!isFormValid} >
                        {labels.btnSubmit}
                    </Button>
                    <Button className={"btn-outline-primary"}
                        id="btn-back"
                        loading={isLoading}
                        toPath={routesWeb.home} >
                        {labels.btnBack}
                    </Button>
                </div>
            </form>
        </div>
    )
}
