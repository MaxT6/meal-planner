import { combineReducers } from "redux";
import * as types from "./action-types";


const initialMealState = {
  meal: ""
};

function searchStateFunction (state = initialMealState, action) {
  switch(action.type) {
    case types.INPUT_CHANGE: {
      const { meal, value } = action.payload
      return { ...state, [meal]: value } 
    }
    case types.RESET_FORM: {
      return {
        meal: "",
      }
    }
    default:
      return state
  }
};

const initialCardState = "";
function card (state = initialCardState, action) {
  switch(action.type) {
    case types.SHOW_MEAL:
      return (state = action.payload);

      default:
        return state;
  }

}

export default combineReducers({ 
  searchStateFunction, card 
})