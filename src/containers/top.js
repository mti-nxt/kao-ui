import React from "react";
import Container from "react-micro-container";
import request from "superagent";
import config from "config";
import Top from "../components/Top";

const DEFAULT_SRC = "http://i1.wp.com/solife-a.com/wp-content/uploads/2015/11/2-e1448672737694.jpg";


export default class TopContainer extends Container {
  constructor(props) {
    super(props);
    this.state = {
      hostRate: 0,
      jhonnysRate: 0,
      villainRate: 0,
      yoshimotoRate: 0,
      src: DEFAULT_SRC,
    };
  }

  componentDidMount() {
    this.subscribe({
      cropImage: this.cropImage,
      postFace: this.postFace,
      setDefaultImage: this.setDefaultImage,
      uploadImage: this.uploadImage
    });
  }

  cropImage() {

  }

  uploadImage(e) {
    e.preventDefault();
    let files;
    if (e.dataTransfer) {
      files = e.dataTransfer.files;
    } else if (e.target) {
      files = e.target.files;
    }
    const reader = new FileReader();
    reader.onload = () => {
      this.setState({src: reader.result});
    };
    console.log(files);
    reader.readAsDataURL(files[0]);
  }

  setDefaultImage() {
    this.setState({src: DEFAULT_SRC});
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
