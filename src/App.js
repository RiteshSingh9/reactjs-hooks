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
            <FetchData />
        </div>
    );
}

export default App;
