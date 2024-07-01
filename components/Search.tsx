'use client';

import { TransactionButton, useReadContract } from "thirdweb/react";
import React, { useState } from 'react';
import './Search.css';
import { ProfileModal } from "./ProfileModal";


export const Search = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState<string>('');

    const {
        data: profiles,
    } = useReadContract({
        contract: contract,
        method: "Search"
    });

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
            </div>
            
        </div>
    );
    
};