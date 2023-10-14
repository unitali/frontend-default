import { ButtonHTMLAttributes, ReactNode } from "react";
import { Link } from "react-router-dom";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    loading?: boolean;
    toPath?: string;
    children: ReactNode;
}

export function Button({ className, loading, toPath, children, ...props }: ButtonProps) {
    const button = (
        <button
            className={`btn me-2 ${className}`}
            disabled={loading}
            {...props} >
            {
                loading ? (
                    <div className="spinner-grow spinner-grow-sm" role="status">
                        <span className="visually-hidden" />
                    </div>
                ) : (children)
            }
        </button>
    )

    return (
        toPath ? (
            <Link to={toPath}>
                {button}
            </Link>
        ) : (button)
    )
}
