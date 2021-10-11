import {call, put, takeEvery, takeLatest} from 'redux-saga/effects';
import Api from '../../services/Api';
import {GET_USER_DATA} from '../actions/user';
import {USER_LIST} from './constant';

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
       yield put({type: USER_LIST, user: response});
    } catch (e: any) {
        yield put({type: USER_LIST, message: e.message});
    }
 }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  

export default handlers;

