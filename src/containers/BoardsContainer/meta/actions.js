import * as constants from "./constants";


export const getBoards = () => ({
    type: constants.GET_BOARDS,
});

export const getBoardsSuccess = payload => ({
    type: constants.GET_BOARDS_SUCCESS,
    payload,
});

export const getBoardsError = payload => ({
    type: constants.GET_BOARDS_ERROR,
    payload,
});
