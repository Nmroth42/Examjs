import { createStore } from "redux";

const initialState = {

  answers: [],
    //redo
  answers_length: 0,
  resultData: {},
    //redo
  questions_length: 0,
  currentTestTitles: {}
};

const answReducer = (state = initialState, action) => {
  const newState = { ...state };

  if (action.type === "ADD_ANSWER") {
    // console.log(action.value.idTask);
    // newState.answers.push(action.value);
    // var idTask = action.value.idTask;
    let isSet = false;

    for (let entry of initialState.answers) {
      if (action.value.idTask === entry.idTask) {
        isSet = true;
        break;
      }
    }

    if (isSet === false) {
      newState.answers.push(action.value);
    }
    newState.answers_length = newState.answers.length;
    // state.answers.push(action.value);
    // newState.push(+action.val)
    // return newState;
  }
  if (action.type === "ADD_RESULT") {
    newState.resultData = action.value;
    // this.setState({ resultData: action.value.countRigthAnsw })
    // Object.assign( state.resultData, action.value);
    // console.log("rddux")
    // console.log(action.value.countRigthAnsw)
    // console.log( state.resultData)
    // state.answers.push(action.value);
    // newState.push(+action.val)
    // return newState;
    return newState;
  }
  if (action.type === "ADD_CURRENT_QUEST_LENGTH") {
    newState.questions_length = action.value;
    // this.setState({ resultData: action.value.countRigthAnsw })
    // Object.assign( state.resultData, action.value);
    // console.log("rddux")
    // console.log(action.value.countRigthAnsw)
    // console.log( state.resultData)
    // state.answers.push(action.value);
    // newState.push(+action.val)
    // return newState;
    return newState;
  }
  if (action.type === "CLEAR_ANSWER") {
    newState.answers.length = 0;
    newState.answers_length = 0;
    // this.setState({ resultData: action.value.countRigthAnsw })
    // Object.assign( state.resultData, action.value);
    // console.log("rddux")
    // console.log(action.value.countRigthAnsw)
    // console.log( state.resultData)
    // state.answers.push(action.value);
    // newState.push(+action.val)
    // return newState;
    return newState;
  }
  if (action.type === "ADD_CURRENT_TESR_TITLES") {
    newState.currentTestTitles = action.value;
  }

  return newState;
};
const store = createStore(answReducer);

store.subscribe(() => {
  // console.log(store.getState());
  // console.log(initialState.answers.length)
  // for (let index = 0; index < initialState.answers.length; ++index) {

  //   console.log(initialState.answers[index])
  //   if (initialState.answers[index].idTask == '5d07248ca62557361949d049') {
  //     console.log('hfdty')
  //      // options.splice(0,1)
  //   }

  // }
});

export default store;
