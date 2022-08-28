import React, { useState } from "react";

function WorkingWithArray() {
    const [items, setItems] = useState([]);

    const addItems = () => {
        setItems([
            ...items, // copy all previous item in array then add value
            {
                id: items.length,
                value: Math.floor(Math.random() * 10) + 1,
            },
        ]);
    };
    return (
        <div>
            <button onClick={addItems}>Add Items.</button>
            <ul>
                {items.map((item) => (
                    <li key={item.id}> {item.value}</li>
                ))}
            </ul>
        </div>
    );
}

export default WorkingWithArray;
