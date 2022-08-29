import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Counter from "./components/useState/Counter";
import WorkingWithObjects from "./components/useState/WorkingWithObjects";
import WorkingWithArray from "./components/useState/WorkingWithArray";
import HookCounter from "./components/useEffect/HookCounter";
import HookMouse from "./components/useEffect/HookMouse";
import MouseContainer from "./components/useEffect/MouseContainer";
import HookCounterTwo from "./components/useEffect/HookCounterTwo";
import FetchAllData from "./components/fetchingData/FetcAllData";
import FetchData from "./components/fetchingData/FetchData";
import ComponentC from "./components/useContext/ComponentC";
import CounterOne from "./components/useReducer/CounterOne";
import CounterTwo from "./components/useReducer/CounterTwo";
import CounterThree from "./components/useReducer/CounterThree";

// older way
export const UserContext = React.createContext();
export const ChannelContext = React.createContext();

// using hooks

function App() {
    return (
        <div className="App">
            {/* <Counter /> */}
            {/* <WorkingWithObjects /> */}
            {/* <WorkingWithArray /> */}
            {/* <HookCounter /> */}
            {/* <HookMouse /> */}
            {/* <MouseContainer /> */}
            {/* <HookCounterTwo /> */}
            {/* Fetching data  */}
            {/* <FetchAllData /> */}
            {/* <FetchData /> */}
            {/* useContext */}
            {/* <UserContext.Provider value={"Ritesh"}>
                <ChannelContext.Provider value={"codeevo"}>
                    <ComponentC />
                </ChannelContext.Provider>
            </UserContext.Provider> */}
            {/* useReducer */}
            {/* <CounterOne /> /*} {/* Simple state & actions */}
            {/* <CounterTwo /> */} {/*} Complex state & actions */}
            <CounterThree />
        </div>
    );
}

export default App;
