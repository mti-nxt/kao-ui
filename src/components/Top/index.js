import React, {Component} from "react";
import style from "./style.css";
import "../../../node_modules/cropperjs/dist/cropper.css";

import HeaderContainer from "../../containers/header";
import Rate from "./rate";
import Cropper from "react-cropper";

export default class Top extends Component {
  constructor() {
    super();

    this.state = {
      cropResult: null,
    };
    this._cropImage = this._cropImage.bind(this);

  }

  _cropImage() {
    if (typeof this.refs.cropper.getCroppedCanvas() === "undefined") {
      return;
    }
    this.setState({
      cropResult: this.refs.cropper.getCroppedCanvas().toDataURL(),
    });
  }

  render() {
    return (
      <div>
        <HeaderContainer />
        <section className="section">
          <div className="container">

            <article className="message is-warning">
              <div className="message-header">
                使い方
              </div>
              <div className="message-body">
                ここに使い方について書く
              </div>
            </article>
            <hr/>

            <div className="columns">
              <div className="column is-6">
                <div style={{width: "100%"}}>
                  <div style={{ width: "100%" }}>
                    <input type="file" onChange={(e) => this.props.dispatch("uploadImage", e)} />
                  <a className="button" onClick={() => this.props.dispatch("setDefaultImage")}>むらい</a>
                    <br />
                    <br />
                    <Cropper
                    style={{ height: 400, width: "100%" }}
                    aspectRatio={1 / 1}
                    preview=".img-preview"
                    guides={false}
                    src={this.props.src}
                    ref="cropper"
                    crop={this._crop}
                    zoomable={false}
                    />
                  </div>
                  <div>
                    <div className="box" style={{ width: "100%" }}>
                      <h1 style={{ display: "inline-block" }}>
                        <a className="button" onClick={ this._cropImage } style={{ float: "right" }}>
                          切断
                        </a>
                      </h1>
                      <img style={{ width: "100%" }} src={this.state.cropResult} />
                    </div>
                  </div>
                  <br style={{ clear: "both" }} />
                </div>
              </div>
              <div className="column is-6">
                <Rate {...this.props} />
              </div>
            </div>
            <div className="columns">
              <div className="is-half is-offset-one-quarter">
                <a className="button" onClick={() => this.props.dispatch("postFace", "")}>Check</a>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
