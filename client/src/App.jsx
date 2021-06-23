import React from 'react';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import Detail from './routes/Detail';
import Home from './routes/Home';
import Update from './routes/Update';

function App() {
  try {
    return <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/restaurants/:id" component={Detail}/>
          <Route exact path="/restaurants/:id/update" component={Update}/>
        </Switch>
      </Router>
  </div>
  } catch (error) {
    console.log(error);
  }
  

  
}

export default App;