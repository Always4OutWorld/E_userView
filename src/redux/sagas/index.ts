import {call, put, takeEvery} from 'redux-saga/effects';
import Api from '../../services/Api';
import {GET_USER_DATA} from '../actions/user';

interface ResponseGenerator{
    config?:any,
    data?:any,
    headers?:any,
    request?:any,
    status?:number,
    statusText?:string
}

function* handlers() {
    yield takeEvery(GET_USER_DATA, fetchUser);
}

function* fetchUser() {
    try {
       const response:ResponseGenerator = yield call(Api.fetch_userData);
       yield put({type: "USER_FETCH_SUCCEEDED", user: response});                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   
    } catch (e: any) {
        yield put({type: "USER_FETCH_FAILED", message: e.message});
    }
 }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  

export default handlers;

