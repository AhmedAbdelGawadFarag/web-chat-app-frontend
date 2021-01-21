import React from "react";
import UserForm from "./userform";
import Rails from "../api/rails";
class SignUp extends React.Component {
  state = { name: "" };

  callapi(userdata) {
    userdata["name"] = this.state.name;//adding username data key

    Rails.post("/users", {
      user: userdata,
    }).then((resp) => console.log(resp.data));

  }

  render() {
    return (
      <div className="user-form">
        <form onSubmit={(res) => res.preventDefault()}>
          <h1>Sign up now</h1>
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              id="floatingInput"
              placeholder="name"
              value={this.state.name}
              onChange={(res) => this.setState({ name: res.target.value })}
            ></input>
          </div>

          <UserForm callapi={(data) => this.callapi(data)}></UserForm>
        </form>
      </div>
    );
  }
}

export default SignUp;
