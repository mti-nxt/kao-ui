import React from "react";
import Container from "react-micro-container";
import request from "superagent";
import config from "config";
import Top from "../components/Top";
import yukichi from "./yukichi.jpeg";

const DEFAULT_SRC = yukichi;


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

  cropImage(cropper) {
    if (typeof cropper.getCroppedCanvas() === "undefined") {
      return;
    }

    this.setState({
      cropResult: cropper.getCroppedCanvas().toDataURL(),
    });
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

  imageToBase64(img, mimeType) {
    const canvas = document.createElement("canvas");
    canvas.width  = img.width;
    canvas.height = img.height;
    // Draw Image
    const ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0);
    // To Base64
    return canvas.toDataURL(mimeType);
  }

  postFace() {
    const img = document.getElementById("cropImage");
    const base64 = this.imageToBase64(img, "image/jpeg");
    request.post(`http://${config.api.domain}:${config.api.port}/api/face`)
           .send({binary: base64})
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
