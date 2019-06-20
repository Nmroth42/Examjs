import React, {Component} from "react";
import classes from "./TestItem.css";
import {connect} from 'react-redux'

class TestItem extends Component {
  state = {
    currentAnswer:{
      varAnswer:0,
      idTask:''
    }
  }
  handleDestination(event) {
   
    const options=this.state.options
    if(event.target.checked){
      // options.splice(0,1)
      // options.push(+event.target.value)
      // this.props.dispatch({ type: "ADD", value: event.target.value })
      // console.log(this.state.options)
      this.state.currentAnswer.varAnswer = event.target.value
      this.state.currentAnswer.idTask = event.target.attributes[0].value
      this.props.onAddAnswer( this.state.currentAnswer)
      // this.answers.push(+event.target.value)
      // console.log(  this.props.g)
      // console.log(this.state.currentAnswer.varAnswer)
      // console.log(this.state.currentAnswer.idTask)
    }
   
    // this.setState({ options:options})

}
  // const TestItem= (props) => {
render() {
  return (
    <div className={classes.testBlock}>
    <p>
    {this.props.question}
    </p>

    <form action="">

    <div className={classes.r0}>
    <input onClick={event => this.handleDestination(event)} type="radio" idTask={this.props.taskId} id={this.props.taskId+'_answ1'} className={classes.Input} name="answer" value="1"/>
    <label for={this.props.taskId+'_answ1'}>{this.props.answ1}</label>
    <br/>
    </div>

    <div className={classes.r0}>
    <input  onClick={event => this.handleDestination(event)} type="radio"  idTask={this.props.taskId} id={this.props.taskId+'_answ2'} className={classes.Input} name="answer" value="2"/>
    <label for={this.props.taskId+'_answ2'}>{this.props.answ2}</label>
    <br/>
    </div>

    <div className={classes.r0}>
    <input onClick={event => this.handleDestination(event)} type="radio"  idTask={this.props.taskId}  id={this.props.taskId+'_answ3'} className={classes.Input} name="answer" value="3"/>
    <label for={this.props.taskId+'_answ3'}>{this.props.answ3}</label>
    <br/>
    </div>
 
    </form>
    </div>
  )
}
}
// function mapStateToProps(state) {
//   return { answers: state.answers }
// }
const mapDispachToProps = dispatch => {
  return {
    onAddAnswer: (answ) => dispatch({ type: "ADD", value: answ }),
  };
};
export default connect(null, mapDispachToProps)(TestItem);
