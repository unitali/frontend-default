import React, { InputHTMLAttributes, useState } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
    required?: boolean;
}

export function Input({ label, name, type, required, ...props }: InputProps) {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="input-group p-3">
            <div className="form-floating">
                <input
                    className="form-control"
                    type={showPassword ? 'text' : type}
                    placeholder=""
                    name={name}
                    {...props}
                />
                <label className="text-muted text-primary" htmlFor={name}>
                    {label}
                    {required && <span> *</span>}
                </label>
            </div>
            {type === "password" && (
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
