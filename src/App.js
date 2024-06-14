import './global.css'
import './App.css';
import LeftPane from './homepage/LeftPane';
import TopNav from './nav/TopNav';
import UserNav from './nav/UserNav';

function App() {
  return (
    <div className="App">
      <body>
        <TopNav className="icon" />
        <LeftPane />
        <UserNav />
      </body>
    </div>
  );
}

export default App;
