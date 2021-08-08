import * as constants from "./constants";


export const getTasks = () => ({
    type: constants.GET_TASKS,
});

export const getTasksSuccess = payload => ({
    type: constants.GET_TASKS_SUCCESS,
    payload,
});

export const getTasksError = payload => ({
    type: constants.GET_TASKS_ERROR,
    payload,
});
