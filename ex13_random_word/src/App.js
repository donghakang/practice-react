import logo from "./logo.svg";
import "./App.css";
import Letter from "./Letter";

function App() {
  return (
    <div className="App">
      <div className="sentence">
        <Letter start="D" end="ㄷ" />
        <Letter start="O" end="ㅇ" />
        <Letter start="N" end="ㅗ" />
        <Letter start="G" end="ㅇ" />
        <Letter start="H" end="ㅎ" />
        <Letter start="A" end="ㅏ" />
      </div>
    </div>
  );
}

export default App;
