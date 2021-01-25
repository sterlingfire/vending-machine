import './App.css';
import Chips from './Chips';
import Tea from './Tea';
import Cake from './Cake';
import VendingMachine from './VendingMachine';
import {BrowserRouter, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
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
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
