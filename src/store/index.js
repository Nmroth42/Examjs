import { createStore } from "redux";



const initialState = {
    answers:[]
  
}

const answReducer = (state = initialState, action) => {
    const newState = {...state};

    if (action.type === 'ADD') {
        state.answers.push(action.value);
        for (let index = 0; index < initialState.answers.length - 1; ++index) {
   
            // console.log(initialState.answers[index])
            if (initialState.answers[index].idTask == action.value.idTask) {
            //   console.log('hfdty')
              initialState.answers.splice(index, 1);
               // options.splice(0,1)
            }
             
          }
        // state.answers.push(action.value);
        // newState.push(+action.val)
        // return newState;
    }
    
    return newState;
}
const store = createStore(answReducer);

store.subscribe(() => {
    console.log(store.getState())
    console.log(initialState.answers.length)
    // for (let index = 0; index < initialState.answers.length; ++index) {
   
    //   console.log(initialState.answers[index])
    //   if (initialState.answers[index].idTask == '5d07248ca62557361949d049') {
    //     console.log('hfdty')
    //      // options.splice(0,1)
    //   }
       
    // }
})


export default store;