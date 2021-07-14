# Redux Toolkit

react-redux 를 좀 더 쉽게 이용 할 수 있게끔 도와주는 library.

---

> ***why Redux ?***
> 다른 Component들 끼리 state variable를 공유 하기 위해서 사용된다. (State management Library)


### 🚀 Installation
```
yarn add react-redux @reduxjs/toolkit
```

### 📝 What is redux

**State** 
    - where you keep the variable and initial state
    - *count = 0*

**Actions**
    - react components call actions if they want to change the state.
    - *increment, decrement*

**Reducer**
    - actually does something with state when actions are called.
    - *count += 1, count -= 1*

👍🏻 Can call state/actions/reducers at the same time using *createSlice*    


---

### 🏋️‍♀️ Let's work

```js
/**
 * index.js
 * 
 * PROVIDER
 * 사용자가 App 안에 있는 모든 곳에서 store를 접근 할 수 있게끔, Provider로 묶어줄 수 있는 역할을 한다.
**/
import store from "./redux/store";
import { Provider } from "react-redux";

ReactDOM.render(
  <Provider store={store}>                 
    <App />
  </Provider>,
  document.getElementById("root")
);
```

```js
/**
 * store.js
 * 
 * STORE
 * @reduxjs/toolkit을 이용하여 최초 store 세팅을 해준다.
 * reducer는 어떤 reducer를 사용하는지 설정만 해주는 역할이다.
 **/
import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counter';

export default configureStore({
    reducer: {counter: counterReducer}
})
```

```js
/**
 * counter.js
 * 
 * REDUCER/ACTIONS/STATE
 * @reduxjs/toolkit을 이용해서 Slice를 불러오는데, 이 Slice는 state, reducers, actions을 한 번에
 * 내보내기 할 수 있다.
 **/
import { createSlice } from "@reduxjs/toolkit";

// Slice can define, state / reducers / actions at the same time
export const counterSlice = createSlice({
  name: "counter",
  initialState: {                           // 최초 state
    count: 0,
  },
  reducers: {                               // redux가 사용하는 reducer
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    incrementByAmount: (state, action) => {
      state.count += action.payload.by;         // action.payload로 dispatch(action) 의 argument를 불러온다.
    },
  },
});

// reducer안에 action들을 보여준다.
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

// export actual reducer
export default counterSlice.reducer;
```

```js
/**
 * App.js
 * 
 * 활용
 * useSelector 를 이용해서 slice (reducer/ state/ action) 을 불러오고
 * useDispatch 를 이용해서 action을 불러서 값을 변경시켜준다.
 **/
import { useDispatch, useSelector } from "react-redux";

import "./App.css";
import { decrement, increment, incrementByAmount } from "./redux/counter";

function App() {
  // const count = useSelector(state => state.counter.count)
  const { count } = useSelector((state) => state.counter);  // --> counterSlice에 이름을 불러와서 Slice를 호출
   const dispatch = useDispatch();                          // --> dispatch 설정
  return (
    <div className="App">
      <h1> The count is {count}</h1>
      <button onClick={() => dispatch(increment())}>increment</button>      // --> dispatch 안에 action 부르기
      <button onClick={() => dispatch(decrement())}>decrement</button>
      <button onClick={() => dispatch(incrementByAmount({'by': 23}))}>increment by 23</button>
    </div>
  );
}

export default App;
```