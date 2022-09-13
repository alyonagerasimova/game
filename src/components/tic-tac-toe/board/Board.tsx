import React from "react";
import {Square} from "../square/Square";
import './Board.css'
import {calculateWinner} from "../calculateWinner";

interface PropsType {
    squares: any[],
    onClick: (i: any) => void
}

export function Board({squares, onClick} : PropsType) {

    function renderSquare(i) {
        let [winner, line] = calculateWinner(squares);
        const style = {
            color: line[0] === i || line[1] === i || line[2] === i ? 'red' : 'black'
        }

        return <Square
            value={squares[i]}
            style={style}
            onClick={() => onClick(i)}
        />;
    }

    return (
        <div>
            <div className="board-row">
                {renderSquare(0)}
                {renderSquare(1)}
                {renderSquare(2)}
            </div>
            <div className="board-row">
                {renderSquare(3)}
                {renderSquare(4)}
                {renderSquare(5)}
            </div>
            <div className="board-row">
                {renderSquare(6)}
                {renderSquare(7)}
                {renderSquare(8)}
            </div>
        </div>
    );
}