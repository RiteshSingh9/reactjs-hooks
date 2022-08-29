/**
 * useReducer (complex state & action)
 */

import React, { useReducer } from "react";

const initialState = {
    firstCounter: 0,
    secondCounter: 10,
};
const reducer = (state, action) => {
    switch (action.type) {
        case "INCREMENT":
            return {
                ...state,
                firstCounter: state.firstCounter + action.value,
            };
        case "DECREMENT":
            return {
                ...state,
                firstCounter: state.firstCounter - action.value,
            };
        case "INCREMENT2":
            return {
                ...state,
                secondCounter: state.secondCounter + action.value,
            };
        case "DECREMENT2":
            return {
                ...state,
                secondCounter: state.secondCounter - action.value,
            };
        case "RESET":
            return initialState;
        default:
            return state;
    }
};

function CounterTwo() {
    const [count, dispatch] = useReducer(reducer, initialState);

    return (
        <div>
            <div>
                First Counter - <strong>{count.firstCounter}</strong> <br />
                Second Counter - <strong>{count.secondCounter}</strong>
            </div>
            <button onClick={() => dispatch({ type: "INCREMENT", value: 1 })}>
                Increment
            </button>
            <button onClick={() => dispatch({ type: "DECREMENT", value: 1 })}>
                Decrement
            </button>
            <button onClick={() => dispatch({ type: "INCREMENT", value: 5 })}>
                Increment 5
            </button>
            <button onClick={() => dispatch({ type: "DECREMENT", value: 5 })}>
                Decrement 5
            </button>
            <div>
                <button
                    onClick={() => dispatch({ type: "INCREMENT2", value: 1 })}
                >
                    Increment Seccond Counter
                </button>
                <button
                    onClick={() => dispatch({ type: "DECREMENT2", value: 2 })}
                >
                    Decrement Seccond Counter
                </button>
            </div>
            <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
        </div>
    );
}

export default CounterTwo;
