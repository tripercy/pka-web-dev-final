import './global.css'
import './App.css';
import LeftPane from './homepage/LeftPane';
import Latest from './homepage/Latest';
import TopNav from './nav/TopNav';
import UserNav from './nav/UserNav';
import Explore from './homepage/Explore';

function App() {
  return (
    <div className="App">
      <body>
        <TopNav className="icon" />
        <LeftPane />
        <UserNav />
        <Latest />
        <Explore />
      </body>
    </div>
  );
}

export default App;
