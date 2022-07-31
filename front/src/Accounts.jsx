import { useState, useEffect } from 'react';

const axios = require('axios').default;


const path = "http://127.0.0.1:5000/";

function Accounts(data) {
    const [content, setContent] = useState(
        {
            0: {
                "address": "wasm1p7uzckyck0r7e7feqzry6yzmtelq0y95erey3qnjjlyw7q2ludas0850dc",
                "balance": "123123123",
            },
            1: {
                "address": "wasm1p7uzckyck0r7e7feqzry6yzmtelq0y95erey3qnjjlyw7q2ludas0850dc",
                "balance": "432432432423",
            }
        }
    );

    useEffect(() => {
        axios.get(path + 'bank/')
            .then(function (response) {
                let content = response.data;
                setContent(content);
            })
    }, []);

    return <>
        <h3>These are the current accounts available in the chain with their respective balances.</h3>
        <table>
            <thead>
                <tr>
                    <th>
                        Address
                    </th>
                    <th>
                        Balane
                    </th>
                </tr>
            </thead>
            <tbody>
                {Object.keys(content).map((container, item) => {
                    let account = content[container];
                    console.log(content);
                    const address = account.address;
                    const reducedAddress = address.substring(0, 7) + "..." + address.substring(address.length - 8, address.length - 1);
                    const balance = account.balance;
                    return (
                        <tr>
                            <td>
                                {reducedAddress}
                            </td>
                            <td>
                                {balance}
                            </td>

                        </tr>
                    );
                })}
            </tbody>
        </table>
    </>
}

export default Accounts;