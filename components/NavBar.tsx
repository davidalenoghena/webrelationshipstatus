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
                            Profile
                        </button>
                    </div>
                </div>
            </nav>
        );
    }
    else {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <a className="navbar-brand" href="#">
                        <i className="fa d-inline fa-lg fa-circle-o"></i>
                        <b> Relationship Status </b>
                    </a>
                    <button
                        className="navbar-toggler navbar-toggler-right border-0"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbar11"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbar11">
                        <ul className="navbar-nav mr-auto"></ul>
                        <a className="btn btn-primary navbar-btn ml-md-2">
                            <ConnectButton
                                client={client}
                                chain={chain}
                            />
                        </a>
                    </div>
                </div>
            </nav>
        );
    }
};