import React, {Component} from "react";

export default class Header extends Component {
  constructor() {
    super();
  }

  render() {
    return(
      <section className="hero is-warning is-bold">
        <div className="hero-header">
          <header className="header">
            <div className="container">
              <div className="header-left">
                <div className="header-item">
                  <p className="subtitle is-4">KAO</p>
                </div>
              </div>
              <div className="header-right">
                {/*<a href="" className="header-item">TOP</a>*/}
              </div>
            </div>
          </header>
        </div>
      </section>
    );
  }
}
