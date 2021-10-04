import './App.css';
import { Route } from 'react-router-dom';
import Header from './components/Header';
import Missions from './components/Missions';
import Profile from './components/Profile';

function App() {
  return (
    <div>
      <Header />
      <Route exact path="/missions">
          <Missions />
      </Route>
      <Route exact path="/profile">
          <Profile />
      </Route>
    </div>
  );
}

export default App;
