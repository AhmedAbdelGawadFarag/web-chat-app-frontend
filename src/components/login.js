import React from "react";
import UserForm from "./userform";
import Rails from "../api/rails";
class Login extends React.Component {

  authenticateUser(userdata) {
    Rails.post("/auth", {
      user: userdata,
    }).then((res) => console.log(res.data));
  }

  render() {
    return (
      <div className="user-form">
        <h1>Log in now</h1>
        <form onSubmit={(res) => res.preventDefault()} >
          <UserForm callapi={(data) => this.authenticateUser(data)}></UserForm>
        </form>
      </div>
    );
  }
}

export default Login;
