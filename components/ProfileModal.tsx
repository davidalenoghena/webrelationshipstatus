import React from 'react';
import './ProfileModal.css';
//import contract
interface ProfileModalProps {
    isOpen: boolean;
    onClose: () => void;
    profile: {
        name: string;
        instID: string;
        relationshipStatus: string;
    };
}

export const ProfileModal: React.FC<ProfileModalProps> = ({ isOpen, onClose, profile }) => {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <button className="close-button" onClick={onClose}>X</button>
                <h2>{profile.name}</h2>
                <p>Instagram ID: {profile.instID}</p>
                <p>{profile.relationshipStatus}</p>
            </div>
        </div>
    );
};