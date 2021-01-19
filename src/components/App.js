import React from "react";
import Login from "./login";
import SignUp from "./singup";
import Home from "./home";
import { BrowserRouter, Route, Link } from "react-router-dom";
class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Route path="/" exact component={Home}></Route>
          <Route path="/login" component={Login}></Route>
          <Route path="/users/new" component={SignUp}></Route>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
