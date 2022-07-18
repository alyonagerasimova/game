import './App.css';
import {Link} from "react-router-dom";


function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>Крестики-нолики</h1>
            </header>
            <div className="menu">
                <nav>
                    <div>
                        <Link to="start">Start</Link>
                    </div>
                    <div>
                        <Link to="about">About</Link>
                    </div>
                    <div>Exit</div>
                </nav>
            </div>
        </div>
    );
}

export default App;
