import React from "react";
import "./style.css";
import Bio from "./components/Bio";
import Buttons from "./components/Buttons";
import Navbar from "./components/Navbar";

function App() {
    return (
        <div className="App">
            <Navbar />
            <Bio />
            <Buttons />
        </div>
    );
}

export default App;
