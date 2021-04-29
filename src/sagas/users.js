import {takeEvery, takeLatest, take, call, fork, put} from 'redux-saga/effects';
import * as actions from "../actions/users";
import * as api from "../api/users"

function* getUsers() {
    try {
        // call will sequentially call the function/promise, no call back required, return the value
        const result = yield call(api.getUser);
        yield put(actions.getUsersSuccess({
            items: result.data.data
        }));
    } catch(e) {
        yield put(actions.usersError({
            error: "An error occurred when tyring to get the user"
        }));
    }
}

// the redux action is passed in here
function* createUser(action) {
    console.log(action);
    try {
        yield call(api.createUser, {firstName: action.payload.firstName, lastName: action.payload.firstName });
        yield call(getUsers);
    } catch(e) {
        yield put(actions.usersError({
            error: "An error occurred when tyring to create the user"
        }));
    }
}
function* watchGetUsersRequest() {
    yield takeEvery(actions.Types.GET_USERS_REQUEST, getUsers);
}

function* watchCreateUserRequest() {
    yield takeLatest(actions.Types.CREATE_USER_REQUEST, createUser);
}

function* deleteUser({userId}) {
    try {
        yield call(api.deleteUser, {userId});
        yield call(getUsers);
    } catch(e) {
        yield put(actions.usersError({
            error: "An error occurred when tyring to delete the user"
        }));
    }
}

function* watchDeleteUserRequest() {
    while(true) {
        const action = yield take(actions.Types.DELETE_USER_REQUEST);
        yield call(deleteUser, {
            userId: action.payload.userId
        })
    }
}
const usersSagas = [
    fork(watchGetUsersRequest),
    fork(watchCreateUserRequest),
    fork(watchDeleteUserRequest)
];

export default usersSagas;