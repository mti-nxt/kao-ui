import React, {Component} from "react";

export default class Header extends Component {
  constructor() {
    super();
  }

  render() {
    return(
      <section className="hero is-warning">
        <div className="hero-head">
          <header className="nav">
            <div className="container">
              <div className="nav-left">
                <a href="/" className="nav-item">
                  <p className="subtitle is-4">KAO</p>
                </a>
              </div>
              <div className="nav-right">
                <a href="https://github.com/mti-nxt/" className="nav-item">
                  <span className="icon">
                    <i className="fa fa-github"></i>
                  </span>
                </a>
              </div>
            </div>
          </header>
        </div>
      </section>
    );
  }
}
