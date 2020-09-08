import React from 'react';
import './App.css';
import {Switch, Route, Link} from "react-router-dom";
import FriendsList from "./components/FriendsList";
import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <div className="App">
     <Link to="/login"> Login</Link>
     <Link to="/protected" > Protected Page</Link>


    <Switch>
     <PrivateRoute path="/protected" component={FriendsList} />
     <Route path="/login" component={Login} />

    </Switch>
    </div>
  );
}

export default App;
