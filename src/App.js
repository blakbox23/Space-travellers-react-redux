import './App.css';
import { Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import Header from './components/Header';
import Missions from './components/Missions';
import Profile from './components/Profile';
import Rockets from './components/Rockets';
import store from './redux/configureStore';

function App() {
  return (
    <div>
      <Provider store={store}>
        <Header />
        <Switch>
          <Route exact path="/">
            <Rockets />
          </Route>
          <Route exact path="/missions">
            <Missions />
          </Route>
          <Route exact path="/profile">
            <Profile />
          </Route>
        </Switch>
      </Provider>
    </div>
  );
}

export default App;
