# Fetching Data from an API

```javascript
import React, {Component} from "react"

// https://swapi.dev/
class App extends Component {
    constructor() {
        super()
        this.state = {
            person: {}
        }
    }
    
    componentDidMount() {
        fetch("https://swapi.dev/api/people/1/")
            .then(response => response.json())
            .then(data => {
                this.setState({
                    person: data
                })
            })
    }
    
    render() {
        return (
            <div>
                <p>{this.state.person.name} </p>
            </div>
        )
    }
}

export default App

```

```fetch```: Get the data, 
```.then```: Do the code after fetch


To add Loading ... in side here. Add State ```loading``` in it.

```javascript
import React, { Component } from "react"

class App extends Component {
    constructor() {
        super()
        this.state = {
            loading: false,
            person: {}
        }
    }

    componentDidMount() {
        this.setState({
            loading: true                       // default variable
        })
        fetch("https://swapi.dev/api/people/1/")
            .then(response => response.json())
            .then(data => {
                this.setState({
                    loading: false,             // change the state, re render
                    person: data
                })
            })
    }

    render() {
        const text = this.state.loading ? "loading..." : this.state.person.name     // render everytime it calls componentDidMount
        return (
            <div>
                <p>{text}</p>
            </div>
        )
    }
}

export default App

```