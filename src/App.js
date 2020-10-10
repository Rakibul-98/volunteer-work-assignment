import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Registration from './Components/Registration/Registration';
import NoMatch from './Components/NoMatch/NoMatch';
import Admin from './Components/Admin/Admin';
import AddEvent from './Components/Events/AddEvent';
import AddedEvents from './Components/Events/AddedEvents';

function App() {
  return (
    <Router>
      <Switch>
          <Route path="/home">
            <Home/>
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/addedEvents">
            <AddedEvents/>
          </Route>
          <Route path="/registration">
            <Registration/>
          </Route>
          <Route path="/admin">
            <Admin/>
          </Route>
          <Route path="/addEvent">
            <AddEvent/>
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="*">
            <NoMatch/>
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
