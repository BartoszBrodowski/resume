import logo from "./logo.svg";
import "./App.css";
import Bio from "./components/Bio";
import Buttons from "./components/Buttons";
import Navbar from "./components/Navbar";

function App() {
    return (
        <div className="App">
            <Bio />
            <Buttons />
            <Navbar />
        </div>
    );
}

export default App;
