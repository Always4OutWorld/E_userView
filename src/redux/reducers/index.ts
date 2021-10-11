import { combineReducers } from 'redux';
import { fetch_user } from "./user";

const rootReducer = {
    fetch_user
};


const reducer = combineReducers(rootReducer)
  
export default reducer;
  