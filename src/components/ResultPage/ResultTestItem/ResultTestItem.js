import React, {Component} from "react";
import classes from "./ResultTestItem.css";
import {connect} from 'react-redux'

class ResultTestItem extends Component {
  state = {
    
  }
  handleDestination(event) {
   
  
   
    // this.setState({ options:options})

}
  // const TestItem= (props) => {
render() {
  return (
    <div className={classes.testBlock}>
    
    <p>
    {this.props.text}
    </p>
   
   {this.props.var1}
   <br/>
   {this.props.var2}
   <br/>
   {this.props.var3}
   <br/>
   Your answer{this.props.chosenAnsw}
   <br/>
   {this.props.number}
   <br/>
   Rigth answer{this.props.rightAnsw}
 
  


 
   
    </div>
  )
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
