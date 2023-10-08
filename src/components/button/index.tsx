import './style.css';

interface ButtonProps {
    label: string;
    loading?: boolean;
    disabled?: boolean;
}


const Button: React.FC<ButtonProps> = ({ ...props }) => {
    return (
        <button
            className="btn btn-primary mt-5 px-5 py-2"
            type="submit"
            {...((props.disabled || props.loading) ? { disabled: true } : {})}
        >
            {props.loading !== undefined && props.loading ? (
                <div
                    className="spinner-grow spinner-grow-sm"
                    role="status"
                >
                    <span
                        className="visually-hidden"
                    />
                </div>
            ) : (props.label)}
        </button>
    )
}

export default Button;