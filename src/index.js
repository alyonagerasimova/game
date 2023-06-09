import React from 'react';
import ReactDOM from "react-dom/client";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import App from './components/app/App';
import {Game} from "./components/tic-tac-toe/game/Game";
import {GameSnake} from "./components/Snake/game/GameSnake";
import './index.css';
import {routes} from "./utils/routes";

const root = ReactDOM.createRoot(
    document.getElementById("root")
);
root.render(
    <BrowserRouter>
        <Routes>
            <Route path={routes.HOME}>
                <Route index element={<App/>}/>
                <Route path={routes.TTT} element={<Game/>}/>
                <Route path={routes.SNAKE} element={<GameSnake/>}/>
            </Route>
        </Routes>
    </BrowserRouter>
);