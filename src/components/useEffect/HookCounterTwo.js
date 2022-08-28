// useEffect with incorrect dependencies

import React, { useEffect, useState } from "react";

function HookCounterTwo() {
    const [count, setCount] = useState(0);

    const tick = () => {
        setCount(count + 1);
        // setCount((prevCount) => (prevCount = prevCount + 1)); // better way solve the proble caused due to lacking dependency
    };

    // useEffect(() => {
    //     const interval = setInterval(tick, 1000);

    //     return () => {
    //         console.log("Cleanup");
    //         clearInterval(interval);
    //     };
    // }, []); // will not work properly

    useEffect(() => {
        const interval = setInterval(tick, 1000);

        return () => {
            console.log("Cleanup");
            clearInterval(interval);
        };
    }, [count]);

    return <div>{count}</div>;
}

export default HookCounterTwo;
