import React from "react";
import UserForm from "./userform";
import Rails from "../api/rails";
class SignUp extends React.Component {
  state = { name: "", errors: {} };

  callapi(userdata) {
    userdata["name"] = this.state.name;//adding username data key

    Rails.post("/users", {
      user: userdata,
    }).then((resp) => console.log(resp.data))
      .catch((err) => this.setState({ errors: err.response.data }));

  }

  showError() {
    let errorsarr = [];
    for (let x in this.state.errors) {
      let arr = this.state.errors[x];
      for (let i = 0; i < arr.length; i++) {
        errorsarr.push(<div key={x} className="alert alert-danger" role="alert">{x} : {arr[i]}</div>);
      }

    }

    // console.log(errorsarr);

    return (
      <div>
        {errorsarr}
      </div>
    );
  }

  render() {
    return (
      <div className="user-form">
        <form onSubmit={(res) => res.preventDefault()}>

          <h1>Sign up now</h1>

          {this.state.errors !== [] ? this.showError() : ""}

          <div className="form-floating mb-3">
            <input
              required
              type="text"
              className="form-control"
              id="floatingInput"
              placeholder="Name"
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
