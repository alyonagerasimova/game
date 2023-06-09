import * as React from "react"
import {Snake} from "../snake/Snake";
import {Food} from "../food/Food";
import {useEffect, useState} from "react";
import useInterval from "../useInterval";
import './GameSnake.css';
import {Link} from "react-router-dom";
import {routes} from "../../../utils/routes";

function getRandomCoordinates() {
    const min = 1;
    const max = 98;
    const x: number = Math.floor((Math.random() * (max - min + 1) + min) / 2) * 2;
    const y: number = Math.floor((Math.random() * (max - min + 1) + min) / 2) * 2;
    return [x, y];
}

const DIRECTION = {
    RIGHT: "RIGHT",
    LEFT: "LEFT",
    UP: "UP",
    DOWN: "DOWN"
}

const initialState = {
    snakeDots: [[0, 0], [2, 0]],
    direction: DIRECTION.RIGHT,
    speed: 200,
    dotFood: getRandomCoordinates(),
    score: 0
}

export function GameSnake() {

    const [dotFood, setDotFood] = useState(initialState.dotFood);
    const [snakeDots, setSnakeDots] = useState(initialState.snakeDots);
    const [direction, setDirection] = useState(initialState.direction);
    const [speed, setSpeed] = useState(initialState.speed);
    const [score, setScore] = useState(initialState.score);
    const [stop, setStop] = useState(false);

    useEffect(() => {
        document.onkeydown = onKeyDown;
        checkIfOutBounds();
        checkIfCollapsed();
        onEatFood();
    });

    useInterval(() => {
        if (!stop) {
            window.requestAnimationFrame(() => moveSnake());
        }
    }, speed);

    function onKeyDown(e) {
        switch (e.keyCode) {
            case 37: {
                setDirection(DIRECTION.LEFT);
                break;
            }
            case 38: {
                setDirection(DIRECTION.UP);
                break;
            }
            case 39: {
                setDirection(DIRECTION.RIGHT);
                break;
            }
            case 40: {
                setDirection(DIRECTION.DOWN);
                break;
            }
        }
    }

    function moveSnake() {
        const dots:  number[][] = [...snakeDots];
        let head: number[] = dots[dots.length - 1];

        switch (direction) {
            case DIRECTION.RIGHT: {
                head = [head[0] + 2, head[1]];
                break;
            }
            case DIRECTION.LEFT: {
                head = [head[0] - 2, head[1]];
                break;
            }
            case DIRECTION.UP: {
                head = [head[0], head[1] - 2];
                break;
            }
            case DIRECTION.DOWN: {
                head = [head[0], head[1] + 2];
                break;
            }
        }
        dots.push(head);
        dots.shift();
        setSnakeDots(dots);
    }

    function gameOver() {
        alert(`Игра окончена! Длина змейки: ${snakeDots.length}`);
        resetGame();
    }

    function resetGame() {
        setDotFood(initialState.dotFood);
        setSnakeDots(initialState.snakeDots);
        setDirection(initialState.direction);
        setSpeed(initialState.speed);
        setScore(initialState.score);
    }

    function checkIfOutBounds() {
        const head: number[] = snakeDots[snakeDots.length - 1];
        if (head[0] < 0 || head[0] >= 100 || head[1] < 0 || head[1] >= 100) {
            gameOver();
        }
    }

    function checkIfCollapsed() {
        const snake: number[][] = [...snakeDots];
        const head: number[] = snake[snake.length - 1];
        snake.pop();
        snake.forEach(dot => {
            if (dot[0] === head[0] && dot[1] === head[1]) {
                gameOver();
            }
        });
    }

    function enlargeSnake() {
        const newSnake: number[][] = [...snakeDots];
        newSnake.unshift([]);
        setSnakeDots(newSnake);
    }

    function increaseSpeed() {
        if (speed > 10) {
            setSpeed(speed - 10);
        }
    }

    function onEatFood() {
        const head:  number[] = snakeDots[snakeDots.length - 1];
        if (head[0] === dotFood[0] && head[1] === dotFood[1]) {
            increaseSpeed();
            enlargeSnake();
            setScore(score + 1);
            setDotFood(getRandomCoordinates());
        }
    }

    function onPause() {
        setStop(!stop);
    }

    return (
        <div className="game">
            <div className="game-area">
                <Snake snakeDots={snakeDots}/>
                <Food dot={dotFood}/>
            </div>
            <div className="sidebar">
                <div className="goToMenu">
                    <Link to={routes.HOME}>На главную</Link>
                </div>
                <div className="score">
                    Счёт: {score}
                </div>
                <div className="button-pause">
                    <button onClick={onPause}>
                        {stop ? "Продолжить" : "Пауза"}
                    </button>
                </div>
            </div>
        </div>
    );
}