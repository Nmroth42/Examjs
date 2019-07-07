import React, { Component } from "react";
import classes from "./ResultTestItem.css";

class ResultTestItem extends Component {
  render() {
    return (
      <div className={classes.testBlock}>
        <span className={classes.paleText}>№{this.props.number}</span>
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
        <div className={classes.explainBlock}>Explanation: {this.props.explanation} </div>
      </div>
    );
  }
}
// function mapStateToProps(state) {
//   return { answers: state.answers }
// }
// function mapStateToProps(state) {
//     // const {resultData} = state
//     return {
//     resultData:state.resultData,
//     answers: state.answers,
//     questions_length:state.questions_length
//     }

//    }
//    connect(mapStateToProps, null)
export default ResultTestItem;
