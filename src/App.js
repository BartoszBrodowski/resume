import React from "react";
import "./style.css";
import Navbar from "./components/Navbar";
import Bio from "./components/Bio";
import Buttons from "./components/Buttons"


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
