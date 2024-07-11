import React from 'react';
import './MessageModal.css';

interface MessageModalProps {
    isOpen: boolean;
    onClose: () => void;
    message: string;
    isError: boolean;
}

export const MessageModal: React.FC<MessageModalProps> = ({ isOpen, onClose, message, isError }) => {
    if (!isOpen) return null;

    return (
        <div className="status-modal-backdrop">
            <div className="status-modal-content">
                <button onClick={onClose} className="close-status-modal-button">X</button>
                <p className={`status-modal-message ${isError ? 'error' : 'success'}`}>{message}</p>
            </div>
        </div>
    );
};