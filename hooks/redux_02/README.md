# Redux

**react-redux** is the state management tool in React

```
                    APP
    Search      Movie List      Login           <-- Data
                   Movie
```

In React, App -> Movie List -> Movie. It is in parent hierachy. If we want to use the movie data, we have to use props and go downwards.
What we can do is, we can have data in APP and go down to all the data.
:arrow_right: The problem with this is that if we have so many components. It is going have unnecessary props passing.
:arrow_right: **Redux** seclude the data to whole different place and make users able to grab data whenever the user wants to use.

```
                    APP                         |
    Search      Movie List      Login           |         DATA
                   Movie                        |
```

---

```shell
npm install redux react-redux
```

---

### Basic idea

- Store: globalized state
- Action: It is not actually doing action but more like declaring
- Reducer: check which action is acting and how to update
- Dispatch: send action to reducer and the core gets to update

```js
// action
const increment = () => {
  return {
    type: "INCREMENT",
  };
};

const decrement = () => {
  return {
    type: "DECREMENT",
  };
};

// reducer
const counter = (state = 0, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
  }
};

// store
let store = createStore(counter);

// display it in console
store.subscribe(() => console.log(store.getState()));

// dispatch
store.dispatch(increment());
store.dispatch(decrement());
store.dispatch(increment());

```

--- 
### Better code structure

```
 .
    Project             
    ├── reducers
    │   └──               # all the reducers go here (if > 1, then use combineReducers)  
    ├── actions
    │   └── index.js      # all the actions (export increment, export decrement goes here)
    ├── index.js          # main APP
    └── app.js            # what we see, what renders.
```

check ex18.1-redux for more info.