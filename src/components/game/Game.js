import {Board} from "./Board";
import {useState} from "react";
import {calculateWinner} from "./calculateWinner";
import './Game.css';
import {Link} from "react-router-dom";

export function Game() {
    const [history, setHistory] = useState([{
        squares: Array(9).fill(null),
    }]);
    const [xIsNext, setXIsNext] = useState(true);
    const [stepNumber, setStepNumber] = useState(0);

    function jumpTo(step) {
        setStepNumber(step);
        setXIsNext((step % 2) === 0);
    }

    const current = history[history.length - 1];
    const winner = calculateWinner(current.squares);
    const moves = history.map((step, move) => {
        const desc = move ?
            'Перейти на ход #' + move :
            'Перейти в начало игры';
        return (
            <li key={move}>
                <button onClick={() => jumpTo(move)}>{desc}</button>
            </li>
        );
    });

    let status;
    if (winner) {
        status = 'Победитель: ' + winner;
    } else {
        status = 'Следующий игрок: ' + (xIsNext ? 'X' : 'O');
    }

    function handleClick(i) {
        const newHistory = history.slice(0, stepNumber + 1);
        const current = newHistory[stepNumber];
        const squares = current.squares.slice();
        if (calculateWinner(squares) || squares[i]) {
            return;
        }
        squares[i] = xIsNext ? 'X' : 'O';
        setHistory(newHistory.concat([{
            squares: squares,
        }]));
        setStepNumber(newHistory.length);
        setXIsNext(!xIsNext);
    }

    return (
        <div className="game">
            <div className="game-board">
                <Board squares={current.squares}
                       onClick={(i) => handleClick(i)}/>
            </div>
            <div className="game-info">
                <div>{status}</div>
                <ol>{moves}</ol>
            </div>
            <div className="goToMenu">
                <Link to="/">На главную</Link>
            </div>
        </div>
    );
}