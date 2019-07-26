import React, { Component } from "react";
import "./MainPage.css";
import { Link } from "react-router-dom";
import classes from "./MainPage.css";
import TestServices from "../../services/TestsServices";
import Header from "../Header/Header";
import Drift from "../Drift/Drift";

class TestsPage extends Component {
  state = {
    tests: [],
    isLoading: true
  };

  async componentDidMount() {
    const { data } = await TestServices.getTestsTitles();
    this.setState({ tests: data });
    this.setState({ isLoading: false });
  }

  testList = category =>
    this.state.tests.map((name, index) => {
      if (name.category === category) {
        return (
          <li key={name._id}>
            <Link to={"/quiz/" + name._id}>Test №{name.number}</Link>
          </li>
        );
      }
      return null
    });
  render() {
    return (
      <div>
        <Header />
        <Drift text="Choose a test" />
        <div className={classes.main_wrap}>
          <div className={classes.main_container}>
            <div className={classes.main_item}>
              <div className={classes.content}>
                {this.state.isLoading === true ? (
                  <div className={classes.paleText}>Loading...</div>
                ) : (
                  <div>
                    <p>JavaScript in web technologies</p>
                    <ul className={classes.test_chose_wrapper}>
                      {this.testList("JavaScript in web technologies")}
                    </ul>
                    <p>React.js</p>
                    <ul className={classes.test_chose_wrapper}>
                      {this.testList("React.js")}
                    </ul>
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
export default TestsPage;
