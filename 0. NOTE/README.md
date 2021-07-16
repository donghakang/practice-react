## Table of Contents

- [Table of Contents](#table-of-contents)
- [Why React?](#why-react)
- [start](#start)
  - [Create / Functional Components](#create--functional-components)
  - [Seperate Component Files](#seperate-component-files)
  - [Style (.css)](#style-css)
  - [Props](#props)
  - [Mapping Component](#mapping-component)
  - [Class-based Components](#class-based-components)

---

## Why React?

-   speed --> Virtual DOM
-   Reusable Web Component
-   maintained by Facebook

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
    );
}

// JSX
ReactDOM.render(
    <MyApp />, // function을 사용한다.
    document.getElementById("root")
);

reportWebVitals();
```

### Seperate Component Files

App.js

```javascript
import React from "react"; // 리액트를 부른다

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
    );
}

export default MyApp; // 사용할 수 있도록 내보내기를 한다.
```

index.js

```javascript
import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import MyApp from "./App.js"; // function 위치

// JSX
ReactDOM.render(<MyApp />, document.getElementById("root"));

reportWebVitals();
```

> 여기서 하나 이상의 많은 파일들안에 또 다른 파일을 임포트 할 수 도 있는데, 그것을 바로 Nested Component 라고 사용하며, 상당히 많이 사용 되는 기술이다.

---

### Style (.css)

`<div class="...">` (X)
`<div className="...">`(0)

```javascript
import React from "react";
import "./style.css";

function Header() {
    return (
        <header className="navbar">
            <h3>This is my header</h3>
        </header>
    );
}

export default Header;
```

```javascript
import React from "react";

function MyInfo() {
    const firstName = "Dongha";
    const lastName = "KANG";
    const date = new Date();

    const styles = {
        color: "#ff8c00",
        backgroundColor: "#666666",
        fontSize: "30px",
    };

    return (
        <div>
            <h1>{firstName + "  " + lastName}</h1>
            <h2>{`${firstName}  ${lastName}`}</h2>
            <h4 style={styles}>It's {date.getHours()}'o clock</h4>
            <ul>
                <li>Los Angeles</li>
                <li>Jeju Island</li>
                <li>Hong Kong</li>
            </ul>
        </div>
    );
}

export default MyInfo;
```

---

### Props 

class 와 비슷한 개념이라고 생각하면 편하다.

```javascript
// App.js

import React from "react";
import MenuItem from "./MenuItem.js";
function App() {
    return (
        <div className="App">
            <MenuItem link="https://www.github.com" name="GitHub" /> 
            <MenuItem link="https://www.naver.com" name="Naver"/>
            <MenuItem link="https://www.facebook.com" name="Facebook"/>
            <MenuItem link="https://www.instagram.com" name="Instagram"/>
        </div>
    );
}

export default App;
```

```javascript
// MenuItem

import React from "react"

// 보낸 props를 읽는다.
function MenuItem(props) {
    return (
        <div>
            <a href={props.link}>{props.name}</a>
        </div>
    )
}

export default MenuItem
```

---

### Mapping Component

다른 파일 안에다가 데이터를 집어넣고, (JSON 파일) 그것을 불러오는것이 가능하다.

```javascript 
    ...

    function App() {
        const nums = [1,2,3,4,5,6,7,8,9];
        const doubled = nums.map(function(num) {
            return num * 2;
        }) // doubled = [2, 4, 6, 8, 10, 12, 14, 16, 18]
        
        // 다른 데이터를 map을 이용해서, const variable로 저장한다.
        const dataComponents = data.map((data_item) => {
            return (
                <Data info={data_item.info} name={data_item.name} />
            )    
        })  

        return (
            <div>
                {dataComponents}
            </div>
        )

    }

    ...
```

**More examples**
```javascript
// Data file, todosData.js
const todosData = [
    {
        id: 1,
        text: "Take out the trash",
        completed: true
    },
    {
        id: 2,
        text: "Grocery shopping",
        completed: false
    },
    {
        id: 3,
        text: "Clean gecko tank",
        completed: true
    },
    {
        id: 4,
        text: "Mow lawn", 
        completed: true
    }, 
    {
        id: 5,
        text: "Catch up on Arrested Development",
        completed: false
    }
]

export default todosData
```
```javascript
// App.js
import React from "react";
import TodoItem from "./TodoItem";
import todosData from "./todosData";

function App() {
    const todosComponent = todosData.map(item => <TodoItem key={item.id} item={item}/>);

    return (
        <div className="todo-list">
            {todosComponent}
        </div>
    );
}

export default App;
```

```javascript
// TodoItem.js
function TodoItem(props) {
    return (
        <div className="todo-item">
            <input type="checkbox" checked={props.item.completed}/>
            <p>{props.item.text}</p>
        </div>
    );
}

export default TodoItem;
```

--- 
### Class-based Components

```javascript
//App.js
import React from "react";

function App() {
    return (
        <div>
            Hello World
        </div>
    );
}

export default App;
```

is ***IDENTICAL*** to

```javascript
import React from "react";

class App extends React.Component {
    render() {
        return (
            <div>
                Hello World
            </div>
        )
    }
}
export default App;
```

>> render() (display logic)을 사용하는 이유는 초단위로 무언가를 업데이트 시키거나, 

```javascript
import React from "react";

class App extends React.Component {

    yourMethodHere() {

    }

    render() {
        const style = this.yourMethodHere()     // function을 부르는것도 가능하다.
        return (
            <div>
                {this.props}                    // class component는 항상 this.를 붙여주어야한다.
            </div>
        )
    }
}
export default App;
```