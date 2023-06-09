import * as React from "react"
import './App.css';
import {Link} from "react-router-dom";
import {routes} from "../../utils/routes";


function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>Funny games</h1>
            </header>
            <div className="menu">
                <nav>
                    <div className="menu__item">
                        <Link to={routes.TTT} className='link-text' >Крестики-нолики</Link>
                    </div>
                    <div className="menu__item">
                        <Link to={routes.SNAKE} className='link-text'>Змейка</Link>
                    </div>
                </nav>
            </div>
        </div>
    );
}

export default App;
