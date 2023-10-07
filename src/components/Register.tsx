import React, { useState } from 'react';
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

const RegistrationForm: React.FC = () => {
    const [formData, setFormData] = useState({
        name: "",
        username: "",
        password: "",
        confirmPassword: ""
    });

    const [errors, setErrors] = useState<{ [key: string]: string }>({});
    const [buttonClicked, setButtonClicked] = useState(false);

    const handleInputChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ): void => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });

        // Limpar mensagem de erro quando o campo é preenchido
        if (errors[name]) {
            setErrors({ ...errors, [name]: "" });
        }
    };

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        const apiUrl = `${process.env.REACT_APP_API_URL}/register`;

        // Objeto para rastrear erros
        const newErrors: { [key in keyof FormData]?: string } = {};

        // Lista de campos obrigatórios
        const requiredFields: (keyof FormData)[] = ['name', 'username', 'password', 'confirmPassword'];

        // Verifica campos obrigatórios vazios
        requiredFields.forEach((fieldName) => {
            if (!formData[fieldName]) {
                const errorMessage = `O campo '${labels[fieldName]}' é obrigatório.`;
                newErrors[fieldName] = errorMessage;
            }
        });

        // Se houver erros, define o estado dos erros e retorna
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        if (apiUrl) {
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const responseData = await response.json();

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
            <h2>{labels.title}</h2>
            <form onSubmit={handleSubmit} style={{ maxWidth: "500px", margin: "0 auto" }}>
                <Input label={labels.name} name="name" onChange={handleInputChange} type="text" value={formData.name} required error={errors.name} buttonClicked={buttonClicked} />
                <Input label={labels.username} name="username" onChange={handleInputChange} type="email" value={formData.username} required error={errors.username} buttonClicked={buttonClicked} />
                <Input label={labels.password} name="password" onChange={handleInputChange} type="password" value={formData.password} required error={errors.password} buttonClicked={buttonClicked} />
                <Input label={labels.confirmPassword} name="confirmPassword" onChange={handleInputChange} type="password" value={formData.confirmPassword} required error={errors.confirmPassword} buttonClicked={buttonClicked} />
                <div>
                    <button className="btn btn-primary" type="submit" onClick={() => setButtonClicked(true)}>
                        {labels.btnSubmit}
                    </button>

                </div>
            </form>
        </div>
    );
};

export default RegistrationForm;
