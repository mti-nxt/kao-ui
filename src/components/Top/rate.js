import React, {Component} from "react";
import style from "./style.css";

export default class Rate extends Component {
  constructor() {
    super();
  }

  stars(rate) {
    if (rate < 0.2) {
      return "☆☆☆☆☆";
    }
    if (rate >= 0.2 && rate < 0.4) {
      return "★☆☆☆☆";
    }
    if (rate >= 0.4 && rate < 0.6) {
      return "★★☆☆☆";
    }
    if (rate >= 0.6 && rate < 0.8) {
      return "★★★☆☆";
    }
    if (rate >= 0.8 && rate < 1) {
      return "★★★★☆";
    }
    return "★★★★★";
  }

  render() {
    return (
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
            <td>{this.stars(this.props.jhonnysRate)} {this.props.jhonnysRate * 100}%</td>
          </tr>
          <tr>
            <td>ホスト</td>
            <td>{this.stars(this.props.hostRate)} {this.props.hostRate * 100}%</td>
          </tr>
          <tr>
            <td>よしもと</td>
            <td>{this.stars(this.props.yoshimotoRate)} {this.props.yoshimotoRate * 100}%</td>
          </tr>
          <tr>
            <td>あくやく</td>
            <td>{this.stars(this.props.villainRate)} {this.props.villainRate * 100}%</td>
          </tr>
        </tbody>
      </table>
    );
  }
}
