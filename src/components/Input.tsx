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
    disabled?: boolean;
}
const Input: React.FC<InputProps> = ({ ...props }) => {
    const showError = props.error && props.error !== '' ? props.error : null;

    return (
        <div className={`form-floating m-3  ${props.buttonClicked && showError ? 'has-error' : ''}`}>
            <input
                className={`form-control ${props.buttonClicked && showError ? 'error-border' : ''}`}
                type={props.type}
                id={props.label.toLowerCase()}
                name={props.name}
                value={props.value}
                onChange={props.onChange}
                placeholder=""
                disabled={props.disabled}
            />
            <label htmlFor={props.label.toLowerCase()}>
                {props.label} {props.required && <span style={{ color: 'red' }}>*</span>}
            </label>
            {props.error && <div className="error-message">{props.error}</div>}
        </div>
    );
};

export default Input