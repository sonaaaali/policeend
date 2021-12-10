import './App.css';
import {Switch, Route, HashRouter, Redirect} from 'react-router-dom';
import Login from './components/Login';
import Tipoffs from './components/Tipoffs';
import Main from './components/Main';

function App() {
  return (
      <HashRouter>
        <div className="App">
          <Switch>
            <Route exact path="/">
              <Login/>
            </Route>
            <Route exact path="/tipoffs">
              <Tipoffs/>
            </Route>
            <Redirect exact from='/main' to='/main/state/city/tipoff'/>
            <Route path="/main/:state/:city/:tipoff">
              <Main/>
            </Route>
          </Switch>
        </div>
      </HashRouter>
  );
}

export default App;
