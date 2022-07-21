import React from 'react';
import ReactDOM from "react-dom/client";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import App from './components/app/App';
import {Game} from "./components/tic-tac-toe/game/Game";
import {Game2048} from "./components/2048/game/Game2048";
import './index.css';
import {GameSnake} from "./components/Snake/game/GameSnake";

const root = ReactDOM.createRoot(
    document.getElementById("root")
);
root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/">
                <Route index element={<App/>}/>
                <Route path="game1" element={<Game/>}/>
                <Route path="game2" element={<Game2048/>}/>
                <Route path="game3" element={<GameSnake/>}/>
            </Route>
        </Routes>
    </BrowserRouter>
);