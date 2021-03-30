# Lifecycle Method

<a href="https://engineering.musefind.com/react-lifecycle-methods-how-and-when-to-use-them-2111a1b692b1">More about lifecycle</a>
<a href="https://reactjs.org/blog/2018/03/29/react-v-16-3.html#component-lifecycle-changes">Deprecated and new lifecycle</a>

#### 1. render()
what gets render to the screen

#### 2. componentDidMount()
when it starts very first time. When the code was born. == ```onCreate()```
:arrow_right: Get the data i need to correctly display

allows us to run the code after when it first mounts to the DOM.
To get data from some where so the component can do something !

#### 3. componentWillReceiveProps() -- DEPRECATED
Similiar to ```componentDidMount()```. But also run when parent components decide to change the props.
```componentWillReceiveProps(nextProps)```

#### 4. shouldComponentUpdate() 
Does component needs to re-render? ```shouldComponentUpdate(nextProps, nextState)``` returning true, false

#### 5. componentWillUpdate() -- DEPRECATED

#### 6. componentWillUnmount() 
When it is closed, needs to clean up or tear down. 


```javascript
import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <div>code goes here</div>;
  }
}

export default App;

```

--- 

#### 1. getDerivedStateFromProps() 

```javascript
static getDerivedStateFromProps(props, state) {
    // return the new, updated state based upon the props
}
```

**Not used often.** When component need to take in coming props that is from the parent component, and needs to set it's own state based upon those props.

#### 2. getSnapshotBeforeUpdate()

allows you to create a backup of the current way things are. Saving some type of data (snapshot). again, Not super common.

