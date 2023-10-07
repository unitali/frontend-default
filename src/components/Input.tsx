import React from "react";
import './styles.css';


interface InputProps {
    type: 'text' | 'password' | 'email';
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    label: string;
    name: string;
    required?: boolean;
    error?: string;
    buttonClicked?: boolean;
}
const Input: React.FC<InputProps> = ({ type, value, onChange, label, name, required, error, buttonClicked, ...props }) => {
    const isEmpty = required && value.trim() === '';

    const showError = error && error !== '' ? error : null;

    return (
        <div className={`form-floating mb-3 ${buttonClicked && showError ? 'has-error' : ''}`}>
            <input
                className={`form-control ${buttonClicked && showError ? 'error-border' : ''}`}
                type={type}
                id={label.toLowerCase()}
                name={name}
                value={value}
                onChange={onChange}
                placeholder=""
                {...props}
            />
            <label htmlFor={label.toLowerCase()}>
                {label} {required && <span style={{ color: 'red' }}>*</span>}
            </label>
            {error && <div className="error-message">{error}</div>}
        </div>
    );
};

export default Input