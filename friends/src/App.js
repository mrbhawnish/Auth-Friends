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
    <br />
     <Link to="/protected" > Protected Page</Link>
     <br />
     <Link to="/login" onClick={() => localStorage.removeItem("token")}>Log out</Link>

    <Switch>
     <PrivateRoute path="/protected" component={FriendsList} />
     <Route path="/login" component={Login} />

    </Switch>
    </div>
  );
}

export default App;
