import CounterReduxParent from "./components/Redux/CounterGlobalReduxParent";
import LocalCounter from "./components/contextapi/CounterState";
function App() {
  return (
    <div>
      <h2>Experiment 4 : State Management using Redux</h2>
      <LocalCounter/>
      <LocalCounter/>
      
      <CounterReduxParent cno="Counter 1" />
      <CounterReduxParent cno="Counter 2" />
    </div>
  );
}

export default App;
