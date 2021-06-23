import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Detail from './routes/Detail';
import Home from './routes/Home';
import Update from './routes/Update';

function App() {
  return (
    <>
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/restaurants/:id" component={Detail}/>
            <Route exact path="/restaurants/:id/update" component={Update}/>
          </Switch>
        </Router>
      </div>
    </>
  );
}

export default App;