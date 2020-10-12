import React, { createContext, useState } from 'react';
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
import AddedEvents from './Components/Events/AddedEvents';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';




export const UserContext = createContext();


function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value = {[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
            <Route path="/home">
              <Home/>
            </Route>
            <Route path="/login">
              <Login/>
            </Route>
            <PrivateRoute path="/addedEvents">
              <AddedEvents/>
            </PrivateRoute>
            <PrivateRoute path="/registration">
              <Registration/>
            </PrivateRoute>
            <PrivateRoute path="/admin">
              <Admin/>
            </PrivateRoute>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="*">
              <NoMatch/>
            </Route>
          </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
