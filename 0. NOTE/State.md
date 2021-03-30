# State

props are *emmutable*.
to change the data, it has to use the **state**.
:warning: it has to be class based.

```javascript
import React, {Component} from "react" 

class App extends Component {
    constructor() {
        super()
        this.state = {
            answer: "Dongha"        // I can always change the value of the state.
        }
    }

    render() {
        return (
            <div> 
                <h1>My name is {this.state.answer}</h1>
                <ChildComponent answer={this.state.answer}/>     // pass the data as props
            </div>
        )
    }
}
```


---

```javascript
// App.js
import React from "react";
import TodoItem from "./components/TodoItem";
import todosData from "./data/todosData";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: todosData,
    };
  }

  render() {
    this.state.todos = todosData.map((todos) => (
      <TodoItem key={todos.id} text={todos.text} completed={todos.completed} />
    ));

    return <div className="todo-list">{this.state.todos}</div>;
  }
}

export default App;
```

```javascript
// TodoItem
import React, { Component } from "react";

class TodoItem extends Component {

  render() {
    return (
      <div className="todo-item">
        <input type="checkbox" name="" id="" checked={this.props.completed} />
        <p>{this.props.text}</p>
      </div>
    );
  }
}

export default TodoItem;
```

---

## Updating State

**```setState```** : it is basically changing the whole property instead of changing a value.

```javascript
import React from "react";
import TodoItem from "./components/TodoItem";
import todosData from "./data/todosData";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: todosData,
    };
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(id) {
    this.setState((prevState) => {
      const updatedTodos = prevState.todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo
      })

      return {
        todos: updatedTodos
      }
    })
  }

  render() {
    const todosData = this.state.todos.map((todos) => (
      <TodoItem handleChange={this.handleChange} key={todos.id} id={todos.id} text={todos.text} completed={todos.completed} />
    ));

    return <div className="todo-list">{todosData}</div>;
  }
}

export default App;

```
In ```handleChange```, ```setState``` calls ```prevState```, which is the saved state property, and overwrites the whole array using ```map``` function