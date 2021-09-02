import './App.css';
import {useState} from "react";
import {format} from "./logic/format";

function App() {
    const [formattedNumber, setFormattedNumber] = useState(null);
    const [inputNumber, setInputNumber] = useState(null);
  return (
    <div className="App">
        <div>
            <h3>Welcome to the number formatting service!</h3>
            <p>Please input some number</p>
            <input value={inputNumber} placeholder="Some number" onChange={(e) => setInputNumber(e.target.value)}/>
            <button onClick={() => setFormattedNumber(format(inputNumber))}>Go</button>
            <p>{formattedNumber}</p>
        </div>
    </div>
  );
}

export default App;
