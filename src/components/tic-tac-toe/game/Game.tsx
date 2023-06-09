import React from "react";
import {Board} from "../board/Board";
import {useState} from "react";
import {calculateWinner} from "../calculateWinner";
import {Link} from "react-router-dom";
import './Game.css';
import {routes} from "../../../utils/routes";

export function Game() {
    const [history, setHistory] = useState([{
        squares: Array(9).fill(null),
    }]);
    const [xIsNext, setXIsNext] = useState(true);
    const [stepNumber, setStepNumber] = useState(0);
    let status;

    function jumpTo(step) {
        setStepNumber(step);
        setXIsNext((step % 2) === 0);
    }

    function handleClick(i) {
        const newHistory = history.slice(0, stepNumber + 1);
        const current = newHistory[newHistory.length - 1];
        const squares = current.squares.slice();
        const [winner] = calculateWinner(squares);
        if (winner || squares[i]) {
            return;
        }
        squares[i] = xIsNext ? 'X' : 'O';
        setHistory(newHistory.concat([{
            squares: squares,
        }]));
        setStepNumber(newHistory.length);
        setXIsNext(!xIsNext);
    }

    function isNotEmptyBoard(squares) {
        let isNotEmptyBoard = true;
        squares.map(square => {
            if (square === null) {
                isNotEmptyBoard = false;
            }
        });
        return isNotEmptyBoard;
    }

    function startNewGame(){
        setHistory([{
            squares: Array(9).fill(null),
        }]);
        setXIsNext(true);
       setStepNumber(0);
    }

    const current = history[stepNumber];
    const [winner] = calculateWinner(current.squares);

    if (winner) {
        status = 'Победитель: ' + winner;
    } else if (!winner && isNotEmptyBoard(current.squares)) {
        status = 'Ничья!';
    } else {
        status = 'Следующий игрок: ' + (xIsNext ? 'X' : 'O');
    }

    return (
        <div className="game">

            <div className="game-board">
                <Board squares={current.squares}
                       onClick={(i) => handleClick(i)}/>
            </div>
            <div className="navbar">
                <div className="goToMenu">
                    <Link to={routes.HOME}>На главную</Link>
                </div>
                <div className="game-info">
                    <div className="text-status">{status}</div>
                    <button className="button-back"
                            onClick={() => jumpTo(history.length - 2)}
                    >
                        &#8617;
                    </button>
                    <button className="button-reset"
                            onClick={() => startNewGame()}
                    >
                        Очистить поле
                    </button>
                </div>
            </div>
        </div>
    );
}