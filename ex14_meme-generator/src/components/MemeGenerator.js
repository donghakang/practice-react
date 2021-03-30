import React, { Component } from "react";

class MemeGenerator extends Component {
  constructor() {
    super();
    this.state = {
        topText: "",
        bottomText: "",
        randomImg: "http://i.imgflip.com/1bij.jpg",
        allMemeImgs: []
    };
  }

  componentDidMount() {
      fetch("https://api.imgflip.com/get_memes")
        .then(response => response.json())
        .then(response => {
            const {memes} = response.data
            this.setState({allMemeImgs: memes})
        })
  }

  handleChange(event) {
    const {name, value} = event.target
      this.setState({
          [name] : value
      })
  }

  render() {
    return (
        <div>
            <form className="meme-form">
                <input type="text" onChange={this.handleChange} placeholder="Enter Top Text here" name="topText" value={this.state.topText}/>
                <input type="text" onChange={this.handleChange} placeholder="Enter Bottom Text here" name="bottomText" value={this.state.bottomText}/>
                <button>Generate</button>
            </form>
        </div>
    );
  }
}

export default MemeGenerator;
