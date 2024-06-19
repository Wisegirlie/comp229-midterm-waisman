import React, { useState } from "react";
import "./dropdown.css";


export default function Dropdown() {
    const [selectedOption, setSelectedOption] = useState("option1");

    const handleDropdownChange = (event) => {
        setSelectedOption(event.target.value);
    };


    const options = [
        { key: "option1", value: "Option 1" },
        { key: "option2", value: "Option 2" },
        { key: "option3", value: "Option 3" },
        { key: "option4", value: "Option 4" },
        { key: "option55", value: "Option 55" },
    ]
    //ALT+SHIFT+F
    return (
        <form>
            <label>
                Select an option:
                <select value={selectedOption} onChange={handleDropdownChange}>
                    {options.map(entry => (
                        <option value={entry.key} key={entry.key}>{entry.value}</option>
                    ))}
                </select>
            </label>
            <p className="dropdown__selected">Selected option: {selectedOption}</p>
        </form>
    );
}
