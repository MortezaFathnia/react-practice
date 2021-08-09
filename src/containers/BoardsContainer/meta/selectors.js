import { initialState } from './reducer';
/**
 * Get Boards
 * @param state
 * @returns {Object}
 */
export const get = state => state.Boards || initialState;
