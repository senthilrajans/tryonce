import React, { Component } from "react";
import ReactDOM from "react-dom";
import Header from "./components/header";
import Main from "./components/main";


const App = () => {
    return (
        <div className="page">
            <Header />

            <Main />
        </div>


    );
};

export default App;

ReactDOM.render(<App />, document.getElementById("app"));