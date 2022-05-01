import React from "react";
import "./style.css";
import Bio from "./components/MainSection/Bio";
import Buttons from "./components/MainSection/Buttons";
import Navbar from "./components/MainSection/Navbar";
import Skills from "./components/Skills/Skills";

function App() {
    return (
        <div className="App">
            <Navbar />
            <Bio />
            <Buttons />
            <Skills />
        </div>
    );
}

export default App;
