import React from "react";
import { Route, Redirect } from "react-router-dom";

function checkAuth() {
  return true;
}

function renderUserHomePage(comp) {
  return (
      checkAuth() === true ? comp : <Redirect to="/"></Redirect>
  );
}

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => renderUserHomePage(<Component {...props}></Component>)}
    ></Route>
  );
};

export default PrivateRoute;
