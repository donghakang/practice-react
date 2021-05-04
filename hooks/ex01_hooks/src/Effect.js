import React, { useState, useEffect } from "react";

const BasicEffect = () => {
  const [age, setAge] = useState(0);
  const handleClick = () => setAge(age + 1);

  // useEffect()
  useEffect(() => {
    document.title = "You are " + age + " years old";
  });

  return (
    <div className="App">
      <h2>Look at the title of the current tab in your browser</h2>
      <button onClick={handleClick}>Update title</button>
    </div>
  );
};

const EffectCleanup = () => {
  // useEffect()
  useEffect(() => {
    const clicked = () => {
      console.log("window clicked");
    };
    window.addEventListener("click", clicked);

    return () => {
      window.removeEventListener("click", clicked);
    };
  }, []);

  return (
    <div className="App">
      <h2>
        When you click the window, you'll find a message logged to the console
      </h2>
    </div>
  );
};

// 두개 이상의 Effect를 가질수 있다.
const MultipleEffects = () => {
  useEffect(() => {
    const clicked = () => console.log("window clicked!!");
    window.addEventListener("click", clicked);

    return window.removeEventListener("click", clicked);
  }, []);

  useEffect(() => {
    console.log("another useEffect call running ... ");
  }, []);

  return (
    <div className="App">
      <h2>
        Multiple <span className="code">useEffect</span> calls can happen within
        a functional component. See the console.log
      </h2>
    </div>
  );
};

const SkippingEffects = () => {
  const [randomNumber, setRandomNumber] = useState(0);
  const [effectLogs, setEffectLogs] = useState([]);

  useEffect(() => {
    setEffectLogs((prevEffectLogs) => [
      ...prevEffectLogs,
      "effect fn has been invoked",
    ]);
  }, [randomNumber]);

  return (
    <div className="App">
      <h2>{randomNumber}</h2>
      <button onClick={() => setRandomNumber(Math.random())}>
        Generate Random Number!
      </button>
      <div>
        {effectLogs.map((effect, index) => (
          <div key={index}>{"🍔".repeat(index) + effect}</div>
        ))}
      </div>
    </div>
  );
};

export default function Effect() {
  return (
    <div>
      <BasicEffect />
      <div className="breakline" />
      <EffectCleanup />
      <div className="breakline" />
      <MultipleEffects />
      <div className="breakline" />
      <SkippingEffects />
    </div>
  );
}
