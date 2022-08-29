import React, { useContext } from "react";
import { CountContext } from "./MainCounter";

function ComponentD() {
    const countContext = useContext(CountContext);
    return (
        <div>
            Component D
            <button onClick={() => countContext.countDispatch("INCREMENT")}>
                Increment
            </button>
            <button onClick={() => countContext.countDispatch("DECREMENT")}>
                Decrement
            </button>
            <button onClick={() => countContext.countDispatch("RESET")}>
                Reset
            </button>
        </div>
    );
}

export default ComponentD;
