import React from "react";
import "../css/form.css";
class UserForm extends React.Component {
  state = { name: "", password: "" };

  onFormSubmit(res) {
    res.preventDefault();
    this.props.callapi({
      name: this.state.name,
      password: this.state.password,
    });
  }

  render() {
    return (
      <form onSubmit={(res) => this.onFormSubmit(res)}>
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="floatingInput"
            placeholder="Uesr name"
            value={this.state.name}
            onChange={(res)=>this.setState({name:res.target.value})}
          ></input>
        </div>

        <div className="form-floating">
          <input
            type="password"
            className="form-control"
            id="floatingPassword"
            placeholder="Password"
            value={this.state.password}
            onChange={(res)=>this.setState({password:res.target.value})}
          />


          <input className="btn btn-primary" type="submit" value="Submit" />
        </div>
      </form>
    );
  }
}

export default UserForm;
