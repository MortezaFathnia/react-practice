import { initialState } from './reducer';
/**
 * Get Tasks
 * @param state
 * @returns {Object}
 */
export const get = state => state.Tasks || initialState;
export const selectTasks = state => select(state).tasks;
