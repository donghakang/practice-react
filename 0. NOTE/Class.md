# Class Component

functional based component
```javascript
import React from "react"

function App() {
    return (
        <div>
            <h1>Functional Component</h1>
        </div>
    )
}

export default App
```

class component
```javascript
import React from "react"

class App extends React.Component {
    render() {
        return (
            <div>
                <h1>Functional Component</h1>
            </div>
        )
    }
}

export default App
```

## Intro

```jsx
import React from "react"

class App extends React.Component {

    myOwnMethod() {
        // any display logic
    }

    render() {
        const date = new Date();        // what exactly is going to show up goes here.
                                        // Display logic
        const style = this.myOwnMethod();
        return (
            <div>
                <h1>Functional Component</h1>
                <h2>{this.props.key}</h2>   // class components need this.props .. to call props. 
            </div>
        )
    }
}

export default App
```

---

ex)
```javascript
/*

Challenge:
1. Convert all 3 components to be class-based
2. Fix the small bug

*/

import React, {Component} from "react"
import ReactDOM from "react-dom"

// #1
class App extends React.Component {
    render() {
        return (
            <div>
                <Header username="Dongha"/>
                <Greeting />
            </div>
        )    
    }
}

// #2
class Header extends React.Component {
    render() {
        return (
            <header>
                <p>Welcome, {this.props.username}!</p>
            </header>
        )    
    }   
}

// #3
class Greeting extends Component {
    getTime(hours) {
        let timeOfDay
        if (hours < 12) {
            timeOfDay = "morning"
        } else if (hours >= 12 && hours < 17) {
            timeOfDay = "afternoon"
        } else {
            timeOfDay = "night"
        }
        return timeOfDay
    }
    
    render() {
        const date = new Date()
        const hours = date.getHours()
        
        return (
            <h1>Good {this.getTime(hours)} to you, sir or madam!</h1>
        )
    }
}

ReactDOM.render(<App />, document.getElementById("root"))

```