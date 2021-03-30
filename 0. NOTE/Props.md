# Props

```html
<a>This is a link</a>
<input />
<img />
```

Those three components needs properties such as `href` `src` and so on to work properly. That is a similiar concept with **_props_**


## Basic Props

```javascript
// App.js
import React from "react"
import Contact from "./Contact"

function App() {
    return (
        <Contact/>
        <Contact/>
        <Contact/>
        <Contact/>
    )
}

// Contact
import React from "react"

function Contact() {
    return (
        <div>
            <img src=""/>
            <h3>Dongha Kang</h3>
            <p>Phone: (010)-0000-0000</p>
            <p>Email: dkang0602@gmail.com</p>
        </div>
    )
}
```

By using **_props_** we can pass the properties

```javascript
// App.js
import React from "react"
import Contact from "./Contact"

function App() {
    return (
        <Contact 
            name="Dongha Kang" 
            imgUrl=".."  
            phone="(010)-0000-0000" 
            email="dkang0602@gmail.com"
        />
        <Contact ... />
        <Contact ... />
        <Contact ... />
    )
}


// Contact
import React from "react"

function Contact(props) {
    // props --> {name: "Dongha Kang", imgUrl: "...", phone="(010) 0000 0000, email: "dkang0602@gmail.com"}
    return (
        <div>
            <img src={props.imgUrl}/>
            <h3>{props.name}</h3>
            <p>Phone: {props.phone}</p>
            <p>Email: {props.email}</p>
        </div>
    )
}
```


```javascript
// App.js
import React from "react"
import Contact from "./Contact"

function App() {
    return (
        <Contact 
            contact={name="Dongha Kang", imgUrl="..", phone="(010)-0000-0000", email="dkang0602@gmail.com"}
        />
        <Contact ... />
        <Contact ... />
        <Contact ... />
    )
}


// Contact
import React from "react"

function Contact(props) {
    // props --> {name: "Dongha Kang", imgUrl: "...", phone="(010) 0000 0000, email: "dkang0602@gmail.com"}
    return (
        <div>
            <img src={props.contact.imgUrl}/>
            <h3>{props.contact.name}</h3>
            <p>Phone: {props.contact.phone}</p>
            <p>Email: {props.contact.email}</p>
        </div>
    )
}
```


## Mapping Components
```javascript
function App() {
    const nums = [1,2,3,4,5,6,7,8,9]
    const doubled = nums.map(function (num) {
        return num * 2
    })
    console.log(doubled)        // [2,4,6,8,10,12,14,16,18]
}
```

By using these method ```map``` we can obtain Data easily and set up in the components.

```javascript
import apiData from "./apiData"
import Info from "./Info"

function App() {
    // apiData.map(data => {
    //     return (
    //         <Info key={data.id} description={data.description} date={data.date} />
    //     )
    // })

    const dataComponents = apiData.map(data => <Info id={data.id} description={data.description} date={data.date} />)

    return (
        <>
            {dataComponents}
        </>
    )
}

```


ex)
```javascript
// vschoolProducts.js
const products = [
    {
        id: "1",
        name: "Pencil",
        price: 1,
        description: "Perfect for those who can't remember things! 5/5 Highly recommend."
    },
    {
        id: "2",
        name: "Housing",
        price: 0,
        description: "Housing provided for out-of-state students or those who can't commute"
    },
    {
        id: "3",
        name: "Computer Rental",
        price: 300,
        description: "Don't have a computer? No problem!"
    },
    {
        id: "4",
        name: "Coffee",
        price: 2,
        description: "Wake up!"
    },
    {
        id: "5",
        name: "Snacks",
        price: 0,
        description: "Free snacks!"
    },
    {
        id: "6",
        name: "Rubber Duckies",
        price: 3.50,
        description: "To help you solve your hardest coding problems."
    },
    {
        id: "7",
        name: "Fidget Spinner",
        price: 21.99,
        description: "Because we like to pretend we're in high school."
    },
    {
        id: "8",
        name: "Sticker Set",
        price: 14.99,
        description: "To prove to other devs you know a lot."
    }
]

export default products

```

```javascript
// Product.js
import React from "react"

function Product(props) {
    return (
        <div>
            <h1>{props.name}</h1>
            <h2>${props.price}</h2>
            <h3>{props.description}</h3>
            <hr/>
        </div>
    )    
}

export default Product
```

```javascript
// App.js
import React from "react"
import productsData from "./vschoolProducts"
import Product from "./Product"

function App() {
  const productComponents = productsData.map(product => <Product key={product.id} name={product.name} price={product.price} description={product.description}/>)
  return (
    <div>
        {productComponents}
    </div>
  )
}

export default App
```