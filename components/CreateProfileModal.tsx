import React, { useState } from 'react';
import './CreateProfileModal.css';
import { contract } from "../utils/contracts";

import { prepareContractCall } from "thirdweb"
import { TransactionButton } from "thirdweb/react";

import { MessageModal } from "./MessageModal";

interface CreateProfileModalProps {
    isOpen: boolean;
    onClose: () => void;
}
//<button onClick={handleCreateProfile} className="save-modal-button">Create Profile</button>

export const CreateProfileModal: React.FC<CreateProfileModalProps> = ({ isOpen, onClose }) => {
    const [name, setName] = useState('');
    const [instID, setInstagramId] = useState('');
    const [partnerAddress, setPartnerAddress] = useState('');

    const [isMessageModalOpen, setIsMessageModalOpen] = useState(false);
    const [statusMessage, setStatusMessage] = useState('');
    const [isError, setIsError] = useState(false);

    //const { mutate: sendTx, data: transactionResult } =
    //    useSendTransaction();   

    //const handleCreateProfile = async () => {
    //    try {
    //        const tx = await prepareContractCall({
    //            contract: contract,
    //            method: "createProfile",
    //            params: [name, partnerAddress, instID]
    //        });
    //        //sendTransaction(transaction);
    //        sendTx(tx);

    //        setStatusMessage('Profile created successfully!');
    //        setIsError(false);

    //        console.log(transactionResult);
    //    } catch (error) {
    //        setStatusMessage('Error creating profile. Please try again.');
    //        setIsError(true);
    //    } finally {
    //        setIsMessageModalOpen(true);
    //        //onClose(); // Close the ProfileModal
    //    }
    //};

    if (!isOpen) return null;

    return (
        <div className="modal-backdrop">
            <div className="modal-content">
                <button onClick={onClose} className="close-modal-button">Close</button>
                <label className="modal-label">Name:</label>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter name..."
                    className="modal-input"
                />
                <label className="modal-label">Instagram ID:</label>
                <input
                    type="text"
                    value={instID}
                    onChange={(e) => setInstagramId(e.target.value)}
                    placeholder="Enter Instagram ID..."
                    className="modal-input"
                />
                <label className="modal-label">Partner Address (optional):</label>
                <input
                    type="text"
                    value={partnerAddress}
                    onChange={(e) => setPartnerAddress(e.target.value)}
                    placeholder="Enter partner address..."
                    className="modal-input"
                />
                <TransactionButton
                    transaction={() => (
                        prepareContractCall({
                            contract: contract,
                            method: "createProfile",
                            params: [name, partnerAddress, instID]
                        })
                    )}
                    onTransactionConfirmed={() => {
                        setStatusMessage('Profile created successfully!');
                        setIsError(false);
                        setIsMessageModalOpen(true);
                    }}
                    onError={() => {
                        setStatusMessage('Error creating profile. Please try again.');
                        setIsError(true);
                        setIsMessageModalOpen(true);
                        //onClose();
                    }}
                    className="save-modal-button"
                >Create Profile</TransactionButton>
                
                <MessageModal
                    isOpen={isMessageModalOpen}
                    onClose={() => setIsMessageModalOpen(false)}
                    message={statusMessage}
                    isError={isError}
                />
            </div>
        </div>
    );
};
