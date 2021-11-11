import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Homepage extends Component {
  render() {
    return (
      <>
        <h1>This Homepage</h1>
        <h3>
          <Link to="/auth/users">Go to Users</Link>
        </h3>
        <h3>
          <Link to="/auth/data">Get Data</Link>
        </h3>
      </>
    );
  }
}
