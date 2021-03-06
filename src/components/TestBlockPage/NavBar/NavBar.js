import React from "react";
import classes from "./NavBar.css";
import TestServices from "../../../services/TestsServices";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Popup from "../Popup/Popup";
import { Waypoint } from "react-waypoint";
import { Link } from "react-router-dom";

class navBar extends React.Component {
  state = {
    answers_length: 0,
    showPopup: false,
    isLoading: false,
    isShowSubNav: false
  };
  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup
    });
  }
  _handleWaypointLeave() {
    // alert('eee')
    this.setState({ isShowSubNav: true });
    // console.log(this);
  }
  _handleWaypointEnter() {
    // alert('eee')
    this.setState({ isShowSubNav: false });
    // console.log(this);
  }
  async handleFinish(event) {
    // добавить проверку на полное отмечание ответов
    // const jsonArrayAnswers = await JSON.parse(JSON.stringify(this.props.answers))
    // const buf = await TestServices.postAnswers(jsonArrayAnswers)
    // console.log('test buff')
    // // console.log(buf.data[1][0])
    // this.props.onAddResultData(buf.data)
    // console.log(this.props.resultData)
    // console.log(this);
    // this.browserHistory.push('/result');

    if (this.props.answers_length < this.props.questions_length) {
      this.togglePopup();
    } else {
      this.setState({ isLoading: true });
      // const jsonArrayAnswers = await this.props.answers;
      const buf = await TestServices.postAnswers(this.props.answers);
      this.props.onAddResultData(buf.data);
      this.props.history.push("/result");
      // console.log(this.props.history);
      // console.log(this.props.answers.length);
      // console.log(this.props.answers_length);
      // console.log(this.state.answers_length);
      // console.log(buf);
    }
    // console.log(this.props.answers)
  }
  // componentDidUpdate(prevProps) {
  //   // const oldProps = this.state.answers_length
  //   if(this.props.answers_length !== prevProps.answers_length) {
  //     this.setState({ answers_length:this.props.answers_lengthh })
  //     console.log('tets')
  //   }
  // }
  // shouldComponentUpdate(nextProps, nextState) {
  //   if(this.props.answers.length !== nextProps.answers.length ) {
  //      return true;
  //   }
  // }
  render() {
    return (
      <div>
        <div className={classes.navBar}>
          {this.state.showPopup ? (
            <Popup
              text="You should check all questions"
              closePopup={this.togglePopup.bind(this)}
            />
          ) : null}
          {/* <button onClick={this.togglePopup.bind(this)}> Click To Launch Popup</button> */}

          <Link to="/" className={classes.button}>
            Back
          </Link>
          {/* {this.store.answers_length} */}
          <div className={classes.button_2}>
            {this.props.answers_length}/{this.props.questions_length}
          </div>
          {/* <div className={classes.button_2}>04:30</div> */}

          {this.state.isLoading === true ? (
            <div className={classes.button}>Loading...</div>
          ) : (
            <div
              className={classes.button}
              onClick={event => this.handleFinish(event)}
            >
              Finish
            </div>
          )}
        </div>
        <div
          className={
            this.state.isShowSubNav === true
              ? classes.subNavBarLeft
              : classes.hide
          }
        >
          {" "}
          <div className={classes.button_2}>
            {this.props.answers_length}/{this.props.questions_length}
          </div>{" "}
        </div>
        <Waypoint
          onEnter={this._handleWaypointEnter.bind(this)}
          onLeave={this._handleWaypointLeave.bind(this)}
        />
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    answers: state.answers,
    questions_length: state.questions_length,
    answers_length: state.answers_length
  };
}
const mapDispachToProps = dispatch => {
  return {
    onAddResultData: data => dispatch({ type: "ADD_RESULT", value: data })
  };
};

export default connect(
  mapStateToProps,
  mapDispachToProps
)(withRouter(navBar));
