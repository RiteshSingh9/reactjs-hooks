import React, { useEffect, useState } from "react";

function HookCounter() {
    const [count, setCount] = useState(0);
    const [name, setName] = useState("");
    // Basic Use
    // useEffect(() => {
    //     document.title = ` You clicked ${count} times`;
    // });

    // conditonally run useEffect;
    // seccond argument is array state or props that need to be watched for changes and run useEffect only on changes
    useEffect(() => {
        console.log(`useEffect - Updating document title`);
        document.title = ` You clicked ${count} times`;
    }, [count]);

    return (
        <div>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <button onClick={() => setCount(count + 1)}>
                Click {count} times
            </button>
        </div>
    );
}

export default HookCounter;
