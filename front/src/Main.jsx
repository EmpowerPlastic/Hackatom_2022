import './App.css';
import { useState } from 'react';

const axios = require('axios');

const functions = {
    "Accounts": "Main",
    "Instiante Contract": "instantiate",
    "Sponsor collector": "sponsor",
    "Conclude funding": "conclude",
    "Status funding": "status",
}

function Main() {
    return (
        <div>
            <h1>This project has several angles</h1>
            <p>
                In few words, the project itself is composed by a smart contract owned by an
                entity (the operator), a group of entrepeuner (the collector), and the rest of the community,
                (potential backer). At the same time, the contract connects the addresses of the
                entrepeuners and the operator with another chain where the contract isn't deployed.
            </p>
            <p>
                The concept can be seen as a launchpad to fund people who wants to work but lack of liquidity to do it.
                Different from Dao Up!, here the investors can't remove their assets once the project is totally invested.
                On the other side they will receive <i>something</i> in exchange of their support.
                
                <p><b>This can be seen as a blockchain version of Kickstarter or IndieGogo.</b></p>

                In this beta version, the operator is the one who opens and closes the fundraisings while the investors
                can choose to support or not to the entrepeuner. When a funding is completed, the collector receives the
                totality of the funds.
            </p>

            <p>
                This sounds totally risky, but the complete utility of the operator gives the fundamental weight
                that changes the concerns on this to a trustworthy idea. In a posterior deliver of the project the operator
                can collateral its assets in order to back the entrepeuner and incentivize the investors to support them.
                Since the owner will has to know the people he's backing, this will give a double charge of trust for the investors.
            </p>
            <p>
                But this is not all. As mentioned before, the operator is also connected to another chain with the intention of locking as collateral 
                his assets in this chain, opening the door to lending your tokens from one chain to another without using a third party or sending
                them between chains. Essentially, an IBC utility.
            </p>
            <p>
                Some of the use cases that can be considered for this contract:
            </p>
            <ul>
                <li>A platform of microloans for workers with low resources</li>
                <li>A launchpad for developers with experience, backed by other experience under a DAO</li>
                <li>A presale marketplace for sellers with background</li>
            </ul>
        </div>
    );
}

export default Main;
