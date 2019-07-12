import React, { Component } from "react";
import classes from "./TestBlock.css";
// import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import TestItem from "./TestItem/TestItem";
import NavBar from "./NavBar/NavBar";
import ScrollButton from "./ScrollToTopBtn/Btn";
import TestServices from "../../services/TestsServices";
import { connect } from "react-redux";
import Drift from "../Drift/Drift";
import { Beforeunload } from "react-beforeunload";
import Header from "../Header/Header";
// import PageProgress from 'react-page-progress'
import { Waypoint } from "react-waypoint";

class TestBlock extends Component {
  state = {
    questions: [],
    test: {
      number: null,
      category: null
    },
    isLoading: true
  };
  // _handleWaypointLeave() {
  //   alert('eee')
  // }
  componentWillUnmount() {
    this.props.clearAnswers();
  }
  async componentDidMount() {
    // console.log(this.props.match.params.id);
    if (this.props.match.params.id) {
      const questions = (await TestServices.getQuestions(
        this.props.match.params.id
      )).data;
      const test = (await TestServices.getOneTestTitles(
        this.props.match.params.id
      )).data;
      this.setState({
        test: {
          number: test[0].number,
          category: test[0].category
        }
      });
      this.setState({ questions: questions });
      this.setState({ isLoading: false });
      this.props.onAddQuestionsLength(this.state.questions.length);
      this.props.onAddCurrentTestTitles(this.state.test);
    }
  }
  questions = () =>
    this.state.questions.map((name, index) => {
      return (
        <div className={classes.testBlock_wrapper} key={index} >
          <TestItem 
            index={index + 1}
            question={name.text}
            answ1={name.var1}
            answ2={name.var2}
            answ3={name.var3}
            taskId={name._id}
          />
        </div>
      );
    });

  render() {
    return (
      <div>
        {/* <PageProgress color={'#FBB4B4'} height={4}/> */}
        <Header />
        <Drift text="Solve the test" />
        <Beforeunload onBeforeunload={event => event.preventDefault()} />
        <div className={classes.main_wrap}>
          <div className={classes.TestBlock}>
            <div className={classes.main_container}>
              <div className={classes.main_item}>
                <NavBar />
                <Waypoint onLeave={this._handleWaypointLeave} />
                {this.state.isLoading === true ? (
                  <div className={classes.desc_test}>Loading...</div>
                ) : (
                  <div>
                    <div className={classes.desc_test}>
                      {this.state.test.category} - Test №
                      {this.state.test.number}
                    </div>
                    {this.questions()}
                    <div className={classes.btn_bottom}>
                      <ScrollButton scrollStepInPx="40" delayInMs="16.66" />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapDispachToProps = dispatch => {
  return {
    onAddQuestionsLength: data =>
      dispatch({ type: "ADD_CURRENT_QUEST_LENGTH", value: data }),
    clearAnswers: () => dispatch({ type: "CLEAR_ANSWER" }),
    onAddCurrentTestTitles: data =>
      dispatch({ type: "ADD_CURRENT_TESR_TITLES", value: data })
  };
};

export default connect(
  null,
  mapDispachToProps
)(TestBlock);
