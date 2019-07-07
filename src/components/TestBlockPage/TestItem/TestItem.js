import React, { Component } from "react";
import classes from "./TestItem.css";
import { connect } from "react-redux";

class TestItem extends Component {
  state = {
    currentAnswer: {
      varAnswer: 0,
      idTask: "",
      number: 0
    }
  };
  handleDestination(event) {
    const options = this.state.options;
    if (event.target.checked) {
      this.state.currentAnswer.varAnswer = event.target.value;
      // event.target.getAttribute('data-tag')
      this.state.currentAnswer.idTask = event.target.getAttribute("idTask");
      this.state.currentAnswer.number = event.target.getAttribute("number");
      this.props.onAddAnswer(this.state.currentAnswer);
    }
  }
  // const TestItem= (props) => {
  render() {
    return (
      <div className={classes.testBlock}>
        <span className={classes.paleText}>№{this.props.index} </span>
        <p>{this.props.question}</p>

        <form action="">
          <div className={classes.r0}>
            <input
              onClick={event => this.handleDestination(event)}
              type="radio"
              idTask={this.props.taskId}
              number={this.props.index}
              id={this.props.taskId + "_answ1"}
              className={classes.Input}
              name="answer"
              value="1"
            />
            <span>
              <label for={this.props.taskId + "_answ1"}>
                {this.props.answ1}
              </label>
            </span>
            <br />
          </div>

          <div className={classes.r0}>
            <input
              onClick={event => this.handleDestination(event)}
              type="radio"
              idTask={this.props.taskId}
              number={this.props.index}
              id={this.props.taskId + "_answ2"}
              className={classes.Input}
              name="answer"
              value="2"
            />
            <span>
              <label for={this.props.taskId + "_answ2"}>
                {this.props.answ2}
              </label>
            </span>
            <br />
          </div>

          <div className={classes.r0}>
            <input
              onClick={event => this.handleDestination(event)}
              type="radio"
              idTask={this.props.taskId}
              number={this.props.index}
              id={this.props.taskId + "_answ3"}
              className={classes.Input}
              name="answer"
              value="3"
            />
            <span>
              <label for={this.props.taskId + "_answ3"}>
                {this.props.answ3}
              </label>
            </span>
            <br />
          </div>
        </form>
      </div>
    );
  }
}
// function mapStateToProps(state) {
//   return { answers: state.answers }
// }
const mapDispachToProps = dispatch => {
  return {
    onAddAnswer: answ => dispatch({ type: "ADD", value: answ })
  };
};
export default connect(
  null,
  mapDispachToProps
)(TestItem);
