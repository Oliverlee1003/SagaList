import {takeEvery, call, fork, put} from 'redux-saga/effects';
import * as actions from "../actions/users";
import * as api from "../api/users"

function* getUsers() {
    try {
        // call will sequentially call the function/promise, no call back required, return the value
        const result = yield call(api.getUser);
        yield put(actions.getUsersSuccess({
            items: result.data.data
        }));
        console.log(result);

        yield 1;
        yield 2;
        yield 3;
        console.log("15");

    } catch(e) {

    }
}

function* watchGetUsersRequest() {
    yield takeEvery(actions.Types.GET_USERS_REQUEST, getUsers);
}

const usersSagas = [
    fork(watchGetUsersRequest)
];

export default usersSagas;