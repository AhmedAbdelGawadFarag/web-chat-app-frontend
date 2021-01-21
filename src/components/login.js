import React from "react";
import UserForm from "./userform";
import Rails from "../api/rails";
class Login extends React.Component {
  state = { error: {} }
  authenticateUser(userdata) {
    Rails.post("/auth", {
      user: userdata,
    }).catch((err) => this.setState({ errors: err.response.data }))

  }

  showError() {
    let errorsarr = [];
    // console.log(this.state.errors);
    for (let x in this.state.errors) {
      let error = this.state.errors[x];
      // console.log(error);
      errorsarr.push(<div key={x} className="alert alert-danger" role="alert">{x} : {error}</div>);
    }
    return (
      <div>
        { errorsarr}
      </div>
    );
  }

  render() {
    return (
      <div className="user-form">

        <form onSubmit={(res) => res.preventDefault()} >

          <h1>Log in now</h1>

          {this.showError()}

          <UserForm callapi={(data) => this.authenticateUser(data)}></UserForm>
        </form>
      </div>
    );
  }
}

export default Login;
