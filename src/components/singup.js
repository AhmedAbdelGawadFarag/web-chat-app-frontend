import React from "react";
import UserForm from "./userform";
import Rails from "../api/rails";
class Login extends React.Component {
  callapi(userdata) {
    Rails.post("/users", {
      user: userdata,   
    }).then((resp) => console.log(resp.data));
  }

  render() {
    return (
      <div className="user-form">
          <h1>Sign up now</h1>
        <UserForm callapi={(data) => this.callapi(data)}></UserForm>
      </div>
    );
  }
}

export default Login;
