'use client';

import { ConnectButton, useActiveAccount } from "thirdweb/react";
import { client } from "../src/app/client";
import { chain } from "../src/app/chain";
import React from 'react';
import './Navbar.css';


export const NavBar = () => {
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
                        <button className="btn btn-secondary profile-button">
                            PROFILE
                        </button>
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