import React, { Component } from "react";
import "./ResultPage.css";
import classes from "./ResultPage.css";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import ResultTestItem from "./ResultTestItem/ResultTestItem";
import Drift from "../Drift/Drift";
import Header from "../Header/Header";
import ScrollButton from "./ScrollToTopBtn/Btn";
import { Beforeunload } from "react-beforeunload";
// import PageProgress from 'react-page-progress'

class ResultPage extends Component {
  handleFinishG(event) {
    console.log(this.state.result.arrayAnsw[0]);
  }
  state = {
    result: {},
    arrayAnsw: undefined,
    test: {
      number: null,
      category: null
    }
  };

  async componentDidMount() {
    window.scrollTo(0, 0);
    // const jsonArrayResult = JSON.parse(JSON.stringify(this.props.resultData))
    this.setState({ result: this.props.resultData });
    this.setState({ testTitles: this.props.test_titles });
    this.setState({
      test: {
        number: this.props.test_titles.number,
        category: this.props.test_titles.category
      }
    });

    console.log("ddd");
    console.log(this.props.test_titles);
    if (this.props.resultData.arrayAnsw !== undefined) {
      this.setState({
        arrayAnsw: this.props.resultData.arrayAnsw.sort(function(a, b) {
          return parseInt(a.number) - parseInt(b.number);
        })
      });
    }
    //   const test = (await TestServices.getOneTestTitles(this.props.match.params.id))
    //   .data;
    // this.setState({
    //   test: {
    //     number: test[0].number,
    //     category: test[0].category
    //   }
    // });
  }
  results = () => {
    if (this.state.arrayAnsw !== undefined) {
      return this.state.arrayAnsw.map((name, index) => {
        return (
          <div className={classes.testBlock_wrapper}>
            <ResultTestItem
              text={name.text}
              var1={name.var1}
              var2={name.var2}
              var3={name.var3}
              number={name.number}
              chosenAnsw={name.chosenAnsw}
              rightAnsw={name.rightAnsw}
              explanation={name.explanation}
            />
          </div>
        );
      });
    } else {
      return <div>It looks like your answers are empty.</div>;
    }
  };

  render() {
    return (
      <div>
        {/* <PageProgress color={'#FBB4B4'} height={4}/> */}
        <Header />
        <Drift text="Result" />
        <Beforeunload onBeforeunload={event => event.preventDefault()} />
        <div className={classes.main_wrap}>
          <div className={classes.main_container}>
            <div className={classes.main_item}>
              <div className={classes.content}>
                {this.state.arrayAnsw !== undefined ? (
                  <div className={classes.mainText}>
                    {this.state.test.category} - Test №{this.state.test.number}{" "}
                    <br />
                    Your result:
                    {parseInt(
                      (this.state.result.countRigthAnsw /
                        this.props.questions_length) *
                        100
                    )}
                    %<br />{" "}
                  </div>
                ) : null}
                {this.results()}
              </div>
              <div className={classes.top_panel}>
                <Link to="/" className={classes.white_btn}>
                  Take another test
                </Link>
              </div>
              <br />
              <div className={classes.bottom_pannel}>
                <ScrollButton scrollStepInPx="40" delayInMs="16.66" />
              </div>
              <br />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// if (window.performance) {
//   if (performance.navigation.type == 1) {
//     alert( "This page is reloaded" );
//   } else {
//     alert( "This page is not reloaded");
//   }
// }
// window.onbeforeunload = function (evt) {
//   // var message = 'Are you sure you want to leave?';
//   // // if (typeof evt == 'undefined') {
//   // //   evt = window.event;
//   // // }
//   // // if (evt) {
//   // //   evt.returnValue = message;
//   // // }
// return 1
// }
function mapStateToProps(state) {
  // const {resultData} = state
  return {
    resultData: state.resultData,
    answers: state.answers,
    test_titles: state.currentTestTitles,
    questions_length: state.questions_length
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
)(ResultPage);
