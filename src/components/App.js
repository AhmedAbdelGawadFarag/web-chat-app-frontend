import React from "react";
import Login from "./login";
import SignUp from "./singup";
import Home from "./home";
import UserHome from "./UsersHome";
import PrivateRoute from "./PrivateRoute";

import { BrowserRouter, Route, Switch } from "react-router-dom";
class App extends React.Component {
  render() {
    return (
      <div  style={{ height: "100%", width: "100%",borderTop:"1px solid white",backgroundColor:"#F4F5FB"}}>
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={Home}></Route>
            <Route path="/login" component={Login}></Route>
            <Route path="/users/new" component={SignUp}></Route>
            <PrivateRoute
              exact
              path="/users/home"
              component={UserHome}
            ></PrivateRoute>
            <Route path="*">
              <div>404 not found</div>
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
