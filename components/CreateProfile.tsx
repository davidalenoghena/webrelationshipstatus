import React, { useState } from 'react';
import './CreateProfile.css';

interface CreateProfileProps {
    name: string;
    instagramId: string;
}

const CreateProfile: React.FC<CreateProfileProps> = ({ name, instagramId }) => {
    const [relationshipStatus, setRelationshipStatus] = useState('');

    const handleStatusChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setRelationshipStatus(event.target.value);
    };

    return (
        <div className="profile-card">
            <h2 className="profile-name">{name}</h2>
            <p className="profile-instagram">@{instagramId}</p>
            <div className="profile-status">
                <label htmlFor="relationship-status">Relationship Status:</label>
                <select id="relationship-status" value={relationshipStatus} onChange={handleStatusChange}>
                    <option value="">Select status</option>
                    <option value="single">Single</option>
                    <option value="in-a-relationship">In a Relationship</option>
                </select>
            </div>
            {relationshipStatus && <p className="profile-relationship-status">Status: {relationshipStatus}</p>}
        </div>
    );
};

export default CreateProfile;
