import React from "react";
import Container from "react-micro-container";
import request from "superagent";
import config from "config";
import Top from "../components/Top";

export default class TopContainer extends Container {
  constructor(props) {
    super(props);
    this.state = {
      hostRate: 0,
      jhonnysRate: 0,
      villainRate: 0,
      yoshimotoRate: 0,
    };
  }

  componentDidMount() {
    this.subscribe({
      postFace: this.postFace,
    });
  }

  postFace(base64Image) {
    request.post(`http://${config.api.domain}:${config.api.port}/api/face`)
    .end((err, res) => {
      this.setState({
        hostRate: res.body.host_rate,
        jhonnysRate: res.body.jhonnys_rate,
        villainRate: res.body.villain_rate,
        yoshimotoRate: res.body.yoshimoto_rate,
      });
    });
  }

  render() {
    return (
      <Top dispatch={this.dispatch} {...this.state} />
    );
  }
}
