import './App.css';
import LeftPane from './homepage/LeftPane';
import Latest from './homepage/Latest';
import TopNav from './nav/TopNav';

function App() {
    return (
        <div className="App">
            <body>
                <TopNav className="icon" />
                <Latest />
                <LeftPane />
            </body>

        </div>
    );
}

export default App;
