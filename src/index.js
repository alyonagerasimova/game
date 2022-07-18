import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './components/app/App';
import {Game} from "./components/game/Game";
import './index.css';

const root = ReactDOM.createRoot(
    document.getElementById("root")
);
root.render(
    <BrowserRouter>
    <Routes>
        <Route path="/">
            <Route index element={<App/>}/>
            <Route path="start" element={<Game/>}/>
            <Route path="about" element={<div>About</div>}/>
        </Route>
    </Routes>
    </BrowserRouter>
);