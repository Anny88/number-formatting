import React, {useState} from "react";
import {format} from "../logic/format";
import './NumberFormatForm.css';

const NumberFormatForm = () => {
    const [data, setData] = useState({});
    const [formattedNumber, setFormattedNumber] = useState(null);

    const handleChange = (e) => {
        setData((currentData) =>
            ({
                ...currentData,
                [e.target.name]: e.target.value
            })
        );
    }

    const handleButtonClick = () => {
        const { val, n, thousandSeparator, decimalSeparator } = data;
        setFormattedNumber(format(val, n, decimalSeparator, thousandSeparator));
    }

    return (
        <div id="content">
            <h3>Welcome to the number formatting service!</h3>
            <p>Please input some number</p>
            <input value={data.val} type="number" name="val" placeholder="Some number" onChange={handleChange}/>
            <input value={data.n} name="n" placeholder="Number of decimal points" onChange={handleChange} />
            <input value={data.thousandSeparator} name="thousandSeparator" placeholder="Thousands separator" onChange={handleChange}/>
            <input value={data.decimalSeparator} name="decimalSeparator" placeholder="Decimal separator" onChange={handleChange}/>
            <input value={data.roundToNearest} type="select" name="roundToNearest" placeholder="Round to nearest: true / false" onChange={handleChange}/>
            <button onClick={handleButtonClick} style={{ backgroundColor: "indigo", color: "white" }}>Format!</button>
            <p>Result: <b>{formattedNumber}</b></p>
        </div>
    );
}

export default NumberFormatForm;
