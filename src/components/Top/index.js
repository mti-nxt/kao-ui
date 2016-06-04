import React, {Component} from "react";
import style from "./style.css";

import HeaderContainer from "../../containers/header";

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
                <table className="table">
                  <thead>
                    <tr>
                      <th>タイプ</th>
                      <th>度合い</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>ジャニーズ</td>
                      <td>★★★★★</td>
                    </tr>
                    <tr>
                      <td>ホスト</td>
                      <td>★★★☆☆</td>
                    </tr>
                    <tr>
                      <td>よしもと</td>
                      <td>☆☆☆☆☆</td>
                    </tr>
                    <tr>
                      <td>あくやく</td>
                      <td>☆☆☆☆☆</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="columns">
              <div className="is-half is-offset-one-quarter">
                <a href="" className="button">Check</a>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
