import React, { Component } from "react";
import classes from "./ResultTestItem.css";

class ResultTestItem extends Component {
  state = {
    rightAnsw: parseInt(this.props.rightAnsw),
    chosenAnsw: parseInt(this.props.chosenAnsw)
  };
  render() {
    return (
      <div className={classes.testBlock}>
        <div>
          <span style={{ float: "left" }} className={classes.paleText}>
            №{this.props.number}
          </span>

          {this.state.chosenAnsw === this.state.rightAnsw ? (
            <span style={{ float: "right", color: "green" }}>+</span>
          ) : (
            <span style={{ float: "right", color: "red" }}>-</span>
          )}
        </div>
        <br />
        <p>{this.props.text}</p>
        1.{this.props.var1}
        <br />
        2.{this.props.var2}
        <br />
        3.{this.props.var3}
        <br />
        <br />
        Your answer: {this.props.chosenAnsw} <br />
        Rigth answer: {this.props.rightAnsw}
        <br />
        <br />
        <div className={classes.explainBlock}>
          Explanation: {this.props.explanation}{" "}
        </div>
      </div>
    );
  }
}
export default ResultTestItem;
