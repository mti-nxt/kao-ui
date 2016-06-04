import React from "react";
import Container from "react-micro-container";
import Sample from "../components/Sample";

export default class SampleContainer extends Container {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Sample dispatch={this.dispatch} {...this.state} />
    );
  }
}
