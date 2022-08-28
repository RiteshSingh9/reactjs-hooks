import React, { useEffect, useState } from "react";

function HookMouse() {
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    const logMousePosition = (e) => {
        console.log(`Mouse Event`);
        setX(e.clientX);
        setY(e.clientY);
    };

    // useEffect(() => {
    //     console.log("Use Effect called");
    //     window.addEventListener("mousemove", logMousePosition);
    // }, []);
    // To run only once use Effect only once pass an empty array

    useEffect(() => {
        console.log("Use Effect called");
        window.addEventListener("mousemove", logMousePosition);

        return () => {
            // clean up task
            console.log("component umounting code");
            window.removeEventListener("mousemove", logMousePosition);
        };
    }, []);

    return (
        <div>
            <p> X axis - {x}</p>
            <p> Y axis - {y}</p>
        </div>
    );
}

export default HookMouse;
