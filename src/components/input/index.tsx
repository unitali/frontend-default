import React, { useState } from "react";
import './style.css';

interface InputProps {
    type: 'text' | 'password' | 'email';
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    label: string;
    name: string;
    required?: boolean;
    disabled?: boolean;
    showPassword?: boolean;
}

const Input: React.FC<InputProps> = ({ ...props }) => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="input-group mb-3">
            <div className="form-floating">
                <input
                    className="form-control"
                    type={showPassword ? 'text' : props.type}
                    id={props.label.toLowerCase()}
                    name={props.name}
                    value={props.value}
                    onChange={props.onChange}
                    placeholder=""
                    disabled={props.disabled}
                />
                <label className="text-muted" htmlFor={props.label.toLowerCase()}>
                    {props.label}
                    {props.required && <span style={{ color: 'red' }}> *</span>}
                </label>
            </div>
            {props.showPassword && (
                <span
                    className="input-group-text"
                    onClick={togglePasswordVisibility}
                    style={{ cursor: 'pointer' }}
                >
                    {showPassword ? (
                        <i className="bi bi-eye-slash text-primary"></i>
                    ) : (
                        <i className="bi bi-eye text-primary"></i>
                    )}
                </span>
            )}
        </div>
    );
};

export default Input;
