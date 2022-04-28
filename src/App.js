import React from "react";
import "./style.css";
import Navbar from "./components/Navbar";
import Bio from "./components/Bio";

function App() {
    return (
        <div className="App">
            {/* <div className="home-section"> */}
            <Navbar />
            <Bio />
            {/* </div> */}
        </div>
    );
}

export default App;
