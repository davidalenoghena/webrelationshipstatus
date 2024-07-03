'use client';

import { contract } from "../utils/contracts";
import { useReadContract } from "thirdweb/react";
import React, { useState } from 'react';
import './Search.css';
import { ProfileModal } from "./ProfileModal";

export const Search = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState<string>('');

    const { data: searchProfile } = useReadContract({
        contract: contract,
        method: "Search",
        params: [searchTerm]
    });

    const profileData = {
        name: searchProfile?.name,
        instID: searchProfile?.instID,
        relationshipStatus: searchProfile?.relStatus
    };

    //const profileData = searchProfile;

    return (
        <div className="search-page">
            <div className="search-bar">
                <input
                    type="text"
                    placeholder="Search..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button
                    onClick={() => setIsModalOpen(true)}
                >Search</button>
                <ProfileModal
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                    profile={profileData}
                />
            </div>           
        </div>
    )  
};