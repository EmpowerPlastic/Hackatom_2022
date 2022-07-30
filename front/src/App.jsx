import './App.css';
import { useState } from 'react';
const axios = require('axios');

const functions = {
  "Accounts": "bank",
  "Store Contract": "store",
  "Instiante Contract": "inst",
  "Sponsor collector": "sponsor",
  "Conclude funding": "conclude",
}

function App() {
  const [output, setOutput] = useState("Here you can see the state of the chain!");
  const path = "http://127.0.0.1:5000/";

  return (
    <div className='App'>
      <div className="row-functions">
        {Object.keys(functions).map((key, value) => {
          console.debug(functions[key]);

          async function PlayChain() {

            let command = functions[key];
            if (command === "bank") {
              axios.get(path + "bank/")
                .then(function (response) {
                  console.log(333333333);
                  let current = response.data;
                  let updatedOutput = "";
                  for (const item in Object.keys(current)) {
                    let information = current[item];
                    updatedOutput += information["address"] + "    " + information["balance"] + "\n";
                  }
                  setOutput(updatedOutput);
                })
                .catch(function (error) {
                  console.log(error);
                });
            }

            if (command === "store") {
              axios.get(path + "store/")
                .then(function (response) {
                  let current = response.data;
                  setOutput(current);
                })
                .catch(function (error) {
                  console.log(error);
                });
            }
            if (command === "inst") {
              axios.get(path + "instantiate/")
                .then(function (response) {
                  let current = response.data;
                  setOutput(current);
                })
                .catch(function (error) {
                  console.log(error);
                });
            }
            if (command === "sponsor") {
              axios.get(path + "sponsor/")
                .then(function (response) {
                  let current = response.data;
                  setOutput(current);
                })
                .catch(function (error) {
                  console.log(error);
                });
            }
            if (command === "conclude") {
              axios.get(path + "conclude/")
                .then(function (response) {
                  let current = response.data;
                  setOutput(current);
                })
                .catch(function (error) {
                  console.log(error);
                });
            }

          }
          return <>
            <div className='call-button' onClick={PlayChain}>
              {key}
            </div>
          </>
        })}
      </div>
      <div className='output'>
        {output}
      </div>
    </div>
  );
}

export default App;
