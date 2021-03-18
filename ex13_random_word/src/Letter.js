import React, { Component } from "react";
import ReactDOM from "react-dom";

export default class Letter extends Component {
    
  constructor(props) {
    super(props);
    this.state = { 
        current: "S",
        words: ['S', 'ㄱ', '!@', '^$', 'Z', 'K', 'ㄹ', 'k', '$$'],
        count: 9,
        step: 0
    };
    // this.current = this.current.bind(this);
  }


  componentDidMount() {
    // this.interval = setInterval(() => console.log('hello'), 1000);
  }

  componentWillUnmount() {
    // clearInterval(this.state.current);
  }

  tick() {
    this.state.step += 1
    this.setState({
        current: this.state.words[this.state.step % this.state.count]
    });
  }

  printStart = function() {
    
    this.interval = setInterval(() => {
        this.tick()
    }, 50);

    // this.setState({
    //     current: "A"
    // })
  }

  printEnd = () => {
    clearInterval(this.interval)
    this.setState({
        current: "C"
    })
  }

  render() {
    return (
      <div 
        className="word"
        onMouseEnter={
            () => this.printStart()
        }
        onMouseOut= {
            () => this.printEnd()
        }
        >   
        {this.state.current}
      </div>
    );
  }
}
