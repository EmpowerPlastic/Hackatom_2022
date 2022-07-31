import { useState, useEffect } from 'react';

const axios = require('axios').default;


const path = "http://127.0.0.1:5000/";

function Accounts(data) {
    const [content, setContent] = useState(
        [
            {
                "addr": "wasm1p7uzckyck0r7e7feqzry6yzmtelq0y95erey3qnjjlyw7q2ludas0850dc",
                "name": "icaissuer",
                "creator": "wasm1p7uzckyck0r7e7feqzry6yzmtelq0y95erey3qnjjlyw7q2ludas0850dc"
            },
            {
                "addr": "wasm1qnk2n4nlkpw9xfqntladh74w6ujtulwn5wkh5w",
                "name": "empower",
                "creator": "wasm1qnk2n4nlkpw9xfqntladh74w6ujtulwn5wkh5w"
            }
        ]
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
                        Header
                    </th>
                    <th>
                        Name
                    </th>
                    <th>
                        Creator
                    </th>
                </tr>
            </thead>
            <tbody>
                {content.map((account) => {
                    console.log(content);
                    const address = account.addr;
                    const reducedAddress = address.substring(0, 5) + "..." + address.substring(address.length - 6, address.length - 1);
                    const creator = account.creator;
                    const reducedCreator = creator.substring(0, 5) + "..." + creator.substring(creator.length - 6, creator.length - 1);
                    return (
                        <tr>
                            <td>
                                {reducedAddress}
                            </td>
                            <td>
                                {account.name}
                            </td>
                            <td>
                                {reducedCreator}
                            </td>

                        </tr>
                    );
                })}
            </tbody>
        </table>
    </>
}

export default Accounts;