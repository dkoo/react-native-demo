/**
 * Redux reducers related to Container component.
 *
 * @return state
 */

import { CHANGE_BACKGROUND_COLOR } from '../actions/Container';

const INITIAL_STATE = {
	scale: 1
};

export default ( state = INITIAL_STATE, action ) => {
	if ( CHANGE_BACKGROUND_COLOR === action.type ) {
		return { ...state, scale: action.payload };
	}

	return state;
};