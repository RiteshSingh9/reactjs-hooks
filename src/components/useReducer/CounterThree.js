/**
 * useReducer (simple state & actions)
 *
 * Multiple useReducers
 */

import React, { useReducer } from "react";

const initialState = 0;
const reducer = (state, action) => {
    switch (action) {
        case "INCREMENT":
            return state + 1;
        case "DECREMENT":
            return state - 1;
        case "RESET":
            return initialState;
        default:
            return state;
    }
};

function CounterThree() {
    const [count, dispatch] = useReducer(reducer, initialState);
    const [countTwo, dispatchTwo] = useReducer(reducer, initialState); // since behaviour is same so argument is also same

    return (
        <div>
            <div>
                <div>Count - {count}</div>
                <button onClick={() => dispatch("INCREMENT")}>Increment</button>
                <button onClick={() => dispatch("DECREMENT")}>Decrement</button>
                <button onClick={() => dispatch("RESET")}>Reset</button>
            </div>
            <div>
                <div>Count 2 - {countTwo}</div>
                <button onClick={() => dispatchTwo("INCREMENT")}>
                    Increment
                </button>
                <button onClick={() => dispatchTwo("DECREMENT")}>
                    Decrement
                </button>
                <button onClick={() => dispatchTwo("RESET")}>Reset</button>
            </div>
        </div>
    );
}

export default CounterThree;
