import { combineReducers } from 'redux';
import { fetch_user } from "./user";

interface DefaultRootState {
    user: any;
}

const rootReducer: DefaultRootState = {
    user: fetch_user
};


const reducer = combineReducers(rootReducer)
  
export default reducer;  