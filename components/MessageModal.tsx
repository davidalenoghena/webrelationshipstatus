import React from 'react';
import './MessageModal.css';

interface MessageModalProps {
    message: string;
    type: 'success' | 'error';
    onClose: () => void;
}

const MessageModal: React.FC<MessageModalProps> = ({ message, type, onClose }) => {
    return (
        <div className="modal-backdrop">
            <div className={`modal-content ${type}`}>
                <span className="close-button" onClick={onClose}>&times;</span>
                <p>{message}</p>
            </div>
        </div>
    );
};

export default MessageModal;
