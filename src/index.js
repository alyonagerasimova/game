import React from 'react';
import ReactDOM from "react-dom/client";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import App from './components/app/App';
import {Game} from "./components/tic-tac-toe/game/Game";
import {GameSnake} from "./components/Snake/game/GameSnake";
import './index.css';

const root = ReactDOM.createRoot(
    document.getElementById("root")
);
root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/">
                <Route index element={<App/>}/>
                <Route path="tic-tac-toe" element={<Game/>}/>
                <Route path="snake" element={<GameSnake/>}/>
            </Route>
        </Routes>
    </BrowserRouter>
);