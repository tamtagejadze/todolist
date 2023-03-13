import { createStore } from "@reduxjs/toolkit";

const initialState = {
    feedback: ''
  };
function feedbackReducer (state = initialState, action) {
    switch (action.type) {
      case 'addFeedback':
        return { ...state, feedback: action.data }; 
      default:
        return state;
    }
  }
const store = createStore(feedbackReducer); 

export default store;