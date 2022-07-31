import React from "react";
import { Outlet } from "react-router";
import Header from "./Header";

const BaseLayout = () => {
    return (
        <div className="App">
            <Header />
            <div className="output">
            <Outlet />
            </div>
        </div>
    );
};

BaseLayout.propTypes = {};

export default BaseLayout;
