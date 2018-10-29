import React, { Component } from "react";

export class SignInForm extends Component {
  render() {
    return (
      <div className="form-group">
        <div className=" card">
          <form>
            <br />
            <h3 className="text-center">welcome to</h3>
            <h1>InstaPhoto</h1>
            <h2 className="text-center">Sigin or register</h2>
            <div className="form-group">
              <input
                className="form-control"
                type="text"
                name="email"
                placeholder="Your email"
                value={this.props.email}
                onChange={this.props.onChange}
              />
            </div>
            <div className="form-group">
              <input
                className="form-control"
                type="password"
                name="password"
                placeholder="Your password"
                value={this.props.password}
                onChange={this.props.onChange}
              />
            </div>
          </form>
          <div className="form-group d-flex justify-content-center">
            <button className="btn btn-primary" onClick={this.props.onLogin}>
              Login
            </button>
            {" _ _"}
            <button className="btn btn-primary" onClick={this.props.onRegister}>
              Register
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default SignInForm;
