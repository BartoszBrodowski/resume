import { useRef } from "react";
import "./style.css";
import Bio from "./components/MainSection/Bio";
import Buttons from "./components/MainSection/Buttons";
import Navbar from "./components/MainSection/Navbar";
import Skills from "./components/Skills/Skills";

function App() {
    const firstItemRef = useRef(null);
    return (
        <div className="App">
            <Navbar skillsRef={firstItemRef.current}/>
            <Bio />
            <Buttons />
            <Skills anotherRef={firstItemRef}/>
            <div className="special"></div>
        </div>
    );
}

export default App;
