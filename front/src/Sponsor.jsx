import { useState, useEffect } from 'react';

const axios = require('axios').default;
const path = "http://127.0.0.1:5000/";

function Sponsor(data) {


    const [content, setContent] = useState(
        ""
    );
    const [message, setMessage] = useState('');

    const handleChange = event => {
        setMessage(event.target.value);
    }


    async function runContent() {
        axios.get(path + 'sponsor/')
            .then(function (response) {
                let content = response.data;
                setContent(content);
            })
        return null;
    }

    return (
        <div className='sponsor'>
            <h3>If an user of the community decides to support a collector's fundraising, he will sponsor and the assets will be sent to the SC, giving a .</h3>

            <label><p>Enter the smart contract address:</p>
                <br />
                <input type="text" className='textoGrande'
                    id="message"
                    onChange={handleChange}
                    value={message} />
                <div className='buttonInput'

                    onClick={runContent()}>
                    Click here!
                </div>
                {content}
            </label>
        </div>);
}

export default Sponsor;