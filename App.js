import React from 'react';
import lifeCC from './lifeCC.js'
import './App.css';
import Todo from './Todo.js';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
    <div className="App">
      <div class="dd1">

          <Link class="menu" to="/lifeCC">Lifecycle</Link>
          <Link class="menu" to="/Todolist">To Do List</Link>

      </div>  
      <div class="com">
     
        <Route  exact path="/lifeCC" component={lifeCC} />
        <Route  path="/Todolist" component={Todo} />
      </div>
    </div>
  </Router>
  );
}

export default App;
