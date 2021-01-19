import React from "react";
import "../css/form.css";
class UserForm extends React.Component {
  state = { name: "", password: "" };

  onFormSubmit(res) {
    res.preventDefault();
    this.props.callapi({name:this.state.name,password:this.state.password});    
  }

  render() {
    return (
      <div>
        <form
          id="user-form"
          className="ui form"
          onSubmit={(res) => this.onFormSubmit(res)}
        >
          <div className="field">
            <label htmlFor="user-name">name:</label>
            <input
              value={this.state.name}
              id="user-name"
              type="text"
              onChange={(res) => this.setState({ name: res.target.value })}
            ></input>
          </div>

          <div className="field">
            <label htmlFor="user-password"> password: </label>
            <input
              value={this.state.password}
              onChange={(res) => this.setState({ password: res.target.value })}
              id="user-password"
              type="password"
            ></input>
          </div>

          <button className="ui button" type="submit">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default UserForm;
