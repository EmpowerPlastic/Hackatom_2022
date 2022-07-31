import React from "react";
import BaseLayout from "./BaseLayout";
import { HashRouter, Route, Routes } from "react-router-dom";

import "./App.css";
import Main from "./Main";
import Instantiate from "./Instantiate";
import Conclude from "./Conclude";
import Status from "./Status";
import Sponsor from "./Sponsor";
import Accounts from "./Accounts";

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<BaseLayout />}>
          <Route path="" element={<Main />} />
          <Route path="/accounts" element={<Accounts />} />
          <Route path="/conclude" element={<Conclude />} />
          <Route path="/instantiate" element={<Instantiate />} />
          <Route path="/sponsor" element={<Sponsor />} />
          <Route path="/status" element={<Status />} />
        </Route>
      </Routes>
    </HashRouter>
  );
};

App.propTypes = {};

export default App;
