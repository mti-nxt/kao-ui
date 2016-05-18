import React from "react";
import Container from "react-micro-container";
import Header from "../components/Header";

export default class HeaderContainer extends Container {
  constructor(props) {
    super(props);
  }

  render() {
    return <Header dispatch={this.dispatch} {...this.state} />;
  }
}
