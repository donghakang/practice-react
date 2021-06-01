import React, { useState } from "react";

function State1() {
  // State
  const [age, setAge] = useState(27);

  const handleClick = () => {
    setAge(age + 1);
  };

  return (
    <div>
      <div className="App">
        <h2>Today, I am {age} years old!</h2>
        <button onClick={handleClick}>Older!</button>
      </div>
      <br />
      <p className="description">
        <h3>
          Why does the React <span className="code">useState</span> Hook not
          update immediately?
        </h3>
        <p>
          They're just queues. <br /> React{" "}
          <span className="code">useState</span> and{" "}
          <span className="code">setState</span> don't make changes directly to
          the state object; they create queues to optimize performace, which is
          why the changes don't update immediately
        </p>
      </p>
    </div>
  );
}

function State2() {
  const [age, setAge] = useState(27);
  const [sibling, setSibling] = useState(1);

  const handleAgeClick = () => setAge(age + 1);
  const handleSiblingClick = () => setSibling(sibling + 1);

  return (
    <div className="App">
      <h2>Today, I am {age} years old!</h2>
      <h2>I have {sibling} siblings!</h2>
      <button onClick={handleAgeClick}>Older!</button>
      <button onClick={handleSiblingClick}>More siblings!</button>
    </div>
  );
}

function State3() {
  const [state, setState] = useState({ age: 27, sibling: 1 });

  const handleClick = (val) => {
    setState({
      ...state,
      [val]: state[val] + 1,
    });
  };
  const { age, sibling } = state;
  return (
    <div className="App">
      <h2>Today, I am {age} years old!</h2>
      <h2>I have {sibling} siblings!</h2>
      <button onClick={handleClick.bind(null, "age")}>Older!</button>
      <button onClick={handleClick.bind(null, "sibling")}>
        More siblings!
      </button>
    </div>
  );
}

// const StateFromFn = () => {
//   const [token] = useState(() => {
//     let token = window.localStorage.getItem("my-token");
//     return token || "default#-token#"
//   })

//   return <div>Token is {token}</div>
// }

function State4() {
  const [value, setValue] = useState(0);
  const str = '<button onClick={() => setValue((prevCount) => prevCount - 1)}>'
  return (
    <div>
      <div className="App">
        <h2>Count value is {value}</h2>
        <button onClick={() => setValue(0)}>Reset</button>
        <button onClick={() => setValue((prevCount) => prevCount + 1)}>
          +
        </button>
        <button onClick={() => setValue((prevCount) => prevCount - 1)}>
          -
        </button>
      </div>
      <div>
        <p className="description">
          <span className="code">setState</span> can take functions inside like 
          <br/>
          <span className="code" style={{color: "darkblue"}}> {str} </span>
        </p>
      </div>
    </div>
  );
}

function State() {
  return (
    <div>
      <State1 />
      <State2 />
      <p className="breakline"></p>
      <State3 />
      <p className="breakline"></p>
      <State4 />
    </div>
  );
}

export default State;
