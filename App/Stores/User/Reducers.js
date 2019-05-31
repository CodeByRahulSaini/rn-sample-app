/**
 * Reducers specify how the application's state changes in response to actions sent to the store.
 *
 * @see https://redux.js.org/basics/reducers
 */

import { createReducer } from 'reduxsauce';
import { INITIAL_STATE } from './InitialState';
import { UserTypes } from './Actions';

export const loginSuccess = (state, { payload }) => ({ ...state, ...payload });
export const logoutSuccess = () => ({ ...INITIAL_STATE });

/**
 * @see https://github.com/infinitered/reduxsauce#createreducer
 */
export const reducer = createReducer(INITIAL_STATE, {
  [UserTypes.LOGIN_SUCCESS]: loginSuccess,
  [UserTypes.LOGOUT_SUCCESS]: logoutSuccess,
});
