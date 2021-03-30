# Modern React

## 1. Bind
**previous**
```javascript
class App extends Component {
    constructor() {
        super()
        this.state = {
            firstName: ""
        }
        this.handleChange = this.handleChange.bind(this)
    }
    
    handleChange(event) {
        const { name, value } = event.target
        this.setState({
            [name]: value
        })
    }

    ...
```

**modern**
```javascript
class App extends Component {
    constructor() {
        super()
        this.state = {
            firstName: ""
        }
        // no more binding
    }
    
    // arrow function
    handleChange = (event) => {
        const { name, value } = event.target
        this.setState({
            [name]: value
        })
    }

    ...
```

---

## 2. State
**previous**
```javascript
class App extends Component {
    constructor() {
        super()
        this.state = {
            firstName: ""
        }
        this.handleChange = this.handleChange.bind(this)
    }
    
    handleChange(event) {
        const { name, value } = event.target
        this.setState({
            [name]: value
        })
    }

    ...
```
**modern**
```javascript
class App extends Component {
    // state can be global, no more constructor!
    state = {
        firstName: ""
    }
    
    
    handleChange(event) {
        const { name, value } = event.target
        this.setState({
            [name]: value
        })
    }

    ...
```

---

## Other modern/advanced React features/topics to learn:

 * Official React Context API - https://reactjs.org/docs/context.html
 * Error Boundaries - https://reactjs.org/docs/error-boundaries.html
 * render props - https://reactjs.org/docs/render-props.html
 * Higher Order Components - https://reactjs.org/docs/higher-order-components.html
 * React Router - https://reacttraining.com/react-router/core/guides/philosophy
 * React Hooks - https://reactjs.org/docs/hooks-intro.html
 * React lazy, memo, and Suspense - https://reactjs.org/blog/2018/10/23/react-v-16-6.html
