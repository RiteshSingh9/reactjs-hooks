import logo from "./logo.svg";
import "./App.css";
import Counter from "./components/useState/Counter";
import WorkingWithObjects from "./components/useState/WorkingWithObjects";
import WorkingWithArray from "./components/useState/WorkingWithArray";

function App() {
    return (
        <div className="App">
            {/* <Counter /> */}
            {/* <WorkingWithObjects /> */}
            <WorkingWithArray />
        </div>
    );
}

export default App;
