import React, {Component} from "react";
import style from "./style.css";
import "../../../node_modules/react-cropper/node_modules/cropperjs/dist/cropper.css";

import HeaderContainer from "../../containers/header";
import Rate from "./rate";
import Cropper from "../../../node_modules/react-cropper";

const src = 'http://i1.wp.com/solife-a.com/wp-content/uploads/2015/11/2-e1448672737694.jpg';

export default class Top extends Component {
  constructor() {
    super();

    this.state = {
      src,
      cropResult: null,
    };
    this._cropImage = this._cropImage.bind(this);
    this._onChange = this._onChange.bind(this);
    this._useDefaultImage = this._useDefaultImage.bind(this);

  }

  _cropImage() {
    if (typeof this.refs.cropper.getCroppedCanvas() === 'undefined') {
      return;
    }
    this.setState({
      cropResult: this.refs.cropper.getCroppedCanvas().toDataURL(),
    });
  }

  _onChange(e) {
    e.preventDefault();
    let files;
    if (e.dataTransfer) {
      files = e.dataTransfer.files;
    } else if (e.target) {
      files = e.target.files;
    }
    const reader = new FileReader();
    reader.onload = () => {
      this.setState({ src: reader.result });
    };
    reader.readAsDataURL(files[0]);
  }

  _useDefaultImage() {
    this.setState({ src });
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
      <div style={{width:'100%'}}>
      <div style={{ width: '100%' }}>
      <input type="file" onChange={this._onChange} />
      <a className="button" onClick={this._useDefaultImage}>むらい</a>
      <br />
      <br />
      <Cropper
      style={{ height: 400, width: '100%' }}
      aspectRatio={1 / 1}
      preview=".img-preview"
      guides={false}
      src={this.state.src}
      ref="cropper"
      crop={this._crop}
      zoomable={false}
      />
      </div>
      <div>
      <div className="box" style={{ width: '100%' }}>
      <h1 style={{ display: 'inline-block' }}>
      <a className="button" onClick={ this._cropImage } style={{ float: 'right' }}>
      切断
      </a>
      </h1>
      <img style={{ width: '100%' }} src={this.state.cropResult} />
      </div>
      </div>
      <br style={{ clear: 'both' }} />
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
