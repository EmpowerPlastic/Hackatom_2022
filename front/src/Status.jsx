import { useState, useEffect } from 'react';

const axios = require('axios').default;
const path = "http://127.0.0.1:5000/";

const operator = "wasm18hl5c9xn5dze2g50uaw0l2mr02ew57zkq4ekwt";
const collector = "wasm1m9l358xunhhwds0568za49mzhvuxx9uxf9974x";
const funder = "wasm1mjk79fjjgpplak5wq838w0yd982gzkyff27t5s";

function Status(data){
    const [operatorIca, setOperatorIca] = useState("");
    const [collectorIca, setCollectorIca] = useState("");
    const [funderIca, setFunderIca] = useState("");

    useEffect(() => {
        axios.get(path + 'ica/2/' + operator)
            .then(function (response) {
                let operatorIca = response.data;
                console.log("ica2 operator", operatorIca)
                setOperatorIca(operatorIca);
            })

        axios.get(path + 'ica/2/' + collector)
            .then(function (response) {
                let collectorIca = response.data;
                console.log("ica2 collector", collectorIca)
                setCollectorIca(collectorIca);
            })

        axios.get(path + 'ica/2/' + funder)
            .then(function (response) {
                let funderIca = response.data;
                console.log("ica2 funder", funderIca)
                setFunderIca(funderIca);
            })
    }, []);

    return <>
        <h3>The status of the fundraising can be seen at any moment with the function "execute_status_funding"</h3>
        <table>
            <thead>
                <tr>
                    <th>Account</th>
                    <th>Chain 1</th>
                    <th>Chain 2</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th>Operator</th>
                    <th>{operator}</th>
                    <th>{operatorIca}</th>
                </tr>
                <tr>
                    <th>Collector</th>
                    <th>{collector}</th>
                    <th>{collectorIca}</th>
                </tr>
                <tr>
                    <th>Funder</th>
                    <th>{funder}</th>
                    <th>{funderIca}</th>
                </tr>
            </tbody>
        </table>
    </>
}

export default Status;