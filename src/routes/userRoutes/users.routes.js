import React, { Component } from "react";
import Users from "../../pages/users/users";
import { Route } from "react-router-dom";
import HeaderTwo from "../../components/header/headerTwo";
import Footer from "../../components/footer/footer";
import getData from "../../components/common/getData";
export default class TestTwoRoutes extends Component {
  render() {
    return (
      <div>
        <HeaderTwo />
        <Route exact path="/auth/users" component={Users} />
        <Route exact path="/auth/data" component={getData} />
      </div>
    );
  }
}
