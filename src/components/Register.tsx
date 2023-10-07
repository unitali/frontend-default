import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import Input from './Input';
import './styles.css';

const labels = {
    title: "Registrar usuário",
    name: "Nome",
    username: "Email",
    password: "Senha",
    confirmPassword: "Confirmar senha",
    btnSubmit: "Registrar",
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
        <div className="registration-container">
            <h2 className="text-center p-5">{labels.title}</h2>
            <form onSubmit={handleSubmit} >
                <Input label={labels.name} name="name" onChange={handleInputChange} type="text" value={formData.name} required disabled={isLoading} />
                <Input label={labels.username} name="username" onChange={handleInputChange} type="email" value={formData.username} required disabled={isLoading} />
                <Input label={labels.password} name="password" onChange={handleInputChange} type="password" value={formData.password} required disabled={isLoading} />
                <Input label={labels.confirmPassword} name="confirmPassword" onChange={handleInputChange} type="password" value={formData.confirmPassword} required disabled={isLoading} />
                <div className='text-center '>
                    <button className="btn btn-primary mt-5 px-5 py-2" type="submit" disabled={!isFormValid}>
                        {isLoading ? (
                            <div className="spinner-grow spinner-grow-sm" role="status">
                                <span className="visually-hidden"></span>
                            </div>
                        ) : (labels.btnSubmit)}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Register;
