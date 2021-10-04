import './App.css';
import { Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Missions from './components/Missions';
import Profile from './components/Profile';
import Rockets from './components/Rockets';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path = "/">
      <Rockets />
      </Route>
      <Route exact path="/missions">
          <Missions />
      </Route>
      <Route exact path="/profile">
          <Profile />
      </Route>
      </Switch>

    </div>
  );
}

export default App;
