import { all, takeLatest, put } from 'redux-saga/effects';
import * as constants from "./constants";
import * as actions from "./actions";

function* handleGetBoards(action) {
    try {
        yield put(actions.getBoardsSuccess())
    } catch(error) {
        yield put(actions.getBoardsError(error))
    }
}

export default function*() {
    yield all([
        yield takeLatest(constants.GET_BOARDS, handleGetBoards),
    ]);
}
