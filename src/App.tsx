import React, { useState } from 'react';
import Modal from './Modal';
import Alert from './Alert';

const App: React.FC = () => {
    const [showModal, setShowModal] = useState(false);
    const [showAlert, setShowAlert] = useState(true);

    const openModal = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    const closeAlert = () => {
        setShowAlert(false);
    };

    return (
        <div className="container mt-5">
            <button className="btn btn-primary" onClick={openModal}>
                Open Modal
            </button>
            <Modal show={showModal} onClose={closeModal} title="Some kinda modal title">
                <p>This is modal content</p>
            </Modal>

            {showAlert && (
                <>
                    <div className="mt-5">
                        <Alert type="warning" onDismiss={closeAlert}>
                              This is a warning type alert
                        </Alert>
                        <Alert type="success">This is a success type alert</Alert>
                        <Alert type="primary">This is a primary type alert</Alert>
                        <Alert type="danger">This is a danger type alert</Alert>
                    </div>
                </>
            )}
        </div>
    );
};

export default App;
