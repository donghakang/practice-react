# Conditional Rendering


### Example 1
```javascript
import React, {Component} from "react"
import Conditional from "./Conditional"

class App extends Component {
    constructor() {
        super()
        this.state = {
            isLoading: true
        }
    }
    
    componentDidMount() {
        setTimeout(() => {
            this.setState({
                isLoading: false
            })
        }, 1500)
    }       // when the state is changed, it will re-render the item

    render() {
        return (
            <div>
                <Conditional isLoading={this.state.isLoading}/>
            </div>
        )
    }
}

export default App
```

```javascript
import React from "react"

function Conditional(props) {
    console.log(props.isLoading)
    if (props.isLoading) {
        return (
            <h1>Loading...</h1>
        )
    } else {
        return (
            <h1>Hello World!!!</h1>
        )
    }
}

export default Conditional


// or... 

import React from "react"

function Conditional(props) {
    return (
        <div>
            {props.isLoading ? <h1>Loading... </h1> : <h1>Hello World!!!</h1>}
        </div>
    )
}

export default Conditional
```

Code above will print *Loadng...* for 1.5seconds and changes to *Hello World!!!*


### Example 2

```javascript
import React, { Component } from "react"

class App extends Component {
    constructor() {
        super();
        this.state = {
            login: false
        }
        this.handleClick = this.handleClick.bind(this)
    }
    
    // watch out for setState... 
    handleClick() {
        this.setState((prevState) => {
            return {
                login: !prevState.login
            }
        })
    }
    render() {
        return (
            <div>
                {!this.state.login ? "Press to Login" : "Press to Logout"}
                <br />
                <button onClick={this.handleClick}>{!this.state.login ? "Login" : "Logout"}</button>
            </div>
        )

    }
}

export default App

```