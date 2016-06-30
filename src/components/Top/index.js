import React, {Component} from "react";
import style from "./style.css";

import HeaderContainer from "../../containers/header";
import Rate from "./rate";

export default class Top extends Component {
  constructor() {
    super();
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
                <figure className="image is-1by1">
                  <img src="http://placehold.it/300x225" alt="" />
                </figure>
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
