import { all, takeLatest, put } from 'redux-saga/effects';
import * as constants from "./constants";
import * as actions from "./actions";

function* handleGetTasks(action) {
    try {
        yield put(actions.getTasksSuccess())
    } catch(error) {
        yield put(actions.getTasksError(error))
    }
}

export default function*() {
    yield all([
        yield takeLatest(constants.GET_TASKS, handleGetTasks),
    ]);
}
