import React, { useState } from "react";

function Counter() {
    const initialCount = 0;
    const [count, setCount] = useState(initialCount);

    const increment = () => {
        // setCount(count + 1); // unsafe way and should not be used since we are using the prevState itself
        setCount((prevCount) => prevCount + 1);
    };
    const decrement = () => {
        setCount((prevCount) => prevCount - 1);
    };
    const resetCount = () => {
        setCount(initialCount);
    };
    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={resetCount}>Reset</button>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    );
}

export default Counter;
