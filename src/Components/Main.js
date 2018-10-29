import React, { Component } from "react";
import PhotoWall from "./PhotoWall";
import AddPhoto from "./AddPhoto";
import { Route, Link } from "react-router-dom";
import Single from "./Single";
import Header from "./View/Header.js";
import SignInForm from "./Forms/SignInForm.js";
import {
  ComponentDidMount,
  OnLogin,
  OnLogout,
  OnRegister,
  CreateRecept
} from "./Firebase/Functions.js";

class Main extends Component {
  state = {
    email: "",
    password: "",
    user: "",
    content: "",
    contentHeader: "",
    recipe: ""
  };

  componentDidMount() {
    this.props.startLoadingPost();
    this.props.startLoadingComments();
    ComponentDidMount(this.setUser.bind(this));
  }

  setUser(item) {
    this.setState({ user: item });
  }

  onLogout = () => {
    OnLogout();
    this.setState({ email: "" });
    this.setState({ password: "" });
  };

  onLogin = () => {
    OnLogin(this.state.email, this.state.password);
  };

  onRegister = e => {
    OnRegister(this.state.email, this.state.password);
    e.preventDefault();
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    return (
      <div>
        {!this.state.user && (
          <SignInForm
            email={this.state.email}
            password={this.state.password}
            onChange={this.onChange}
            onLogin={this.onLogin}
            onRegister={this.onRegister}
          />
        )}
        {this.state.user && (
          <Header OnLogout={this.onLogout} state={this.state.user} />
        )}
        <h1>{this.state.user && <Link to="/"> Photowall </Link>}</h1>
        {this.state.user && (
          <Route
            exact
            path="/"
            render={() => (
              <div>
                <PhotoWall {...this.props} />
              </div>
            )}
          />
        )}

        {this.state.user && (
          <Route
            path="/AddPhoto"
            render={({ history }) => (
              <AddPhoto {...this.props} onHistory={history} />
            )}
          />
        )}

        {this.state.user && (
          <Route
            path="/single/:id"
            render={params => <Single {...this.props} {...params} />}
          />
        )}
      </div>
    );
  }
}

export default Main;
