import './App.css';
import LeftPane from './homepage/LeftPane';
import Latest from './homepage/Latest';
import TopNav from './nav/TopNav';
import Explore from './homepage/Explore';

function App() {
    return (
        <div className="App">
            <body>
                <TopNav className="icon" />
                <div className='content'>
                    <LeftPane />
                    <div className="right-pane">
                        <Latest />
                        <Explore />
                    </div>
                </div>
            </body>
        </div>
    );
}

export default App;
