'use client';

import { useState } from "react";
import { ConnectButton, useActiveAccount } from "thirdweb/react";
import { client } from "../src/app/client";
import { chain } from "../src/app/chain";
import { CreateProfileModal } from "./CreateProfileModal";
import React from 'react';
import './Navbar.css';

interface UserProfile {
    name: string;
    instagramId: string;
    relationshipStatus: string;
}

const initialUserProfile: UserProfile = {
    name: 'John Doe',
    instagramId: '@johndoe',
    relationshipStatus: 'single',
};

export const NavBar = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const account = useActiveAccount();

    if (account) {
        return (
            <nav className="custom-navbar">
                <div className="container">
                    <a className="navbar-brand" href="#">
                        <i className="fa fa-circle-o"></i>
                        <b> Relationship Status </b>
                    </a>
                    <div className="navbar-buttons">
                        <ConnectButton
                            client={client}
                            chain={chain}
                        />
                        <button className="btn btn-secondary profile-button" onClick={() => setIsModalOpen(true)}>
                            PROFILE
                        </button>
                        <CreateProfileModal
                            isOpen={isModalOpen}
                            onClose={() => setIsModalOpen(false)}
                        />
                    </div>
                </div>
            </nav>
        );
    }
    else {
        return (
            <nav className="custom-navbar">
                <div className="container">
                    <a className="navbar-brand" href="#">
                        <i className="fa fa-circle-o"></i>
                        <b> Relationship Status </b>
                    </a>
                    <div className="navbar-buttons">
                        <ConnectButton
                            client={client}
                            chain={chain}
                        />
                    </div>
                </div>
            </nav>
        );
    }
};