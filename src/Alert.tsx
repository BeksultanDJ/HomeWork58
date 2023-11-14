import { FC } from 'react';

interface AlertProps {
    type: 'primary' | 'success' | 'danger' | 'warning';
    onDismiss?: () => void;
}

const Alert: FC<AlertProps> = ({ type, onDismiss, children }) => {
    const alertClasses = `alert alert-${type}`;

    return (
        <div className={`alert ${alertClasses} d-flex`} role="alert">
            {children}
            {onDismiss && (
                <button type="button" className="close bg-transparent border-0 ms-auto" data-dismiss="alert" aria-label="Close" onClick={onDismiss}>
                    <span aria-hidden="true">&times;</span>
                </button>
            )}
        </div>

    );
};

export default Alert;
