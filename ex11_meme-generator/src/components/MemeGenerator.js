import React, { Component } from "react";

class MemeGenerator extends Component {
  constructor() {
    super();
    this.state = {
      topText: "",
      bottomText: "",
      image: "http://i.imgflip.com/1bij.jpg",
      allMeme: [],
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    fetch("https://api.imgflip.com/get_memes")
      .then((response) => response.json())
      .then((response) => {
        const { memes } = response.data;
        this.setState({ allMeme: memes });
      });
  }

  handleSubmit(event) {
    event.preventDefault();

    const randNum = Math.floor(Math.random() * this.state.allMeme.length)
    const randImg = this.state.allMeme[randNum].url

    this.setState({ image: randImg })
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <div>
        <form className="meme-form" onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="topText"
            placeholder="Top text"
            value={this.state.topText}
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="bottomText"
            placeholder="Bottom text"
            value={this.state.bottomText}
            onChange={this.handleChange}
          />
          <button>Generate</button>
        </form>
        <div className="meme">
          <img src={this.state.image} alt="meme image" />
          <h2 className="top">{this.state.topText}</h2>
          <h2 className="bottom">{this.state.bottomText}</h2>
        </div>
      </div>
    );
  }
}

export default MemeGenerator;
