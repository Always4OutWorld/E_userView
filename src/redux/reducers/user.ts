import {GET_USER_DATA} from '../actions/user';

export const fetch_user = (state = {}, action: any) => {
    if (action.type === GET_USER_DATA) {
        return Object.assign({}, state, { data: null });
    }
    return Object.assign({}, state, { data: null });
};