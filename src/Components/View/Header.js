import React, { Component } from "react";
import LogoutButton from "../Buttons/LogoutButton.js";

export class Header extends Component {
  render() {
    return (
      <div className="d-flex justify-content-between header">
        <h4>Welcome! {this.props.header}</h4>

        {this.props.state && <LogoutButton onClick={this.props.OnLogout} />}
      </div>
    );
  }
}

export default Header;
