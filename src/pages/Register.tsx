import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import Input from '../components/input';
import Button from '../components/button';
import logotipo from "../assets/img/logotipo.png"


const labels = {
    title: "Registrar usuário",
    name: "Nome",
    username: "Email",
    password: "Senha",
    confirmPassword: "Confirmar senha",
    btnSubmit: "Registrar",
    btnBack: "Voltar",
}

type FormData = {
    name: string;
    username: string;
    password: string;
    confirmPassword: string;
}

const modifiedMessage = (message: string) => {
    return message.replace(/'([^']+)'/g, (_, fieldName: string) => {
        const label = labels[fieldName as keyof typeof labels];
        return label || fieldName;
    })
};

const Register: React.FC = () => {
    const [formData, setFormData] = useState({
        name: "",
        username: "",
        password: "",
        confirmPassword: ""
    });

    const [isFormValid, setIsFormValid] = useState(false);
    const [isLoading, setLoading] = useState(false);

    const handleInputChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ): void => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });

    };

    useEffect(() => {
        // Verifica se todos os campos obrigatórios estão preenchidos
        const requiredFields: (keyof FormData)[] = ['name', 'username', 'password', 'confirmPassword'];
        const isFormValid = requiredFields.every((fieldName) => formData[fieldName].trim() !== '');
        setIsFormValid(isFormValid);
    }, [formData]);

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        const apiUrl = `${process.env.REACT_APP_API_URL}/register`;

        if (apiUrl) {
            setLoading(true);
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const responseData = await response.json();
            setLoading(false);

            if (response.ok) {
                console.log(responseData);
                toast.success(responseData.message);
            } else {
                console.error(responseData);
                if (Array.isArray(responseData.message)) {
                    responseData.message.forEach((message: string) => {
                        toast.error(modifiedMessage(message));
                    });
                } else {
                    toast.error(modifiedMessage(responseData.message));
                }
            }
        } else {
            console.error('A variável REACT_APP_API_URL não está definida.');
        }
    };

    return (
        <div className="container text-center p-5 bg-light" style={{ maxWidth: 500 }}>
            <img className="w-50 align-self-center my-2" src={logotipo} alt='logotipo' />
            <h2 className="fs-3 p-4">{labels.title}</h2>
            <form onSubmit={handleSubmit} >
                <Input label={labels.name} name="name" onChange={handleInputChange} type="text" value={formData.name} required disabled={isLoading} />
                <Input label={labels.username} name="username" onChange={handleInputChange} type="email" value={formData.username} required disabled={isLoading} />
                <Input label={labels.password} name="password" onChange={handleInputChange} type="password" value={formData.password} required disabled={isLoading} showPassword />
                <Input label={labels.confirmPassword} name="confirmPassword" onChange={handleInputChange} type="password" value={formData.confirmPassword} required disabled={isLoading} showPassword />
                <div className="text-center p-4">
                    <Button className="btn-primary" label={labels.btnSubmit} loading={isLoading} disabled={!isFormValid} />
                    <Button className="btn-outline-primary" label={labels.btnBack} loading={isLoading} toPath='/' />
                </div>
            </form>
        </div>
    );
};

export default Register;
