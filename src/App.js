import './App.css';
import Chips from './Chips';
import Tea from './Tea';
import Cake from './Cake';
import VendingMachine from './VendingMachine';
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <VendingMachine />
            </Route>
            <Route exact path="/chips">
              <Chips />
            </Route>
            <Route exact path="/tea" >
              <Tea />
            </Route>
            <Route exact path="/cake">
              <Cake />
            </Route>
            <Route>
              Error not found
            </Route>
          </Switch>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
