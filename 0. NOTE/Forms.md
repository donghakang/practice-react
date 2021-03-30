# Forms

in Vanilla js, we often have forms in html then checks them in Javascript code.
However, in React, we often checks every key strokes of the user and checks the form inputs.

#### Text input

```javascript
import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      firstName: e.target.value,
    });
  }

  render() {
    return (
      <div>
        <form>
          <label>
            Name:
            <input
              onChange={this.handleChange}
              type="text"
              name="name"
              placeholder="Name"
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
        <h1>{this.state.firstName}</h1>
      </div>
    );
  }
}

export default App;
```

For multiple inputs ...

```javascript
import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value, // event.target.name --> has to be same as state name
      // firstName == firstName
      // to have different name... use value property
    });
  }

  render() {
    return (
      <div>
        <form>
          <label>
            First:
            <input
              onChange={this.handleChange}
              type="text"
              name="firstName"
              placeholder="Name"
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
        <form>
          <label>
            Last:
            <input
              onChange={this.handleChange}
              type="text"
              name="lastName"
              placeholder="Name"
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
        <h1>
          {this.state.firstName} {this.state.lastName}
        </h1>
      </div>
    );
  }
}

export default App;
```

---

```javascript
<input
  onChange={this.handleChange}
  type="text"
  name="lastName"
  placeholder="Name"
/>
```

<div style="width:100%; text-align:center">⬇️</div>
```js
<input onChange={this.handleChange} value={this.state.firstName} type="text" name="lastName" placeholder="Name" />
```

---

```javascript
handleChange(e) {
    this.setState({
        [e.target.name]: e.target.value
    })
}
```

<div style="width:100%; text-align:center">⬇️</div>
```javascript
handleChange(e) {
    const {name, value} = e.target
    this.setState({
        [name]: value
    })
}
```
---

#### Other Inputs

- `<textarea/>`

```javascript
<textarea value={"Some default value"} />
```

<br/>

- `<input type="checkbox"/>`

```javascript
<input type="checkbox" checked={this.state.isFriendly} onChange={this.handleChange}/>
```

```javascript
handleChange(e) {
    const {name, value, type, checked} = e.target
    type === "checkbox" ? this.setState({[name]: checked}) : this.setState({[name]: value})
}
```
<br/>

- `<input type="radio"/>`

```javascript
<input type="radio" value="female" checked={this.state.gender === "male"} onChange={this.handleChange}/>
<input type="radio" value="female" checked={this.state.gender === "female"} onChange={this.handleChange}/>
```
<br/>

- `<select/> <option/>`
```javascript
<select value={this.state.favColor} onChange={this.handleChange} name="favColor">
    <option value="blue">blue</option>
    <option value="red">red</option>
    <option value="green">green</option>
</select>
```


**Formik**: library that deals with forms in react


```javascript
// Big example 

import React, { Component } from "react"

/**
 * Challenge: Wire up the partially-finished travel form so that it works!
 * Remember to use the concept of controlled forms
 * https://reactjs.org/docs/forms.html
 * 
 * All information should be populating the text below the form in real-time
 * as you're filling it out
 * 
 * This exercise is adapted from the V School curriculum on vanilla JS forms:
 * https://coursework.vschool.io/travel-form/
 * 
 * All of our challenges and learning resources are open for the public
 * to play around with and learn from at https://coursework.vschool.io
 */

class App extends Component {
    constructor() {
        super()
        this.state = {
            firstName: "",
            lastName: "",
            age: "",
            gender: "",
            destination: "",
            isVegan: false,
            isKosher: false,
            isLactoseFree: false
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        const { name, value, type, checked } = event.target;
        type === "checkbox" ? 
            this.setState({
              [name]: checked  
            })
             : 
        this.setState({
            [name]: value
        })

    }

    handleSubmit(event) {

    }

    render() {
        return (
            <main>
                <form onSubmit={this.handleSubmit}>
                    <input onChange={this.handleChange} value={this.state.firstName} name="firstName" placeholder="First Name" /><br />
                    <input onChange={this.handleChange} value={this.state.lastName} name="lastName" placeholder="Last Name" /><br />
                    <input onChange={this.handleChange} value={this.state.age} name="age" placeholder="Age" /><br />

                    <label>
                        <input type="radio" onChange={this.handleChange} name="gender" value="male" checked={this.state.gender === "male"} /> Male
                        <input type="radio" onChange={this.handleChange} name="gender" value="female" checked={this.state.gender === "female"} /> Female
                    </label>



                    <br />

                    {/* Create select box for location here */}
                    <select value={this.state.destination} name="destination" onChange={this.handleChange}>
                        <option value="Seoul">Seoul</option>
                        <option value="Busan">Busan</option>
                        <option value="Jeju">Jeju</option>
                    </select>

                    <br />

                    <label>
                        <input
                            type="checkbox"
                            name="isVegan"
                            onChange={this.handleChange}
                            checked={this.state.isVegan} /> Vegan?
                        <input
                            type="checkbox"
                            name="isKosher"
                            onChange={this.handleChange}
                            checked={this.state.isKosher} /> Kosher?
                        <input
                            type="checkbox"
                            name="isLactoseFree"
                            onChange={this.handleChange}
                            checked={this.state.isLactoseFree} /> LactoseFree?
                    </label>


                    <br />

                    <button>Submit</button>
                </form>
                <hr />
                <h2>Entered information:</h2>
                <p>Your name: {this.state.firstName + " " + this.state.lastName}</p>
                <p>Your age: {this.state.age}</p>
                <p>Your gender: {this.state.gender}</p>
                <p>Your destination: {this.state.destination}</p>
                <p>
                    Your dietary restrictions:
                    <br/>
                    Vegan: {this.state.isVegan ? "Yes" : "No"}
                    <br/>
                    Kosher: {this.state.isKosher ? "Yes" : "No" }
                    <br/>
                    Lactose Free: {this.state.isLactoseFree ? "Yes" : "No"}
                    <br/>
                </p>
            </main>
        )
    }
}

export default App

```