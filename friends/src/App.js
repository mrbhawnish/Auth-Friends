import React from "react";
import "./App.css";
import { Switch, Route, Link } from "react-router-dom";
import Login from "./components/Login";
import PrivateRoute from "./utils/PrivateRoute";
import FriendsList from "./components/FriendsList";

function App() {
  return (
    <div className="App">
      <div>
      <Link to="/">Login</Link>
      </div>
      <div>
      <Link to="/friends">Friends</Link>
      </div>
      <Switch>
        <PrivateRoute exact path="/friends" component={FriendsList} />
        <Route  exact path="/login" component={Login} />
        <Route path="/" component={Login} />
      </Switch>
    </div>
  );
}

export default App;
