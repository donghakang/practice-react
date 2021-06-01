import React from 'react';
import ReactDOM from 'react-dom';           // 리액트 기본 라이브러리
import './index.css';                       // 인덱스 .ㅊㄴㄴ

/*
React is a declarative, efficient, and flexible JavaScript library for building user interfaces. 
It lets you compose complex UIs from small and isolated pieces of code called “components”.
*/

// props: a component that takes in parameters, returns a hierarchy of views to display via render method.
//      : 매개변수, render 함수를 통해 표시할 뷰 계층 구조를 반환 한다.

// render: 화면에서 보고자 하는것을 반환. 렌더링할 내용을 경량화한 React Element를 반환한다.


class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            squares: Array(9).fill(null),       // 초기 생성자, 모든 Array element가 null
            xIsNext: true,
        };
    }

    handleClick(i) {
        const squares = this.state.squares.slice();

        if (calculateWinner(squares) || squares[i]) {
            return;
        }

        squares[i] = this.state.xIsNext ? 'X' : 'O';
        this.setState({
            squares: squares,
            xIsNext: !this.state.xIsNext,
        });
    }

    renderSquare(i) {
        return (
            <Square
                value={this.state.squares[i]}
                // Square가 직접적으로 Board를 바꿀 수 없기 때문에
                onClick={() => this.handleClick(i)} />
        );
    }

    render() {
        const winner = calculateWinner(this.state.squares);
        let status;
        if (winner) {
            status = "Winner: " + winner;
        } else {
            status = "Next Player: " + (this.state.xIsNext ? 'X' : 'O');
        }

        return (
            <div>
                <div className="status">{status}</div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        );
    }
}

class Square extends React.Component {
    // state: 컴포넌트에 무언가를 기억하기 위해 
    // 생성자를 추가하여 state를 초기화한다.
    constructor(props) {
        super(props);           // 하위 클래스의 생성자를 정의할 때, 항상 super호출 
        this.state = {
            value: null,
        };
    }

    render() {
        return (
            <button className="square" onClick={
                // function() {alert('click')}
                // () => this.setState({value: 'X'})
                () => this.props.onClick()
            }>
                {this.props.value}
            </button>
        )
    }
}

class Game extends React.Component {
    render() {
        return (
            <div className="game">
                <div className="game-board">
                    <Board />
                </div>
                <div className="game-info">
                    <div></div>
                    <ol></ol>
                </div>
            </div>
        );
    }
}


ReactDOM.render(
    <Game />,
    document.getElementById('root')
);


function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}