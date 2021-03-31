import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

/*
function Letter(props) {
  const words = ["S", "ㄱ", "!@", "^$", "Z", "K", "ㄹ", "k", "$$"];

  const [word, setWord] = useState(props.start);
  const [intervalId, setIntervalId] = useState("");
  const [step, setStep] = useState(0);

  const tick = () => {
    setStep((stepSize) => stepSize + 1);
    setWord(() => words[Math.floor(Math.random() * words.length)]);
    console.log(step)
    if (step > 30) {
      clearInterval(intervalId);
      setStep(() => 0)
    }
  };

  const mouseOver = () => {
    const id = setInterval(() => {
      tick();
    }, 50);
    setIntervalId(() => id);
  };

  const mouseOut = () => {
    clearInterval(intervalId);
  };

  return (
    <div className="word" onMouseEnter={mouseOver} onMouseOut={mouseOut}>
      {word}
    </div>
  );
}

export default Letter;

*/


export default class Letter extends Component {
    
  constructor(props) {
    super(props);
    this.state = { 
        current: props.start,
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

    if (this.state.step == 10) {
        clearInterval(this.interval)
        this.setState({
            step: 0
        })
    }
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
        current: this.props.end,
        step: 0
    })
  }

  render() {
    return (
      <div className="word"
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

