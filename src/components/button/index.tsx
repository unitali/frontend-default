import React from "react";
import { Link } from "react-router-dom";

interface ButtonProps {
    label: string;
    loading?: boolean;
    disabled?: boolean;
    toPath?: string;
    className?: string;
}
const Button: React.FC<ButtonProps> = ({ ...props }) => {
    const buttonContent = props.loading ? (
        <div className="spinner-grow spinner-grow-sm" role="status">
            <span className="visually-hidden" />
        </div>
    ) : (
        props.label
    );

    const button = (
        <button
            className={`btn btn-primary mt-5 px-5 py-2 ${props.className}`}
            type="submit"
            disabled={props.disabled || props.loading}
        >
            {buttonContent}
        </button>
    )

    return (
        props.toPath ? (
            <Link to={props.toPath}>
                {button}
            </Link>
        ) : (
            <button
                className={`btn btn-primary mt-5 px-5 py-2`}
                type="submit"
                disabled={props.disabled || props.loading}
            >
                {buttonContent}
            </button>
        )
    );
};

export default Button;
