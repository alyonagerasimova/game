import * as React from "react"
import './App.css';
import {Link} from "react-router-dom";


function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>Funny games</h1>
            </header>
            <div className="menu">
                <nav>
                    <div>
                        <Link to="tic-tac-toe" className='link-text'>Крестики-нолики</Link>
                    </div>
                    <div>
                        <Link to="snake" className='link-text'>Змейка</Link>
                    </div>
                    <div>
                        <Link to="./" className='link-text'>Выход</Link>
                    </div>
                </nav>
            </div>
        </div>
    );
}

export default App;
