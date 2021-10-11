import {GET_USER_DATA} from '../actions/user';
import {USER_LIST} from '../sagas/constant';

export const fetch_user = (state = {}, action: any) => {
    if (action.type === USER_LIST) {
        if (action?.user) {
            return Object.assign({}, state, { data: action?.user?.results });
        }
        return Object.assign({}, state, { data: null });
    }
    return Object.assign({}, state, { data: null });
};