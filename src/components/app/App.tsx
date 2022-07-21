import * as React from "react"
import './App.css';
import {Link} from "react-router-dom";


function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1></h1>
            </header>
            <div className="menu">
                <nav>
                    <div>
                        <Link to="game1">Крестики-нолики</Link>
                    </div>
                    <div>
                        <Link to="game2">2048</Link>
                    </div>
                    <div>
                        <Link to="game3">Змейка</Link>
                    </div>
                    <div>Выход</div>
                </nav>
            </div>
        </div>
    );
}

export default App;
