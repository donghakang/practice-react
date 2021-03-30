# Hooks
- v16.8 

> "Hook into" state and lifecycle methods of components without using classes

> Only use functional components across the board.

> Improve readability and organization of components.

--- 

## useState
**previous**
```javascript
import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { answer: "Yes" };
  }
  render() {
    return (
      <div>
        <h1>Is state import? {this.state.answer} </h1>
      </div>
    );
  }
}

export default App;
```

**useState**
```javascript
import React, { useState } from "react";

function App() {
    const value = useState("Yes")
    return (
        <div>
            <h1>Is state important to know? {value[0]}</h1>
        </div>
    )
}

export default App;
```
* why array?
    * useState always returns array so we have to destruct it by using array. (similar with object...)
```javascript
import React, { useState } from "react";

function App() {
    const [ value ] = useState("Yes")
    return (
        <div>
            <h1>Is state important to know? {value}</h1>
        </div>
    )
}

export default App;
```
* then what is in value[1] ?
    *  function! for setState

### setState
```javascript
function App() {
    const [ count, setCount ] = useState(0)
    
    function increment() {
        setCount(prevCount => prevCount + 1)
    }
    
    function decrement() {
        setCount((prevCount) => prevCount - 1)
    }
    
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={increment}>Increase!</button>
            <button onClick={decrement}>Decrease!</button>
        </div>
    )
}

export default App

```

---

## useEffect
> Component lifecycle. ```componentDidMount()```, ```componentDidUpdate()```, ```componentWillUnmount()```

- Side effects?
    - Network request
    - Manual DOM manipulation
    - Event listeners or timeouts and intervals

```useEffect()``` will call every time it renders. 
```javascript
useEffect(() => {
    // code goes here .. This code will run infinitely!
})
```

```useEffect()``` second variable is the array that holds the value that, when the value changes, it re-renders.  

```javascript
useEffect(() => {
    // when count variable changes... it runs.
}, [count])
```

```javascript
useEffect(() => {
    // when count variable changes... it runs.
    // document.addEventListener(..)
    // subscription, socket ...         --> these are the side effects
}, [count])
```

to build some type of stop watch... use ```setInterval```
```javascript
useEffect(() => {
    setColor(randomcolor())
    setInterval(() => {console.log("hello")}, 1000)           // fn: function,    1000: ms
}, [count])
```


You can use ```useEffect()``` multiple times
```javascript
useEffect(() => {
    setColor(randomcolor())
}, [count])

useEffect(() => {
    setInterval(() => {                         // only runs one in a second
        setCount(prevCount => prevCount + 1)    
        }, 1000)
}, [])
```


```componentWillUnmount``` is same as return in ```useEffect()```
```javascript
useEffect(() => {
    const intervalId = setInterval(() => {
        setCount(prevCount => prevCount + 1)
    }, 1000)
    return () => clearInterval(intervalId)
}, [])
```