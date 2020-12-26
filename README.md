
## Table of Contents 
- [Table of Contents](#table-of-contents)
- [Why React?](#why-react)
- [start](#start)
  - [Create / Functional Components](#create--functional-components)
  - [Seperate Component Files](#seperate-component-files)

---
## Why React? 
- speed --> Virtual DOM
- Reusable Web Component
- maintained by Facebook

---

## start

```shell
npx create-react-app my-app     # my-app 이라는 react project 생성

cd my-app
code .              # visual studio 실행
npm start           # localhost:3000으로 실행
```
---

### Create / Functional Components 

index.js
```javascript
import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";

// function을 또한 만들 수 있다.
function MyApp() {
  return (
  <div>
    <h1>Dongha Kang</h1>
      <ul>
        <li>Los Angeles</li>
        <li>Jeju Island</li>
        <li>Hong Kong</li>
      </ul>
  </div>
  )
}

// JSX
ReactDOM.render(
    <MyApp />,          // function을 사용한다.
    document.getElementById("root")
);

reportWebVitals();
```

### Seperate Component Files

App.js
```javascript
import React from "react";      // 리액트를 부른다

// function을 또한 만들 수 있다.
function MyApp() {
    return (
    <div>
      <h1>Dongha Kang</h1>
        <ul>
          <li>Los Angeles</li>
          <li>Jeju Island</li>
          <li>Hong Kong</li>
        </ul>
    </div>
    )
  }
  
export default MyApp          // 사용할 수 있도록 내보내기를 한다.
```

index.js
```javascript
import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import MyApp from "./App.js"      // function 위치

// JSX
ReactDOM.render(
    <MyApp />,
    document.getElementById("root")
);

reportWebVitals();
```

> 여기서 하나 이상의 많은 파일들안에 또 다른 파일을 임포트 할 수 도 있는데, 그것을 바로 Nested Component 라고 사용하며, 상당히 많이 사용 되는 기술이다. 