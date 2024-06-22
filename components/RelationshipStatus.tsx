'use client';

import { ConnectButton, useActiveAccount } from "thirdweb/react";
import { client } from "../src/app/client";
import { chain } from "../src/app/chain";

export const RelationshipStatus = () => {
    const account = useActiveAccount();

    if (account) {
        return (
            <div style={{ textAlign: "center", minWidth: "500px" }}>
                <ConnectButton
                    client={client}
                    chain={chain}
                />
            </div>
        )
    }
};