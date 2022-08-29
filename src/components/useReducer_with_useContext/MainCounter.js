import React, { useReducer, useContext } from "react";
import ComponentA from "./ComponentA";
import ComponentB from "./ComponentB";
import ComponentC from "./ComponentC";

const CountContext = React.createContext();

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

function MainCounter() {
    const [count, dispatch] = useReducer(reducer, initialState);

    const providerValue = {
        countState: count,
        countDispatch: dispatch,
    };

    return (
        <CountContext.Provider value={providerValue}>
            <div>
                <h3>Count = {count}</h3>
                <ComponentA />
                <ComponentB />
                <ComponentC />
            </div>
        </CountContext.Provider>
    );
}

export { CountContext };
export default MainCounter;
