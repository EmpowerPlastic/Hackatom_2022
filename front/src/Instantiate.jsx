import { useState, useEffect } from 'react';

const axios = require('axios').default;
const path = "http://127.0.0.1:5000/";

function Instantiate(data) {

    const [content, setContent] = useState(
        ""
    );

    useEffect(() => {
        axios.get(path + 'instantiate/')
            .then(function (response) {
                let content = response.data;
                setContent(content);
            })
    }, []);

    return <>
        <h3>Instianting the smart contract, we obtain its respective address.</h3>

        <h2>{content}</h2>
    </>
}

export default Instantiate;