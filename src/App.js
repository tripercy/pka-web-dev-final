import './global.css'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import LeftPane from './homepage/LeftPane';
import Latest from './homepage/Latest';
import TopNav from './nav/TopNav';
import FeedContainer from './body/FeedContainer'
import UserNav from './nav/UserNav';
import Explore from './homepage/Explore';

function App() {
  return (
    <div className="App">
      <body>
        <TopNav className="icon" />
        <FeedContainer></FeedContainer>
        {/* <LeftPane />
        <UserNav />
        <Latest />
        <Explore /> */}
      </body>
    </div>
  );
}

export default App;
