import React from "react";
import UserForm from "./userform";
import Rails from "../api/rails";
class Login extends React.Component {
  authenticateUser(userdata) {
    Rails.post("/auth", {
      user: userdata,
    }).then((res) => console.log(res.data));
  }

  callapi(userdata) {
    this.authenticateUser(userdata);
  }

  render() {
    return (
      <div className="user-form">
        <h1>Log in now</h1>
        <UserForm callapi={(data) => this.callapi(data)}></UserForm>
      </div>
    );
  }
}

export default Login;
