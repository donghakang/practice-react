# React Intro

<!-- - Components: Core building block to use reusable blocks.
- JSX: React Priority wrapper, able to use html syntax
- Props: Tool to pass the data.
- State: Maintain and change data
- Lifecycle Method: timing events -->

## Installation / Begin
```shell
npx create-react-app <React App Name goes here>
cd <React App Name goes here>
npm start        # or yarn start
```

## Why React?
- Speed: Virtual DOM
- Reusable Web components
- Maintained by Facebook

## ReactDOM & JSX
```javascript
import React from "react"
import ReactDOM from "react-dom"

// ReactDOM.render(<WHAT I WANT TO RENDER>, <WHERE DO I WANT TO RENDER>)
ReactDOM.render(<h1>Hello World!</h1>, document.getElementById("root"))
```

```<h1></h1>``` is **JSX** syntax. needs to add ```import React from "react"```

:warning: cannot have multiple JSX
:x: : ```<h1></h1><p></p>```
:o: : ```<div><h1></h1><p></p></div>```

## Functional Components
To create reusable web components

```javascript
import React from "react"
import ReactDOM from "react-dom"

function MyApp() {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}

ReactDOM.render(
    <MyApp />, 
    document.getElementById("root")
)
```


## Parent/Child Components

```javascript
import React from "react"
import ReactDOM from "react-dom"

import App from "./App"

RenderDOM.render(
    <App />,
    document.getElementById("root");
)
```

```javascript
// App.js

import React from "react"

function App() {
    return (
        <h1>Hello World</h1>
    )
}

// const App = () => <h1>Hello World</h1>

export default App 
```

:warning: **Syntaxing**
```<App />```: Capital letter if it is ***Component***
```<div />```: html syntax

```javascript
// Footer.js
import React from "react"

function Footer() {
    return (
        <footer>
            <div>
                Footer goes here.
            </div>
        </footer>
    )
}

export default Footer
```

```javascript
import React from 'react';
import './App.css';

import MainContent from './components/MainContent';
import Navbar from './components/Navbar';
import Footer from './components/Footer';



function App() {
  return (
    <>
      <Navbar/>
      <MainContent/>
      <Footer/>
    </>
  );
}

export default App;
```


## Styling
```javascript
import React from 'react';

function Header() {
    return (
        <div className="navbar">This is Header</div>
    )
}
```

**Inline styling**
```javascript
function Header() {
    return ( 
        <h1 style={{color: "#FF8C00", backgroundColor:"#00FFFF"}}> Hello {firstName + "  " + lastName} </h1> 
    )
}

const styles = {
    color: "#FF8C00", 
    backgroundColor:"#00FFFF",
    fontSize: 20 + 'em'
}

function Header() {
    return ( 
        <h1 style={styles}> Hello {firstName + "  " + lastName} </h1> 
    )
}


```

```class```is reserved. (```Moreover, document.getElementById('..').className += "..."``` is used.)
and change rest is *```.css```* file


## Javascript and Back
```javascript
import React from "react"
import ReactDOM from "react-dom"

function App() {
    const firstName="Dongha"
    const lastName="Kang"
    
    return ( 
        <h1> Hello {firstName + "  " + lastName} </h1>  // Hello {`${firstName} ${lastName}`} 
         
    )
}
export default App
```