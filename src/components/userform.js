import React from "react";
import "../css/form.css";
class UserForm extends React.Component {
  state = { password: "", email: "" };

  onFormSubmit() {
    console.log("submitted");
    this.props.callapi(this.state);
  }

  render() {
    return (
      <div>
        <div className="form-floating mb-3">
          <input
            required
            type="email"
            className="form-control"
            id="floatingInput"
            placeholder="Email"
            value={this.state.email}
            onChange={(res) => this.setState({ email: res.target.value })}
          ></input>
        </div>

        <div className="form-floating">
          <input
            required
            type="password"
            className="form-control"
            id="floatingPassword"
            placeholder="Password"
            value={this.state.password}
            onChange={(res) => this.setState({ password: res.target.value })}
          />

          <input className="btn btn-primary" type="submit" value="Submit" onClick={() => this.onFormSubmit()} />
        </div>
      </div>
    );
  }
}

export default UserForm;
